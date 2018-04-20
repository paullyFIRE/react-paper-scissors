module.exports = {
  extends: ["prettier/react"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
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
    "prettier/prettier": ["error", { singleQuote: true, printWidth: 140 }],
    "max-len": ["error", { code: 140, ignoreUrls: true }]
  }
};
