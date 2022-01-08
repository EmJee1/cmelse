import { extname } from 'path'
import { ObjectId } from 'mongodb'
import { createFileSlug } from '../utils/create-slug'
import IAssetProvider from './providers/ProviderInterface'

export interface IAsset {
	_id: ObjectId
	filename: string
	createdAt: Date
}

class Asset {
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

	public ensureValidity() {
		if (!this.allowedMimetypes.includes(this.file.mimetype)) {
			throw new Error('Unsupported mimetype')
		}
	}

	public async save() {
		await this.assetProvider.saveAsset(this.file, this.filename)
	}

	get assetUrl() {
		return this.assetProvider.getAssetUrl(this.filename)
	}
}

export default Asset
