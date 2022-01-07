import slugify from 'slugify'

const createStrictSlug = (string: string) =>
	slugify(string, {
		lower: true,
		strict: true,
		trim: true,
		replacement: '_',
	})

export default createStrictSlug
