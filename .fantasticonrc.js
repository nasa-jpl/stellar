module.exports = {
  assetTypes: ["css", "html"],
  fontTypes: ["woff2", "woff"],
  inputDir: "./icons/svg",
  name: "stellar-icons",
  normalize: true,
  outputDir: "./icons",
  prefix: "si",
  selector: ".si",
  templates: {
    css: "./icons/templates/css.hbs",
    html: "./icons/templates/html.hbs",
  },
};
