import Numeral from '../datatypes/Numeral'
import Text from '../datatypes/Text'
import BaseModel from './abstracts/BaseModel'

export default class Product extends BaseModel {
	constructor(title: string, description: string, price: number) {
		super('products')

		this.title = new Text(title)
		this.description = new Text(description, { multiline: true })
		this.price = new Numeral(price, { noNegative: true })
	}

	private title: Text

	private description: Text

	private price: Numeral
}

new Product('Schoen', 'Schoen beschrijving', 129.95)
