declare namespace Express {
	export interface Request {
		user: () => Promise<import('models/interfaces/user').default>
		locale: string
		error: (message: string, additionalData: { [key: string]: unknown }) => void
	}
}
