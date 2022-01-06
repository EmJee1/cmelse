import { Datatype } from 'models'
import { IDatatypeOptions } from './interfaces/interfaces'
import { parseOptions } from './utils/create-options'

export interface ITextOptions extends IDatatypeOptions {
	multiline?: boolean
}

class Text {
	constructor(options: ITextOptions) {
		this.options = parseOptions(options)
	}

	private readonly datatype = Datatype.Text

	private options: Required<ITextOptions>
}

export default Text
