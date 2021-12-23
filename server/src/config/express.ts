import express from 'express'
import cors from 'cors'

const { CMS_PORT } = process.env

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// TODO: implement custom logger
// TODO: re-enable no console rule in eslint
app.listen(CMS_PORT, () => {
	console.log(`> Express ready and listening\n> http://localhost:${CMS_PORT}`)
})

export default app
