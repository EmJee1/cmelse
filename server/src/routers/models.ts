import { Router } from 'express'
import models from '../models'

const router = Router()

models.forEach(model => {
	const modelInstance = new model()

	router.get(modelInstance.endpoint, (req, res) => {
		res.json({
			properties: modelInstance.modelProperties,
			endpoint: modelInstance.endpoint,
			table: modelInstance.table,
		})
	})
})

export default router
