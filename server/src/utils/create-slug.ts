import slugify from 'slugify'

export const createStrictSlug = (string: string) =>
	slugify(string, {
		lower: true,
		strict: true,
		trim: true,
		replacement: '_',
	})

export const createFileSlug = (string: string) =>
	slugify(string, {
		lower: false,
		strict: false,
		trim: true,
		replacement: '-',
	})
