export interface INumeralOptions {
	noDecimal?: boolean
	noNegative?: boolean
}

class Numeral {
	constructor(title: string, options: INumeralOptions = {}) {
		this.title = title
		this.options = options
	}

	private title: string

	private options: INumeralOptions
}

export default Numeral
