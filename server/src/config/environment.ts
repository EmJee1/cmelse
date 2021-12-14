import { config } from 'dotenv'
import expand from 'dotenv-expand'

const environment = config()
expand(environment)
