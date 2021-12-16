import Joi from 'joi'
import Numeral from 'datatypes/Numeral'
import Text from 'datatypes/Text'
import BaseModel from './abstracts/BaseModel'

export default class Product extends BaseModel {
	constructor() {
		super('products', { title: 'Products' })

		this.title = new Text('title', { validationSchema: Joi.string() })
		this.description = new Text('description', {
			multiline: true,
			validationSchema: Joi.string(),
		})
		this.price = new Numeral('price', { noNegative: true })
	}

	private title: Text

	private description: Text

	private price: Numeral
}
