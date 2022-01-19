/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const prettierSharedConfig = require(path.join(__dirname, '../prettier-shared-config.json'))

module.exports = {
	settings: {
		'import/resolver': {
			typescript: {},
			node: {
				extensions: ['.js', '.ts', '.vue'],
			},
		},
	},
	env: {
		browser: true,
		es2021: true,
		'vue/setup-compiler-macros': true,
	},
	extends: ['plugin:vue/essential', 'airbnb-base'],
	parserOptions: {
		ecmaVersion: 13,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		...prettierSharedConfig.rules.shared,
		'vue/multi-word-component-names': 'off',
		'vue/no-multiple-template-root': 'off',
	},
}
