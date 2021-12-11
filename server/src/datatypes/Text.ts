export interface ITextOptions {
	multiline?: boolean
}

class Text {
	constructor(value: string, options: ITextOptions = {}) {
		this.value = value
		this.options = options
	}

	private value: string

	private options: ITextOptions
}

export default Text
