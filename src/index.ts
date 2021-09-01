export = {
	env: {
		es2021: true,
		node: true,
		commonjs: true
	},
	extends: [
		'eslint:recommended',
		'standard-with-typescript',
		'plugin:@typescript-eslint/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		tsconfigRootDir: '.',
		project: './tsconfig.json',
		sourceType: 'script'
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/indent': ['error', 'space'],
		'@typescript-eslint/quotes': ['error', 'single'],
		'@typescript-eslint/semi': ['error', 'never'],
		'@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'no-fallthrough': 'off',
		'block-scoped-var': 'error',
		'brace-style': [2, '1tbs'],
		'eol-last': [2, 'always'],
		'no-new': 'off',
		eqeqeq: 'error',
		'linebreak-style': ['error', 'unix'],
		'no-console': 'off',
		'no-unused-vars': 'error',
		'no-extra-parens': 'error',
		'no-await-in-loop': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-void': 'off',
		'prefer-const': 'off',
		indent: ['error', 2],
		yoda: 'error',
	}
}
