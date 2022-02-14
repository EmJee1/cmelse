import express from 'express'
import cors from 'cors'
import logger from './winston'
import morgan from './morgan'
import setLocale from '../middlewares/set-locale'

const { CMS_PORT } = process.env

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan)
app.use(setLocale)

app.listen(CMS_PORT, () => {
	logger.info('Express ready and listening')
	logger.debug(`http://localhost:${CMS_PORT}`)
})

export default app
