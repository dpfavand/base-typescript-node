/**
 * Configures Eslint
 * This controls how your code is formatted and ensures that consistent style is followed
 * We also integrate Prettier here so formatting doesn't conflict
 * 
 * Your code editor might show an Eslint error for this file. 
 * Something about parserOptions.project. It's ok!
 * It's because this file si not in the tsconfig project, so this is not being linted.
 */
module.exports = {
  "extends": [
    // enable the airbnb style guide with modifications with Typescript
    "airbnb-typescript",
    // enable the Prettier integration - run Prettier as part of eslint
    // configure Prettier in the .prettierrc file
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  "parserOptions": {
    // configure your .tsconfig
    "project": "./tsconfig.json"
  },
  "rules": {
    // make the prettier rules fail the linter
    "prettier/prettier": 1,
    // disable the console rule since this is a Node server
    // renable if you have a more sophisticated logging setup
    "no-console": 0,
  }
}