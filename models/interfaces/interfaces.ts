import { IDatatype } from 'datatypes/interfaces/interfaces'

export interface IBaseModelOptions {
	endpoint?: string
	title?: string
}

export interface ICmsMetadata extends Required<IBaseModelOptions> {
	collection: string
}

export interface Model {
	[key: string]: IDatatype | ICmsMetadata
	cmsMetadata: ICmsMetadata
}
