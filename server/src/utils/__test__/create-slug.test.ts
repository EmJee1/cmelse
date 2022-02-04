import { createStrictSlug, createFileSlug } from '../create-slug'

describe('Create strict slug', () => {
	test('Expect slug to remove special characters', () => {
		expect(createStrictSlug('hello*')).toBe('hello')
	})

	test('Expect slug to replace whitespace with underscore', () => {
		expect(createStrictSlug('hello world')).toBe('hello_world')
	})

	test('Expect slug to lowercase everything', () => {
		expect(createStrictSlug('HellO')).toBe('hello')
	})

	test('Expect slug to trim', () => {
		expect(createStrictSlug('  hello  ')).toBe('hello')
	})
})

describe('Create file slug', () => {
	test('Expect slug to be defined', () => {
		expect(createFileSlug()).toBeDefined()
	})

	test('Expect slugs to be different', () => {
		expect(createFileSlug()).not.toBe(createFileSlug())
	})
})
