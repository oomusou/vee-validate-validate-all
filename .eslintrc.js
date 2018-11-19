module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': 'off',
    'max-len': 'off',
    'func-names': 'off',
    'arrow-parens': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'space-before-function-paren': 'off',
    'no-shadow': 'off',
    'camelcase': 'off',
    'no-alert': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
