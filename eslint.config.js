import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import daStyle from 'eslint-config-dicodingacademy';
import pluginCypress from 'eslint-plugin-cypress/flat';


/** @type {import('eslint').Linter.Config[]} */
export default [
  // { files: ['**/*.{js,mjs,cjs,jsx}'] },
  // { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  // pluginJs.configs.recommended,
  // pluginReact.configs.flat.recommended,
  // daStyle,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  pluginCypress.configs.recommended,
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  daStyle,
];
