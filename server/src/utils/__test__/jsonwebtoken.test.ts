import { ObjectId } from 'mongodb'
import { signJwt, verifyJwt } from '../jsonwebtoken'

describe('Sign json webtoken', () => {
	test('Expect token to be defined', () => {
		const mockId = new ObjectId(ObjectId.generate())
		expect(signJwt(mockId)).toBeDefined()
	})
})

describe('Verify json webtoken', () => {
	test('Expect valid token to pass', () => {
		const jwt = signJwt(new ObjectId(ObjectId.generate()))
		const mockFn = () => verifyJwt(jwt)
		expect(mockFn).not.toThrow(Error)
	})

	test('Expect invalid token to throw an error', () => {
		const mockFn = () => verifyJwt('')
		expect(mockFn).toThrow(Error)
	})
})
