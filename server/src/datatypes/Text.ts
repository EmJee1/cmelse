import { Datatype } from '../models'

export interface ITextOptions {
	multiline?: boolean
}

class Text {
	constructor(title: string, options: ITextOptions = {}) {
		this.title = title
		this.options = options
	}

	private readonly datatype = Datatype.Text

	private title: string

	private options: ITextOptions
}

export default Text
