import express from 'express'
import modelsRouter from './routers/models'

const app = express()

app.use(modelsRouter)

app.listen(3001)
