import { Router } from 'express'
import { ObjectId } from 'mongodb'
import db from '../config/database'
import logger from '../config/winston'
import { parseAssetUrl, uploadAsset } from '../utils/assets'
import authenticated from '../middlewares/authenticated'
import fileMemoryStorage from '../middlewares/file-memory-storage'

const router = Router()

interface IAsset {
	_id: ObjectId
	filename: string
	createdAt: Date
}

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
		try {
			const filename = await uploadAsset(req.file)

			const { insertedId } = await db
				.collection<IAsset>('assets')
				.insertOne({
					filename,
					createdAt: new Date(),
				})

			res.status(201).json({ id: insertedId })
		} catch (err) {
			logger.error(`Error while uploading asset to GCP Storage: ${err}`)
			res.status(500).json({ err: 'unexpected error occurred' })
		}
	}
)

export default router
