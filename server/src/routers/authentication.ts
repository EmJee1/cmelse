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
			const msg =
				username === result.username
					? 'A user with that username already exists'
					: 'A user with that email already exists'

			res.json({ msg }).status(409)
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
