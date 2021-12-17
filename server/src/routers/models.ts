import { ObjectId } from 'mongodb'
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

	router.patch(
		`${model.cmsMetadata.endpoint}/:id`,
		validateBody(model, true),
		async (req, res) => {
			let updateResult

			try {
				const modelToUpdate = new ObjectId(req.params.id)

				updateResult = await db
					.collection(model.cmsMetadata.collection)
					.updateOne({ _id: modelToUpdate }, { $set: req.body })
			} catch (err) {
				res.json({ msg: 'Update error' }).status(500)
				return
			}

			if (!updateResult.matchedCount) {
				res.json({ msg: 'No matches found' }).status(404)
				return
			}

			res.sendStatus(204)
		}
	)
})

export default router
