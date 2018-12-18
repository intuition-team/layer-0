module.exports = {
  extends: [
    'airbnb-base',
    'prettier',
  ],

  plugins: [
    'prettier'
  ],

  env: {
    browser: true,
    es6: true,
    jquery: true,
  },

  parserOptions: {
    ecmaFeatures: {
      modules: true,
    },
  },

  rules: {
    'prettier/prettier': 'error',
    'no-mixed-operators': 'off',
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
