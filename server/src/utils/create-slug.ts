import { v4 as uuid } from 'uuid'
import slugify from 'slugify'

export const createStrictSlug = (string: string) =>
	slugify(string, {
		lower: true,
		strict: true,
		trim: true,
		replacement: '_',
	})

export const createFileSlug = () => uuid()
