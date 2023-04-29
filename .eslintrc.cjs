/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    '@antfu',
    './.eslintrc-auto-import.json',
  ],
  globals: { defineOptions: 'writable' },
  parserOptions: {
    ecmaVersion: 'latest',
  },
}
