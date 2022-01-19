/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const prettierSharedConfig = require(path.join(__dirname, '../prettier-shared-config.json'))

module.exports = {
	settings: {
		'import/resolver': {
			typescript: {},
			node: {
				extensions: ['.js', '.ts'],
			},
		},
	},
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		'airbnb-base',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		...prettierSharedConfig.rules.shared,
	},
}
