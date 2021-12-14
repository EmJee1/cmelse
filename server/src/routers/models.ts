import { Router } from 'express'
import models from '../models'

const router = Router()
const modelInstances = models.map(Model => new Model())

modelInstances.forEach(model => {
	router.get(model.endpoint, async (req, res) => {
		const data = await model.fetchAll()

		res.json({ data })
	})

	router.post(model.endpoint, async (req, res) => {
		try {
			await model.insertOne(req.body)
			res.sendStatus(204)
		} catch (err) {
			res.json({ msg: 'Insertion error', err }).status(500)
		}
	})
})

router.get('/', (req, res) => {
	res.json({
		data: modelInstances.map(model => ({
			collection: model.collection,
			properties: model.modelsWithProperties,
		})),
	})
})

export default router
