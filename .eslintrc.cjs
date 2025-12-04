module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  settings: { react: { version: 'detect' } },
  rules: {
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/react-in-jsx-scope': 'off',
  },
}
