module.exports = {
	env: {
		browser: true,
		es2021: true,
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
				'@typescript-eslint/naming-convention': 'warn',
				'@typescript-eslint/prefer-nullish-coalescing': 'off',
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
	},
};
