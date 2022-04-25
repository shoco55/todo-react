module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  overrides: [
    {
      files: ['**/*.tsx'],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
  ],
  rules: {
    'alpha-value-notation': 'number',
    'font-family-name-quotes': 'always-unless-keyword',
  },
};
