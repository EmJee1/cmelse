import { Datatype } from 'models'
import { IDatatypeOptions } from './interfaces/interfaces'

export interface INumeralOptions extends IDatatypeOptions {}

class Numeral {
	constructor(title: string, options: INumeralOptions) {
		this.title = title
		this.options = options
	}

	private readonly datatype = Datatype.Numeral

	private title: string

	private options: INumeralOptions
}

export default Numeral
