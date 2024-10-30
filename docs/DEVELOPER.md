# Developer

This document describes how to set up your development environment to build and develop stellar.

- [Prerequisite Software](#prerequisite-software)
- [Code Editor](#code-editor)
- [Getting the Sources](#getting-the-sources)
- [Installing NPM Modules](#installing-npm-modules)
- [Start Development Server](#start-development-server)
- [Building For Production](#building-for-production)
- [Cleaning](#cleaning)

## Prerequisite Software

Before you can run stellar you must install and configure the following products on your development machine:

- [Git](http://git-scm.com) and/or the [GitHub app](https://desktop.github.com/); [GitHub's Guide to Installing Git](https://help.github.com/articles/set-up-git) is a good source of information.

- [Node.js LTS](http://nodejs.org) which is used to run a development web server, and generate distributable files. We recommend using the [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) to install Node.js and [NPM](https://www.npmjs.com/) on your machine. Once you have NVM installed you can use the required Node.js/NPM versions via:

  ```shell
  cd stellar
  nvm use
  ```

## Code Editor

The recommended editor for developing stellar is [VS Code](https://code.visualstudio.com/) with the following settings and extensions. You can easily use another editor of your choice as long as you can replicate the code formatting settings.

### Settings.json

Your editor should follow the same settings found in [.vscode/settings.json](../.vscode/settings.json).

### Extensions

1. [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
1. [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
1. [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
1. [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
1. [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
1. [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
1. [Task Explorer](https://marketplace.visualstudio.com/items?itemName=spmeesseman.vscode-taskexplorer)

## Getting the Sources

[Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) the stellar repository:

```shell
git clone https://github.com/nasa-jpl/stellar.git
cd stellar
```

## Installing NPM Modules

Install the JavaScript modules needed to build stellar:

```shell
npm install
```

## Development

### CSS

Any changes made to the [CSS package](../packages/css/) locally must first be built via `npm run build:css` or the VSCode Task: `Build CSS`

To preview the changes, open [packages/css/example/index.html](../packages/css/example/index.html) in a browser.

### React

To run the React package for development:

`npm run dev:react` (VSCode Task: `React`)

For more details, view the [README](../packages/react/README.md) for the package

### Svelte

To run the Svelte package for development:

`npm run dev:svelte` (VSCode Task: `Svelte`)

For more details, view the [README](../packages/svelte/README.md) for the package

## Building For Production

Run `npm run build` (VSCode Task: `Build`) to build a production version of the project. The built artifacts for each package will be stored in the `dist/` directory under their respective workspaces.
