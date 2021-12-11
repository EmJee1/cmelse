export interface INumeralOptions {
	noDecimal?: boolean
	noNegative?: boolean
}

class Numeral {
	constructor(value: number, options: INumeralOptions = {}) {
		this.value = value
		this.options = options
	}

	private value: number

	private options: INumeralOptions
}

export default Numeral
