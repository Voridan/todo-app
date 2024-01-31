module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/no-unused-vars',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier'],
  root: true,
  rules: {
    // 'no-unused-vars': ['error', { argsIgnorePattern: 'req|res|next' }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: 'req|res|next' },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  env: {
    node: true,
  },
};
