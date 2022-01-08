interface IAssetProvider {
	saveAsset(file: Express.Multer.File, filename: string): Promise<void>
	getAssetUrl(filename: string): string
}

export default IAssetProvider
