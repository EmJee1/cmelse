import { Datatype } from 'models'

export interface IDatatypeOptions {
	validationSchema: any
}

export interface IDatatype {
	title: string
	datatype: Datatype
	options: IDatatypeOptions
}
