module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'jest', 'react', 'import', 'react-hooks'],
  rules: {
    'additional-rule': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    semi: 'error',
  },
  extends: [
    'react-app',
    'shared-config',
    'airbnb-typescript',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'additional-typescript-only-rule': 'warn',
      },
    },
  ],
};
