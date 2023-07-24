module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'xo',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:i18next/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
			rules: {
				'@typescript-eslint/naming-convention': 'off',
				'@typescript-eslint/prefer-nullish-coalescing': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
				'@typescript-eslint/indent': 'off',
				indent: ['error', 2],
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'i18next',
	],
	settings: {
		react: {
			version: '18.2.0',
		},
	},
	rules: {
		'react/react-in-jsx-scope': 'off',
		'i18next/no-literal-string': 2,
		'max-len': ['error', {code: 100, ignoreComments: true}],
	},
};
