import { IAsset } from './AssetStore'
import IAssetProvider from './providers/ProviderInterface'

class Asset {
	constructor(assetProvider: IAssetProvider, asset: IAsset) {
		this.assetProvider = assetProvider
		this.asset = asset
	}

	private readonly assetProvider: IAssetProvider

	private asset: IAsset

	public get assetUrl() {
		return this.assetProvider.getAssetUrl(this.asset.filename)
	}
}

export default Asset
