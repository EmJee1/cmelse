import Users from '../models/User'
import Product from '../models/Product'

const models = [Product, Users] as const
export type Model = typeof models[number]
export enum Datatype {
	Text = 'TEXT',
	Numeral = 'NUMERAL',
}

export default models
