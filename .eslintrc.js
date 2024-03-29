module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  rules: {}
};
