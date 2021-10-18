# css-stellar

CSS implementation of the Stellar design system.

## Components

| Name                        | Description                                       |
| --------------------------- | ------------------------------------------------- |
| [button](./dist/button.css) | CSS class that decorates the HTML button element  |
| [color](./dist/color.css)   | CSS variables that define colors to theme classes |
| [font](./font/inter.css)    | Standard 'Inter' font face                        |
| [reset](./dist/reset.css)   | A basic CSS reset file for convenience            |

## Install

First complete the [installation prerequisites](#installation-prerequisites) before installing this package.

#### Npm

```bash
npm install @gov.nasa.jpl.stellar/css --save
```

#### Yarn

```bash
yarn add @gov.nasa.jpl.stellar/css
```

## Usage

Import the desired CSS files into your project to make the classes globally available.

```html
<!DOCTYPE html>

<html>
  <head>
    <link href="node_modules/@gov.nasa.jpl.stellar/css/dist/button.css" rel="stylesheet" />
  </head>
  <body>
    <button class="stellar-button">Stellar!</button>
  </body>
</html>
```

If you are using a JavaScript build tool like Webpack or Rollup you can also include the CSS in your JavaScript. Your build tool will need to be configured properly with the correct loader.

```js
import '@gov.nasa.jpl.stellar/css/dist/button.css';
```

## Installation Prerequisites

### Node and NPM

Before installing one of our packages you need [Node](https://nodejs.org/en/) and [NPM](https://docs.npmjs.com/about-npm/) LTS installed (installing Node automatically installs NPM). If you're on [macOS](https://www.apple.com/macos) we recommend using [Homebrew](https://brew.sh/) with the following command:

```sh
brew install node
```

If you're on another operating system please see the [Node download page](https://nodejs.org/en/download/).

### Artifactory NPM Authentication

Next you need to authenticate NPM with Artifactory. First follow these steps:

1. Log in with your JPL credentials to [Artifactory](https://artifactory.jpl.nasa.gov/artifactory/webapp/#/login)
1. Navigate to the [npm-release-virtual](https://artifactory.jpl.nasa.gov/artifactory/webapp/#/artifacts/browse/tree/General/npm-release-virtual) repository
1. Click `Set Me Up` and enter your JPL credentials _again_ to insert them into the code snippets
1. Scroll down to the `Using Basic Authentication` section of the `Set Me Up` dialog

Next using the values from the `Set Me Up` dialog, copy the following key-values into your [~/.npmrc](https://docs.npmjs.com/configuring-npm/npmrc.html) file:

```sh
@gov.nasa.jpl.stellar:registry=https://artifactory.jpl.nasa.gov/artifactory/api/npm/npm-release-virtual/
//artifactory.jpl.nasa.gov/artifactory/api/npm/npm-release-virtual/:_password=<BASE64_PASSWORD>
//artifactory.jpl.nasa.gov/artifactory/api/npm/npm-release-virtual/:username=<USERNAME>
//artifactory.jpl.nasa.gov/artifactory/api/npm/npm-release-virtual/:email=<youremail@email.com>
//artifactory.jpl.nasa.gov/artifactory/api/npm/npm-release-virtual/:always-auth=true
```
