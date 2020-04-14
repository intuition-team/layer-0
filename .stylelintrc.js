module.exports = {
  extends: 'stylelint-config-recommended',
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'return', 'if', 'each', 'include', 'mixin'],
      },
    ],
  },
};
