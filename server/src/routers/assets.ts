import { Router } from 'express'
import db from '../config/database'
import logger from '../config/winston'
import storage from '../config/storage'
import Asset, { IAsset } from '../assets/Asset'
import { parseAssetUrl } from '../utils/assets'
import authenticated from '../middlewares/authenticated'
import fileMemoryStorage from '../middlewares/file-memory-storage'
import CloudStorageAssetProvider from '../assets/providers/CloudStorageAssetProvider'

const router = Router()

router.get('/', authenticated, async (req, res) => {
	try {
		const files = await db.collection<IAsset>('assets').find().toArray()

		const filesWithUrl = files.map(file => ({
			...file,
			url: parseAssetUrl(file.filename),
		}))

		res.status(200).json({ files: filesWithUrl })
	} catch (err) {
		logger.error(`Error while retrieving asset list ${err}`)
	}
})

router.post(
	'/upload',
	authenticated,
	fileMemoryStorage.single('asset'),
	async (req, res) => {
		if (!req.file) {
			res.status(400).json({ err: 'No asset was sent' })
			return
		}

		const assetProvider = new CloudStorageAssetProvider(
			storage.bucket('asset-library')
		)
		const asset = new Asset(assetProvider, req.file)

		try {
			asset.ensureValidity()
		} catch {
			logger.warn('Tried uploading asset with unsupported mimetype')
			res.status(400).json({ err: 'Mimetype is unsupported' })
			return
		}

		try {
			await asset.store()
			const id = await asset.saveToDb()

			res.status(201).json({ id, url: asset.assetUrl })
		} catch (err) {
			logger.error(`Error while uploading asset: ${err}`)
			res.status(500).json({ err: 'unexpected error occurred' })
		}
	}
)

export default router
