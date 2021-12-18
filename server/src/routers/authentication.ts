import { Router } from 'express'
import db from '../config/database'

const router = Router()

// TODO: validate body
router.post('/register', async (req, res) => {
	const { username, email } = req.body

	try {
		const result = await db
			.collection('users')
			.findOne({ $or: [{ username }, { email }] })

		if (result) {
			res.sendStatus(409)
			return
		}

		await db.collection('users').insertOne(req.body)
	} catch (err) {
		res.sendStatus(500)
		return
	}

	res.sendStatus(204)
})

export default router
