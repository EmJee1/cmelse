import { ObjectId } from 'mongodb'
import { sign, verify } from 'jsonwebtoken'

const { JSON_WEBTOKEN_SECRET } = process.env

/**
 * Sign a new jsonwebtoken
 * @param {ObjectId} userId - The id to create a jwt for
 * @returns {string} - Jsonwebtoken
 */
export const signJwt = (userId: ObjectId) => {
	const token = sign({ id: userId }, JSON_WEBTOKEN_SECRET, {
		expiresIn: '2 days',
	})

	return token
}

/**
 * Verify a jsonwebtoken and return userid
 * @param {string} token - The Jsonwebtoken to verify
 * @returns {ObjectId} The decoded user id as objectId
 */
export const verifyJwt = (token: string): ObjectId => {
	try {
		const decoded = verify(token, JSON_WEBTOKEN_SECRET)

		// return as invalid jwt if decoded does not contain the user id
		if (typeof decoded === 'string' || !decoded.id) throw new Error()

		return new ObjectId(decoded.id)
	} catch (err) {
		throw new Error()
	}
}
