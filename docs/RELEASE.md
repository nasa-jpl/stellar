# Release

This document contains instructions on how to release Stellar

## Steps

This project utilizes [Lerna](https://lerna.js.org/docs/features/version-and-publish) to handle publishing relevant packages.

1. Figure out what version you are releasing and use the format `{MAJOR}.{MINOR}.{PATCH}`. For descriptions of MAJOR, MINOR, and PATCH please refer to the [Semantic Versioning](https://semver.org/) documentation.
1. To publish using lerna you can utilize the [npm version management](https://docs.npmjs.com/cli/v10/commands/npm-version#synopsis) to increment the version accordingly before publishing

- e.g. `npx lerna publish patch`
- `npx lerna publish` will only apply new versions to packages that have changes

### Additional Notes:

If you want to do a pre-release to test out functionality in other projects, you can publish a pre-release candidate to npm:

- e.g. `npx lerna publish --preid=alpha`
