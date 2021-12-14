import './config/environment'
import app from './config/express'
import modelsRouter from './routers/models'

app.use('/models', modelsRouter)
