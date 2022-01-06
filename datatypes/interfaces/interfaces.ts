import { AnySchema } from 'joi'
import { Datatype } from 'models'

export interface IDatatypeOptions {
	displayTitle: string
	databaseKey?: string
	validationSchema: AnySchema
}

export interface IDatatype {
	datatype: Datatype
	options: IDatatypeOptions
}
