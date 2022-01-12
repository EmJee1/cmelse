import { Datatype } from 'models'
import { IDatatypeOptions } from './interfaces/interfaces'
import { parseOptions } from './utils/create-options'

export interface IEnumOptions extends IDatatypeOptions {
	items: string[]
}

class Enum {
	constructor(options: IEnumOptions) {
		this.options = parseOptions(options)
	}

	private readonly datatype = Datatype.Enum

	private options: Required<IEnumOptions>
}

export default Enum
