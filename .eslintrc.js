module.exports = {
  "extends": [
    "airbnb-typescript",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "prettier/prettier": 1,
    "react/require-default-props": 0
  }
}