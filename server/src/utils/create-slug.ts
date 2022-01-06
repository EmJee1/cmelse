import slugify from 'slugify'

const createDatabaseKeySlug = (string: string) =>
	slugify(string, {
		lower: true,
		strict: true,
		trim: true,
		replacement: '_',
	})

export default createDatabaseKeySlug
