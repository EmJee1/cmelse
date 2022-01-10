import { Storage } from '@google-cloud/storage'
import path from 'path'

const serviceKey = path.join(__dirname, '../../gcp-service-key.json')

const storage = new Storage({ keyFilename: serviceKey })

export const assetBucket = storage.bucket('asset-library')

export default storage
