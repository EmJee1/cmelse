import Numeral from 'datatypes/Numeral'
import Text from 'datatypes/Text'
import BaseModel from './abstracts/BaseModel'

export default class Product extends BaseModel {
	constructor() {
		super('products')

		this.title = new Text('title')
		this.description = new Text('description', { multiline: true })
		this.price = new Numeral('price', { noNegative: true })
	}

	public readonly collection = 'products'

	public readonly endpoint = `/${this.collection}`

	private title: Text

	private description: Text

	private price: Numeral
}
