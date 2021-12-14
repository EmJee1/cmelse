import { Router } from 'express'
import models from '../models'

const router = Router()
const modelInstances = models.map(Model => new Model())

modelInstances.forEach(model => {
	router.get(model.endpoint, (req, res) => {
		res.json({
			properties: model.modelProperties,
			endpoint: model.endpoint,
			table: model.table,
		})
	})
})

router.get('/', (req, res) => {
	res.json({
		model: modelInstances.map(model => ({
			table: model.table,
			properties: model.modelProperties,
		})),
	})
})

export default router
