module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',    
    'prettier',
    'prettier/@typescript-eslint',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  /* ignorePatterns: ['.eslintrc.js'], */
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',    
    '@typescript-eslint/no-explicit-any': 'off',
   /*  'prettier/prettier': [
      'error',
      {
        "endOfLine": 'auto',
        // "trailingComma": "none",
        "semi": true,
        "tabWidth": 2,
        "singleQuote": true,
        "bracketSpacing": true,
        "jsxBracketSameLine": true,
        "linebreak-style": ["error", "windows"]
      },      
    ],     */
  },
};
