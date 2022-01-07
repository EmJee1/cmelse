import { Router } from 'express'
import logger from '../config/winston'
import uploadAsset from '../utils/upload-asset'
import authenticated from '../middlewares/authenticated'
import fileMemoryStorage from '../middlewares/file-memory-storage'

const router = Router()

router.post(
	'/upload',
	authenticated,
	fileMemoryStorage.single('asset'),
	async (req, res) => {
		try {
			const imageUrl = await uploadAsset(req.file)

			res.status(201).json({ url: imageUrl })
		} catch (err) {
			logger.error(`Error while uploading asset to GCP Storage: ${err}`)
			res.status(500).json({ err: 'unexpected error occurred' })
		}
	}
)

export default router
