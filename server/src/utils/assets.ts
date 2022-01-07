import logger from '../config/winston'
import storage from '../config/storage'
import { createFileSlug } from './create-slug'

const BUCKET_NAME = 'asset-library'

const bucket = storage.bucket(BUCKET_NAME)

export const parseAssetUrl = (filename: string) =>
	`https://storage.googleapis.com/${BUCKET_NAME}/${filename}`

/**
 * Uploads a Multer parsed file to Cloud Storage
 * @param {Express.Multer.File} file - A parsed multer file
 * @returns {string} The filename
 */
export const uploadAsset = ({
	originalname,
	buffer,
}: Express.Multer.File): Promise<string> =>
	new Promise((resolve, reject) => {
		const filename = createFileSlug(originalname)
		const blob = bucket.file(filename)
		const blobStream = blob.createWriteStream({ resumable: false })

		blobStream
			.on('finish', () => {
				logger.info(`Uploaded image ${blob.name} to Cloud Storage`)
				resolve(blob.name)
			})
			.on('error', err => {
				logger.error(`Error uploading image to Cloud Storage: ${err}`)
				reject(Error('Unable to upload image, something went wrong'))
			})
			.end(buffer)
	})
