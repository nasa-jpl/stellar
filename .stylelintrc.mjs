const config = {
  extends: 'stylelint-config-standard-scss',
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'declaration-empty-line-before': 'never',
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
  },
};

export default config;
