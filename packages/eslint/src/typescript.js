const globals = require('globals');
const tseslint  = require('typescript-eslint');
  const eslintConfigPrettier  = require('eslint-config-prettier');

module.exports = [
  { languageOptions: { globals: { ...globals.node, ...globals.es2020 } } },
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
  },
  eslintConfigPrettier,
];
