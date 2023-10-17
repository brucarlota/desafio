module.exports = {
  env: {
    browser: true,
    es2021: true,
		jest: true,
    node: true
  },
  extends: ['eslint:recommended', 'prettier'],
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
  ],
  parserOptions: {
    ecmaVersion: '2021',
    sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		}
  },
	plugins: ['react', 'import'],
  rules: {
		'semi': ['error', 'always'],
		'quotes': ['error', 'single'],
		'object-curly-spacing': ['error', 'always'],
		'eol-last': ['error', 'always'],
		'react/prop-types': 'off',
		'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
		'no-unused-vars': 'off'
  },
	settings: {
		react: {
			version: 'detect'
		}
	}
};
