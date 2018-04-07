module.exports = {
	extends: [
		'airbnb',
		'plugin:react/recommended',
		'prettier',
		'prettier/react'
	],
	env: {
		es6: true,
		browser: true,
		jest: true,
		node: true
	},
	rules: {
		'arrow-body-style': 0,
		'no-tabs': 0,
		'no-console': 0,
		'no-use-before-define': 1,
		'spaced-comment': [
			1,
			'always',
			{
				exceptions: ['-', '+'],
				markers: ['=', '!']
			}
		],
		'eol-last': 0,
		'import/no-commonjs': 2,
		'import/extensions': ['warn', 'always'],
		'import/no-amd': 2,
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: ['**/*.test.js', '**/*.spec.js'],
				optionalDependencies: false,
				peerDependencies: false,
				packageDir: './'
			}
		],
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/jsx-first-prop-new-line': 0,
		'react/forbid-prop-types': 0,
		'react/prop-types': 0,
		'class-methods-use-this': 0,
		'no-underscore-dangle': ['error', { allowAfterThis: true }],
		'prettier/prettier': [
			'error',
			{ useTabs: true, singleQuote: true, tabWidth: 4 }
		],
		'jsx-a11y/href-no-hash': 'off', // temp rule
		'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }] // temp rule
	},
	globals: { graphql: true },
	plugins: ['react', 'prettier', 'jsx-a11y']
};
