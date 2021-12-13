export interface ITextOptions {
	multiline?: boolean
}

class Text {
	constructor(options: ITextOptions = {}) {
		this.options = options
	}

	private options: ITextOptions
}

export default Text
