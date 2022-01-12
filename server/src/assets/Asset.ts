import { IAsset } from './AssetStore'
import IAssetProvider from './providers/ProviderInterface'

/**
 * Asset class instantiated with an asset object
 * Meant to be only instantiated with existing assets to receive data and edit them
 * To save and insert new assets, use the AssetStore class
 */
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
