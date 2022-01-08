import { ObjectId } from 'mongodb'
import db from '../config/database'
import logger from '../config/winston'
import storage from '../config/storage'
import { createFileSlug } from './create-slug'

const BUCKET_NAME = 'asset-library'

const bucket = storage.bucket(BUCKET_NAME)

interface IAsset {
	_id: ObjectId
	filename: string
	createdAt: Date
}

export const parseAssetUrl = (filename: string) =>
	`https://storage.googleapis.com/${BUCKET_NAME}/${filename}`

/**
 * Uploads a Multer parsed file to Cloud Storage
 * @param {Express.Multer.File} file - A parsed multer file
 * @returns {string} The filename
 */
export const uploadAssetToCloudStorage = ({
	buffer,
}: Express.Multer.File): Promise<string> =>
	new Promise((resolve, reject) => {
		const filename = createFileSlug()
		const blob = bucket.file(filename)

		blob.exists().then(exists => {
			if (exists) {
				logger.warn(
					`Did not upload asset ${filename}, it already exists`
				)
				reject(Error('File already exists in cloud storage'))
				return
			}

			const blobStream = blob.createWriteStream({ resumable: false })

			blobStream
				.on('finish', () => {
					logger.info(`Uploaded image ${blob.name} to Cloud Storage`)
					resolve(blob.name)
				})
				.on('error', err => {
					logger.error(
						`Error uploading image to Cloud Storage: ${err}`
					)
					reject(
						Error('Unable to upload image, something went wrong')
					)
				})
				.end(buffer)
		})
	})

export const insertAssetToDatabase = async (
	filename: string,
	contentType: string
) => {
	const { insertedId } = await db.collection<IAsset>('assets').insertOne({
		filename,
		createdAt: new Date(),
	})

	return insertedId
}
