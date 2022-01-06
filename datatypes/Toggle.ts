import { Datatype } from 'models'
import { IDatatypeOptions } from './interfaces/interfaces'
import { parseOptions } from './utils/create-options'

export interface IToggleOptions extends IDatatypeOptions {}

class Toggle {
	constructor(options: IToggleOptions) {
		this.options = parseOptions(options)
	}

	private readonly datatype = Datatype.Toggle

	private options: Required<IToggleOptions>
}

export default Toggle
