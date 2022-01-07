import storage from '../config/storage'
import createStrictSlug from './create-slug'

const bucket = storage.bucket('asset-library')

const uploadAsset = ({ originalname, buffer }: Express.Multer.File) =>
	new Promise((resolve, reject) => {
		const filename = createStrictSlug(originalname)
		const blob = bucket.file(filename)
		const blobStream = blob.createWriteStream({ resumable: false })

		blobStream
			.on('finish', () => {
				const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`
				resolve(publicUrl)
			})
			.on('error', () =>
				reject(Error('Unable to upload image, something went wrong'))
			)
			.end(buffer)
	})

export default uploadAsset
