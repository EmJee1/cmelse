import Joi from 'joi'
import Numeral from 'datatypes/Numeral'
import Text from 'datatypes/Text'
import BaseModel from './abstracts/BaseModel'
import Toggle from 'datatypes/Toggle'
import Enum from 'datatypes/Enum'

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

		this.isFeatured = new Toggle({
			displayTitle: 'Is featured',
			validationSchema: Joi.boolean().required(),
		})

		const suggestedSeasonItems = ['spring', 'summer', 'fall', 'winter']
		this.suggestedSeason = new Enum({
			displayTitle: 'Suggested Season',
			validationSchema: Joi.string()
				.valid(...suggestedSeasonItems)
				.required(),
			items: suggestedSeasonItems,
		})
	}

	private title: Text

	private description: Text

	private price: Numeral

	private isFeatured: Toggle

	private suggestedSeason: Enum
}
