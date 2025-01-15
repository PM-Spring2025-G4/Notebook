import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin';
import eslintParserTypeScript from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{ts,tsx}'], // Match TypeScript files
    languageOptions: {
      parser: eslintParserTypeScript,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        window: 'readonly', // Example globals
        document: 'readonly',
        console: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypeScript,
    },
    rules: {
      indent: ['error', 2], // 2 spaces for indentation
      '@typescript-eslint/no-explicit-any': 'warn', // Warn on `any` usage
      quotes: ['error', 'double'], // Enforce double quotes
      semi: 'off', // Do not enforce semicolons
    },
  },
];
