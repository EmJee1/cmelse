import { NextFunction, Request, Response } from 'express'
import IUser from 'models/interfaces/user'
import db from '../config/database'
import { verifyJwt } from '../utils/jsonwebtoken'

/**
 * Express middleware to ensure the request has a valid token in the header.
 * Populates the user property on the request object with the user by id from the token
 */
const authenticated = async (req: Request, res: Response, next: NextFunction) => {
	if (!req.headers.authorization) {
		res.status(401).error('authentication.token.notSent')
		return
	}

	const [protocol, token] = req.headers.authorization.split(' ')

	if (protocol !== 'Bearer') {
		res.status(401).error('authentication.token.protocolBearer')
		return
	}

	try {
		const userId = verifyJwt(token)
		req.user = () => db.collection('users').findOne<IUser>({ _id: userId })
	} catch (err) {
		res.status(401).error('authentication.token.invalid')
		return
	}

	next()
}

export default authenticated
