/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'next'],
  root: true,
  ignorePatterns: [
    'node_modules',
    '.next',
    '.turbo',
    'out',
    'build',
    'dist',
    'public',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
  },
};
