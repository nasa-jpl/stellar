# @gov.nasa.jpl.stellar/stellar

A CSS, HTML, and JavaScript implementation of the Stellar design system. See the [live demo here](https://github.jpl.nasa.gov/pages/Stellar/stellar-example/).

## Components

### CSS

| Name                                 | Description                                                       |
| ------------------------------------ | ----------------------------------------------------------------- |
| [button](./scss/button.scss)         | CSS class that decorates the HTML button element                  |
| [card](./scss/card.scss)             | CSS card class that can decorate an HTML div element              |
| [input](./scss/input.scss)           | CSS class that decorates the HTML input element                   |
| [layout](./scss/layout.scss)         | CSS variables for specifying layout                               |
| [select](./scss/select.scss)         | CSS class that decorates the HTML select element                  |
| [typography](./scss/typography.scss) | CSS variables for specifying typography                           |
| [variables](./scss/variables.scss)   | Collection of all CSS variables. Overwrite to set your own theme. |

### Font

| Name                  | Description                |
| --------------------- | -------------------------- |
| [inter](./font/inter) | Standard 'Inter' font face |

## Install

First complete the [installation prerequisites](#installation-prerequisites) before installing this package.

#### Npm

```bash
npm install @gov.nasa.jpl.stellar/stellar --save
```

#### Yarn

```bash
yarn add @gov.nasa.jpl.stellar/stellar
```

## Usage

Import the desired CSS files into your project to make the classes globally available. See our [example project](https://github.jpl.nasa.gov/Stellar/example-stellar) for more detailed examples.

```html
<html>
  <head>
    <link
      href="@gov.nasa.jpl.stellar/stellar/css/button.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <button class="st-button">Stellar!</button>
  </body>
</html>
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

## Develop

```sh
cd stellar
npm install
npm run lint # Lint SCSS
npm run build # Compile SCSS to CSS
```

## Publish

Make sure the [installation prerequisites](#installation-prerequisites) have been completed. Next update the [package.json](./package.json) version and do:

```sh
npm install # Updates package-lock.json
npm publish
```
