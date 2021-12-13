import Numeral from '../datatypes/Numeral'
import Text from '../datatypes/Text'
import BaseModel from './abstracts/BaseModel'

export default class Users extends BaseModel {
	constructor() {
		super('users')

		this.username = new Text()
		this.biography = new Text({ multiline: true })
		this.age = new Numeral({ noDecimal: true, noNegative: true })
	}

	private username: Text

	private biography: Text

	private age: Numeral
}
