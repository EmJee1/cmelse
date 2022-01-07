import { Storage } from '@google-cloud/storage'
import path from 'path'

const serviceKey = path.join(__dirname, '../../gcp-service-key.json')

const storage = new Storage({ keyFilename: serviceKey })

export default storage

// TODO: upload images from endpoints
// https://medium.com/@olamilekan001/image-upload-with-google-cloud-storage-and-node-js-a1cf9baa1876
