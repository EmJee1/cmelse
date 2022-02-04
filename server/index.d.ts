declare namespace Express {
	export interface Request {
		user: () => Promise<import('models/interfaces/user').default>
	}
}
