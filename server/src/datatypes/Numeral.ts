import { Datatype } from '../models'

export interface INumeralOptions {
	noDecimal?: boolean
	noNegative?: boolean
}

class Numeral {
	constructor(title: string, options: INumeralOptions = {}) {
		this.title = title
		this.options = options
	}

	private readonly datatype = Datatype.Numeral

	private title: string

	private options: INumeralOptions
}

export default Numeral
