import { MongoClient } from 'mongodb'
import logger from './winston'

const { MONGODB_CONNECTION_STRING } = process.env

const client = new MongoClient(MONGODB_CONNECTION_STRING)

client
	.connect()
	.then(() => logger.info('MongoDB connected'))
	.catch(err => logger.error(`MongoDB connection error ${err}`))

const db = client.db()

client.on('error', err => logger.error(`MongoDB error ${err}`))

export default db
