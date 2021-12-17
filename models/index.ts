import { Model } from './interfaces/interfaces'
import Product from './Product'

const models = [Product]

export enum Datatype {
	Text = 'TEXT',
	Numeral = 'NUMERAL',
}

export default models.map(M => new M()) as unknown as Model[]
