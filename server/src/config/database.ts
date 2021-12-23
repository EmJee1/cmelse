import { MongoClient } from 'mongodb'

const { MONGODB_CONNECTION_STRING } = process.env

const client = new MongoClient(MONGODB_CONNECTION_STRING)

client
	.connect()
	.then(() => console.log('MongoDB connected'))
	.catch(console.error)

const db = client.db()

client.on('error', err => console.error('MongoDB error', err))

export default db
