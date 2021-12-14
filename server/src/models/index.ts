import Users from './User'
import Product from './Product'

const models = [Product, Users] as const
export type Model = typeof models[number]
export enum Datatype {
	Text = 'TEXT',
	Numeral = 'NUMERAL',
}

export default models
