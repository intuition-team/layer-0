module.exports = {
  extends: [
    'airbnb-base',
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
    'no-mixed-operators': 'off',
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
