import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import docusaurus from '@docusaurus/eslint-plugin';

export default tseslint.config(
  {
    ignores: ['.docusaurus/**', 'build/**', 'node_modules/**', '.yarn/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs['recommended-latest'],
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      '@docusaurus': docusaurus,
    },
    rules: {
      // Docusaurus best practices (legacy config shape, enabled manually for flat config)
      ...docusaurus.configs.recommended.rules,
    },
  },
);