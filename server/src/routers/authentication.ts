import { Router } from 'express'
import { genSalt, hash as genHash, compare } from 'bcrypt'
import validateBodySchema from '../middlewares/validate-body-schema'
import { login, register } from '../validation/authentication'
import { signJwt } from '../utils/jsonwebtoken'
import db from '../config/database'

const router = Router()

const { BCRYPT_SALT_ROUNDS } = process.env

router.post('/register', validateBodySchema(register), async (req, res) => {
	const { username, email, password } = req.body

	let queryResult
	try {
		queryResult = await db.collection('users').findOne({ $or: [{ username }, { email }] })
	} catch (err) {
		res.status(500).error('global.unexpectedServerError')
		return
	}

	if (queryResult) {
		const msg =
			username === queryResult.username
				? 'authentication.register.usernameAlreadyExists'
				: 'authentication.register.emailAlreadyExists'

		res.status(409).error(msg)
		return
	}

	let insertResult
	try {
		const salt = await genSalt(Number(BCRYPT_SALT_ROUNDS))
		const hash = await genHash(password, salt)

		insertResult = await db.collection('users').insertOne({ ...req.body, password: hash })
	} catch (err) {
		res.status(500).error('global.unexpectedServerError')
		return
	}

	const token = signJwt(insertResult.insertedId)

	res.status(201).json({ token })
})

router.post('/login', validateBodySchema(login), async (req, res) => {
	// identifier can be username or email
	const { identifier, password } = req.body

	let user
	try {
		user = await db
			.collection('users')
			.findOne({ $or: [{ username: identifier }, { email: identifier }] })
	} catch (err) {
		res.status(500).error('global.unexpectedServerError')
		return
	}

	if (!user) {
		res.status(401).error('authentication.login.incorrectIdentifier')
		return
	}

	let passwordValid
	try {
		passwordValid = await compare(password, user?.password)
	} catch (err) {
		res.status(500).error('global.unexpectedServerError')
		return
	}

	if (!passwordValid) {
		res.status(401).error('authentication.login.incorrectPassword')
		return
	}

	const token = signJwt(user._id)

	res.status(200).json({ token, username: user.username, email: user.email })
})

export default router
