import { Datatype } from 'models'
import { IDatatypeOptions } from './interfaces/interfaces'
import { parseOptions } from './utils/create-options'

export interface INumeralOptions extends IDatatypeOptions {}

class Numeral {
	constructor(options: INumeralOptions) {
		this.options = parseOptions(options)
	}

	private readonly datatype = Datatype.Numeral

	private options: Required<INumeralOptions>
}

export default Numeral
