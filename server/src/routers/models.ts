import { ObjectId } from 'mongodb'
import { Router } from 'express'
import models from 'models'
import validateBodyModel from '../middlewares/validate-body-model'
import authenticated from '../middlewares/authenticated'
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
		authenticated,
		validateBodyModel(model),
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
		authenticated,
		validateBodyModel(model, true),
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
				res.sendStatus(404)
				return
			}

			res.sendStatus(204)
		}
	)

	router.delete(
		`${model.cmsMetadata.endpoint}/:id`,
		authenticated,
		validateBodyModel(model, true),
		async (req, res) => {
			let deleteResult

			try {
				const modelToDelete = new ObjectId(req.params.id)

				deleteResult = await db
					.collection(model.cmsMetadata.collection)
					.deleteOne({ _id: modelToDelete })
			} catch (err) {
				res.json({ msg: 'Deletion error' }).status(500)
				return
			}

			if (!deleteResult.deletedCount) {
				res.sendStatus(404)
				return
			}

			res.sendStatus(204)
		}
	)
})

export default router
