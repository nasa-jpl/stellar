const template = require("./icon-index-template.cjs");

module.exports = {
  typescript: true,
  indexTemplate: template,
  svgoConfig: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            // SVGO by default strips viewBoxes even though viewBoxes are required to resize SVGs with CSS.
            // @see https://github.com/svg/svgo/issues/1128
            // Quite the heated issue...
            removeViewBox: false,
          },
        },
      },
    ],
  },
};
