import express from 'express'
import cors from 'cors'
import logger from './winston'

const { CMS_PORT } = process.env

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.listen(CMS_PORT, () => {
	logger.info('Express ready and listening')
	logger.debug(`http://localhost:${CMS_PORT}`)
})

export default app
