import logger from '../config/winston'
import storage from '../config/storage'
import { createFileSlug } from './create-slug'

const bucket = storage.bucket('asset-library')

const uploadAsset = ({ originalname, buffer }: Express.Multer.File) =>
	new Promise((resolve, reject) => {
		const filename = createFileSlug(originalname)
		const blob = bucket.file(filename)
		const blobStream = blob.createWriteStream({ resumable: false })

		blobStream
			.on('finish', () => {
				const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`
				resolve(publicUrl)
			})
			.on('error', err => {
				logger.error(`Error uploading image to Cloud Storage: ${err}`)
				reject(Error('Unable to upload image, something went wrong'))
			})
			.end(buffer)
	})

export default uploadAsset
