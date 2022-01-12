import { extname } from 'path'
import { ObjectId } from 'mongodb'
import db from '../config/database'
import logger from '../config/winston'
import { createFileSlug } from '../utils/create-slug'
import IAssetProvider from './providers/ProviderInterface'

export interface IAsset {
	_id: ObjectId
	filename: string
	contentType: string
	imageAlt?: string
	createdAt: Date
}

// TODO: save and store files via a queue instead of a direct call
/**
 * Asset class instantiated with a Multer file from a request body
 * Meant to be only instantiated with new files to store and insert assets
 * To edit and receive data about existing assets, use the Asset class
 */
class AssetStore {
	constructor(assetProvider: IAssetProvider, file: Express.Multer.File) {
		this.assetProvider = assetProvider
		this.file = file
		this.filename = `${createFileSlug()}${extname(file.originalname)}`
	}

	// TODO: add support for more than just images (text, audio etc.)
	// list of mimetypes: https://docs.w3cub.com/http/basics_of_http/mime_types/complete_list_of_mime_types
	private readonly allowedMimetypes = [
		'image/jpeg',
		'image/png',
		'image/svg+xml',
		'image/webp',
	]

	private assetProvider: IAssetProvider

	private file: Express.Multer.File

	private readonly filename: string

	/**
	 * Throws error if the asset is not validated
	 * Checks for valid mimetype
	 */
	public ensureValidity() {
		if (!this.allowedMimetypes.includes(this.file.mimetype)) {
			logger.warn(
				`Asset ${this.filename} with mimetype ${this.file.mimetype} is not supported`
			)
			throw new Error('Unsupported mimetype')
		}
	}

	/**
	 * Store asset in the selected asset provider
	 */
	public async store() {
		await this.assetProvider.saveAsset(this.file, this.filename)
	}

	/**
	 * Save asset data to database
	 * @returns {ObjectId} The database id
	 */
	public async saveToDb(other: Partial<IAsset> = {}) {
		try {
			const { insertedId } = await db
				.collection<IAsset>('assets')
				.insertOne({
					...other,
					filename: this.filename,
					contentType: this.file.mimetype,
					createdAt: new Date(),
				})

			return insertedId
		} catch (err) {
			logger.error(`Inserting ${this.filename} into assets: ${err}`)
			throw new Error('Db asset insertion error')
		}
	}

	get assetUrl() {
		return this.assetProvider.getAssetUrl(this.filename)
	}

	get isImage() {
		return this.file.mimetype.startsWith('image/')
	}
}

export default AssetStore
