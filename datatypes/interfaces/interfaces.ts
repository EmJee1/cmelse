import { AnySchema } from 'joi'
import { Datatype } from 'models'

export interface IDatatypeOptions {
	validationSchema: AnySchema
}

export interface IDatatype {
	title: string
	datatype: Datatype
	options: IDatatypeOptions
}
