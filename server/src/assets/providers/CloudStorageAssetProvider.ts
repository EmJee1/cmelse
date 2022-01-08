import { Bucket } from '@google-cloud/storage'
import logger from '../../config/winston'
import IAssetProvider from './ProviderInterface'

class CloudStorageAssetProvider implements IAssetProvider {
	constructor(bucket?: Bucket) {
		this.bucket = bucket
	}

	private bucket: Bucket

	public async saveAsset(file: Express.Multer.File, filename: string) {
		if (!this.bucket) {
			logger.error(
				`The bucket was not configured in CloudStorageAssetProvider while trying to save asset ${filename}`
			)
			throw new Error('No bucket was configured assetProvider')
		}

		const cloudFile = this.bucket.file(filename)

		if ((await cloudFile.exists())[0]) {
			logger.warn(`Asset ${filename} already exists`)
			throw new Error('Duplicate asset error')
		}

		const stream = cloudFile.createWriteStream({ resumable: false })

		stream
			.on('finish', () => logger.info(`Uploaded asset ${cloudFile.name}`))
			.on('error', err => {
				logger.error(`Error uploading ${cloudFile.name}: ${err}`)
				throw new Error('Unable to upload asset, something went wrong')
			})
			.end(file.buffer)
	}

	public getAssetUrl(filename: string) {
		return `https://storage.googleapis.com/${this.bucket.name}/${filename}`
	}
}

export default CloudStorageAssetProvider
