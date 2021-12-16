import Product from './Product'

const models = [Product] as const

export type Model = Product

export enum Datatype {
	Text = 'TEXT',
	Numeral = 'NUMERAL',
}

export default models
