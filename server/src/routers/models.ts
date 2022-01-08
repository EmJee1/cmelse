import { ObjectId } from 'mongodb'
import { Router } from 'express'
import models from 'models'
import db from '../config/database'
import timestamps from '../utils/timestamps'
import validateBodyModel from '../middlewares/validate-body-model'
import authenticated from '../middlewares/authenticated'

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
				await db.collection(model.cmsMetadata.collection).insertOne({
					...req.body,
					...timestamps(),
				})

				res.sendStatus(204)
			} catch (err) {
				res.status(500).json({ msg: 'Insertion error' })
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
					.updateOne(
						{ _id: modelToUpdate },
						{ $set: { ...req.body, ...timestamps(false) } }
					)
			} catch (err) {
				res.status(500).json({ err: 'Update error' })
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
				res.status(500).json({ msg: 'Deletion error' })
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
