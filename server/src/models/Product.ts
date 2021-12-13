import Numeral from '../datatypes/Numeral'
import Text from '../datatypes/Text'
import BaseModel from './abstracts/BaseModel'

export default class Product extends BaseModel {
	constructor() {
		super('products')

		this.title = new Text()
		this.description = new Text({ multiline: true })
		this.price = new Numeral({ noNegative: true })
	}

	private title: Text

	private description: Text

	private price: Numeral
}
