declare namespace Express {
	export interface Request {
		user: () => Promise<import('models/interfaces/user').default>
		locale: string
	}
	export interface Response {
		error: (message: string, additionalData?: { [key: string]: unknown }) => void
	}
}
