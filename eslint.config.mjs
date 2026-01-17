/* eslint-disable import/no-extraneous-dependencies */
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

// Configuração para emular o comportamento do formato antigo (.eslintrc)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  // 1. Carrega a base do Airbnb
  ...compat.extends('airbnb-base'),

  // 2. Aplica as configurações e regras por cima
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.mjs', '.cjs'],
        },
      },
    },
    rules: {
      // --- Regras anteriores ---
      semi: ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      quotes: ['error', 'single'],
      'no-unused-vars': 'warn',
      indent: ['error', 2],
      'no-console': 'off',
      'import/first': 'off',
      'no-param-reassign': 'off',

      // 1. Permite usar __dirname e __filename (que o Airbnb proíbe por padrão)
      'no-underscore-dangle': 'off',

      // 2. Permite importar pacotes que estão em devDependencies (como o próprio ESLint)
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: true,
      }],

      // 3. Desativa a regra que exige que o código use 'this' em métodos de classe
      'class-methods-use-this': 'off',

      calmelcase: 'off',
    },
  },
];
