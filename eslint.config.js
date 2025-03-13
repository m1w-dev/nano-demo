/* eslint-disable max-lines */
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import _import from 'eslint-plugin-import'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended'
    )
  ),
  {
    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      react: fixupPluginRules(react),
      'react-hooks': fixupPluginRules(reactHooks),
      import: fixupPluginRules(_import),
      'react-refresh': reactRefresh,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
    },

    settings: {
      react: {
        pragma: 'React',
        version: 'detect',
      },
    },

    rules: {
      'react-hooks/rules-of-hooks': 'error',

      'react-hooks/exhaustive-deps': [
        'warn',
        {
          additionalHooks: '(useRecoilCallback|useRecoilTransaction_UNSTABLE)',
        },
      ],

      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
        },
      ],

      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      'jsx-quotes': ['error', 'prefer-double'],

      'no-multiple-empty-lines': [
        'error',
        {
          max: 2,
          maxEOF: 1,
          maxBOF: 0,
        },
      ],

      semi: ['error', 'never'],

      'comma-dangle': [
        'error',
        {
          functions: 'never',
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
        },
      ],

      'react/react-in-jsx-scope': 'off',

      'max-len': [
        'error',
        {
          code: 90,
        },
      ],

      'import/newline-after-import': [
        'error',
        {
          count: 2,
        },
      ],

      'eol-last': ['error', 'always'],

      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],

      'max-lines': [
        'warn',
        {
          max: 95,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      'no-trailing-spaces': ['warn'],
      'no-multi-spaces': ['warn'],

      'comma-spacing': [
        'warn',
        {
          before: false,
          after: true,
        },
      ],
    },
  },
]
