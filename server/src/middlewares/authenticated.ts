import { NextFunction, Request, Response } from 'express'
import IUser from 'models/interfaces/user'
import db from '../config/database'
import { verifyJwt } from '../utils/jsonwebtoken'

/**
 * Express middleware to ensure the request has a valid token in the header.
 * Populates the user property on the request object with the user by id from the token
 */
const authenticated = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (!req.headers.authorization) {
		res.status(401).json({ err: 'Authentication token is required' })
		return
	}

	const [protocol, token] = req.headers.authorization.split(' ')

	if (protocol !== 'Bearer') {
		res.status(401).json({ err: 'Token should be of type bearer' })
		return
	}

	try {
		const userId = verifyJwt(token)
		req.user = await db.collection('users').findOne<IUser>({ _id: userId })
	} catch (err) {
		res.status(401).json({ err: 'The token is not valid' })
		return
	}

	next()
}

export default authenticated
