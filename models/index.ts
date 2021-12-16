import Numeral from 'datatypes/Numeral'
import Text from 'datatypes/Text'
import { ICmsMetadata } from './abstracts/BaseModel'
import Product from './Product'

const models = [Product] as const

export type Model = Product

export type DatatypeItem = Numeral | Text

export interface AnyModel {
	[key: string]: DatatypeItem | ICmsMetadata
	cmsMetadata: ICmsMetadata
}

export enum Datatype {
	Text = 'TEXT',
	Numeral = 'NUMERAL',
}

export default models
