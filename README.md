[![npm version](https://img.shields.io/npm/v/@nasa-jpl/stellar.svg)](https://www.npmjs.com/package/@nasa-jpl/stellar)

# Stellar

A CSS implementation of the Stellar design system for spacecraft operation tools.

## Install

### CSS only

```sh
npm install @nasa-jpl/stellar --save
```

### React components

```sh
npm install @nasa-jpl/stellar-react --save
```

### Svelte components

```sh
npm install @nasa-jpl/stellar-svelte --save
```

## Usage

Import the desired CSS files into your project to make the classes globally available. See our [example project][stellar-example] for detailed API usage.

```html
<html>
  <head>
    <link href="@nasa-jpl/stellar/dist/css/button.css" rel="stylesheet" />
  </head>
  <body>
    <button class="st-button">Stellar!</button>
  </body>
</html>
```

## Development

If you are a developer you can get started quickly by reading the [developer documentation][dev].

[dev]: ./docs/DEVELOPER.md

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE).

[stellar-example]: https://nasa-jpl.github.io/stellar/example/
