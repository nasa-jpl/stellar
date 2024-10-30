const config = {
  extends: 'stylelint-config-standard-scss',
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
      rules: {
        'scss/at-import-no-partial-leading-underscore': null,
        'scss/at-import-partial-extension': null,
      },
    },
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'custom-property-pattern': '(--st-)?.*',
    'declaration-empty-line-before': 'never',
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
    'selector-class-pattern': '^([a-z][a-z0-9]*)((-){0,2}[a-z0-9]+)*$',
  },
};

export default config;
