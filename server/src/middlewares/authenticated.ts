import { NextFunction, Request, Response } from 'express'
import { verifyJwt } from '../utils/jsonwebtoken'

/**
 * Express middleware to ensure the request has a valid token in the header
 */
const authenticated = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const [protocol, token] = req.headers.authorization.split(' ')

	if (protocol !== 'Bearer') {
		res.status(401).json({ err: 'Token should be of type bearer' })
		return
	}

	try {
		verifyJwt(token)
	} catch (err) {
		res.status(401).json({ err: 'The token is not valid' })
		return
	}

	next()
}

export default authenticated
