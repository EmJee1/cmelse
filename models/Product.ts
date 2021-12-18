import Joi from 'joi'
import Numeral from 'datatypes/Numeral'
import Text from 'datatypes/Text'
import BaseModel from './abstracts/BaseModel'

export default class Product extends BaseModel {
	constructor() {
		super('products', { title: 'Products' })

		this.title = new Text('title', {
			validationSchema: Joi.string().required(),
		})
		this.description = new Text('description', {
			multiline: true,
			validationSchema: Joi.string().required(),
		})
		this.price = new Numeral('price', {
			validationSchema: Joi.number().min(0).required(),
		})
	}

	private title: Text

	private description: Text

	private price: Numeral
}
