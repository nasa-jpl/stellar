[![npm version](https://img.shields.io/npm/v/@nasa-jpl/react-stellar.svg)](https://www.npmjs.com/package/@nasa-jpl/react-stellar)

# react-stellar

React implementation of the Stellar design system built on top of the (native CSS Stellar) implementation [https://github.com/nasa-jpl/react-stellar]. The React implementation of the Stellar design system provides a more complete implementation of the Stellar design system whereas the native CSS Stellar only provides styling for native HTML elements as well as CSS variables for color and typography. React Stellar is written in Typescript and bundled with Rollup.

## What is Stellar?

Stellar is design system for operations tools that enables developers and designers to make use of battle-tested components and focus their efforts on the unique aspects of their applications. Included in this design system are code components, design files and assets, and guidelines for use.

## Component Usage and Demos

Demos and documentation for the components can be found here: https://nasa-jpl.github.io/react-stellar/. Not all Stellar design system components are supported yet as this is an ongoing effort. Many components in this library are build on top of [Radix Primitives](https://www.radix-ui.com/docs/primitives/overview/getting-started). Radix Primitives provide unstyled, accessible components meant to be used as building blocks for design systems. React Stellar components that use Radix Primitives will contain links to the Radix documentation for more detailed information regarding component properties and usage.

## Library Installation and Usage

Run the following command in the root of your React application repository to install the library. This assumes you already have NodeJS installed on your machine and that you are installing this library into a React project.

```sh
npm install --save-dev @nasa-jpl/react-stellar
```

## Importing Stellar Components in React

Include react-stellar and stellar styles using the following import in your app:

```JS
import "@nasa-jpl/react-stellar/dist/esm/stellar.css";
```

You can import a Stellar component using the following syntax:

```JS
import { Button } from "@nasa-jpl/react-stellar";
```

Example usage:

```JSX
<Button variant="secondary" onClick={() => console.log("Click")}>
  Text
</Button>
```

## Developing Components

### Prerequisite Software

Before you can develop components for react-stellar you must install and configure the following products on your development machine:

- [Git](http://git-scm.com) and/or the [GitHub app](https://desktop.github.com/); [GitHub's Guide to Installing Git](https://help.github.com/articles/set-up-git) is a good source of information.

- [Node.js LTS](http://nodejs.org) which is used to run a development web server, and generate distributable files. We recommend using the [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) to install Node.js and [NPM](https://www.npmjs.com/) on your machine. Once you have NVM installed you can use the required Node.js/NPM versions via:

  ```shell
  cd react-stellar
  nvm use
  ```

### Code Editor

The recommended editor for developing aerie-ui is [VS Code](https://code.visualstudio.com/).

### Extensions

1. [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
1. [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
1. [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
1. [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

### Getting the Source

[Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) the react-stellar repository:

```sh
git clone https://github.com/nasa-jpl/react-stellar.git
cd react-stellar
```

### Installing NPM Modules

Install the JavaScript modules needed to build react-stellar:

```sh
npm install
```

### Start Development Server

Development of react-stellar components is accomplished with [Storybook](https://storybook.js.org/), a frontend workshop for building UI components and pages in isolation. Run `npm run storybook` to automatically launch the Storybook for react-stellar in your default browser. The app will automatically reload if you change any of the source files.

### Building For Production

Run `npm run build-lib` to build a production version of the component library. The build artifacts will be stored in the `dist/` directory. Note that the build normally occurs in a Github Action but local building will often be performed for troubleshooting purposes.

### Updating Stellar Icons

The react-stellar library creates React components for every icon supplied by the base Stellar repository. Run `npm run build-icons` to build these icons after updating the base Stellar depencency. Icons will automatically be created and exported in `src/components/Icons`.

## Publish Component Library

Publish the library to NPM using the corresponding Github Action.

## Storybook Deployment

Storybook is built and deployed to Github Pages using Github Actions.

## Theming

Both Stellar and React-Stellar are built to be easily themable using a combination of class and CSS variable overrides. For a complete list of CSS variables that can be overridden please refer to the Stellar [variables.scss](https://github.com/nasa-jpl/stellar/blob/develop/scss/variables.scss) file as well as the React Stellar [variables.scss] file. For example, to change the background color of a primary button you can override the CSS variable that defines that primary button background color:

```css
:root {
  --st-button-primary-background-color: green;
}
```

Also note that there is limited support for dark theming but this effort is ongoing.
