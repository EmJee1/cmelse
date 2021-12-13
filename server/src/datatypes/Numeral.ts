export interface INumeralOptions {
	noDecimal?: boolean
	noNegative?: boolean
}

class Numeral {
	constructor(options: INumeralOptions = {}) {
		this.options = options
	}

	private options: INumeralOptions
}

export default Numeral
