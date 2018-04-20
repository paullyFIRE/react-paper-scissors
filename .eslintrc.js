module.exports = {
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended'],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    env: {
      es6: true,
      browser: true,
      node: true
    }
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }]
  }
};
