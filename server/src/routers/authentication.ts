import { Router } from 'express'
import { genSalt, hash as genHash } from 'bcrypt'
import { signJwt } from '../utils/jsonwebtoken'
import db from '../config/database'

const router = Router()

const { BCRYPT_SALT_ROUNDS } = process.env

// TODO: validate body
router.post('/register', async (req, res) => {
	const { username, email, password } = req.body

	let queryResult
	try {
		queryResult = await db
			.collection('users')
			.findOne({ $or: [{ username }, { email }] })
	} catch (err) {
		res.sendStatus(500)
		return
	}

	if (queryResult) {
		const msg =
			username === queryResult.username
				? 'A user with that username already exists'
				: 'A user with that email already exists'

		res.json({ msg }).status(409)
		return
	}

	let insertResult
	try {
		const salt = await genSalt(Number(BCRYPT_SALT_ROUNDS))
		const hash = await genHash(password, salt)

		insertResult = await db
			.collection('users')
			.insertOne({ ...req.body, password: hash })
	} catch (err) {
		res.sendStatus(500)
		return
	}

	const token = signJwt(insertResult.insertedId)

	res.json({ token }).status(201)
})

export default router
