import Joi from 'joi'
import Numeral from 'datatypes/Numeral'
import Text from 'datatypes/Text'
import BaseModel from './abstracts/BaseModel'
import Toggle from 'datatypes/Toggle'

export default class Product extends BaseModel {
	constructor() {
		super('products', { title: 'Products' })

		this.title = new Text({
			displayTitle: 'Title',
			validationSchema: Joi.string().required(),
		})
		this.description = new Text({
			displayTitle: 'Description',
			multiline: true,
			validationSchema: Joi.string().required(),
		})
		this.price = new Numeral({
			displayTitle: 'Price',
			validationSchema: Joi.number().min(0).required(),
		})

		this.IsFeatured = new Toggle({
			displayTitle: 'Is Featured',
			validationSchema: Joi.boolean().required(),
		})
	}

	private title: Text

	private description: Text

	private price: Numeral

	private IsFeatured: Toggle
}
