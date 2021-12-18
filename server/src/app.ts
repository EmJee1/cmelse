import './config/environment'
import app from './config/express'
import modelsRouter from './routers/models'
import authenticationRouter from './routers/authentication'

app.use('/models', modelsRouter)
app.use('/authentication', authenticationRouter)
