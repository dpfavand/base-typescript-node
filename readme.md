# Base configuration for a Node project using Typescript

Containing configuration files and example `package.json`.

- Uses Babel for build - allows you to write "incorrect" Typescript for faster dev cycles. No more commenting out variables you haven't used yet just to try something.s
- Runs Prettier through Eslint - ensures the two tools don't conflict
- Uses AirBnB styleguide with Typescript modifications
- uses `Husky` and `Lint-Staged` to run eslint at commit time

## VSCode configuration

- Turns on the Eslint autofixes when saving
- Turns off the built-in formatting for JS and TS, since we are handling that with Prettier in Eslint (using the autofixes above)

## .babelrc vs .babelrc.js

I've used the .js versions of the configuration files so each configuration item can be commented. If applying to an existing project, make sure you only have one version of each configuration file.

## Why include the React plugins?

In case you're working with [Ink](https://term.ink) or another server-side JSX library.s
