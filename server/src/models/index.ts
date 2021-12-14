import Users from '../models/User'
import Product from '../models/Product'
import Numeral from '../datatypes/Numeral'
import Text from '../datatypes/Text'

const models = [Product, Users] as const
export type Model = typeof models[number]
export type Datatype = Text | Numeral

export default models
