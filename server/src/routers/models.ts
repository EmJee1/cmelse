import { Router } from 'express'
import models from 'models'
import validateBody from '../middlewares/validate-body'
import db from '../config/database'

const router = Router()

models.forEach(model => {
	router.get(model.cmsMetadata.endpoint, async (req, res) => {
		const data = await db
			.collection(model.cmsMetadata.collection)
			.find()
			.toArray()

		res.json({ data })
	})

	router.post(
		model.cmsMetadata.endpoint,
		validateBody(model),
		async (req, res) => {
			try {
				await db
					.collection(model.cmsMetadata.collection)
					.insertOne(req.body)

				res.sendStatus(204)
			} catch (err) {
				res.json({ msg: 'Insertion error' }).status(500)
			}
		}
	)
})

export default router
