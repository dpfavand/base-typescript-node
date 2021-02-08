/**
 * Prettier configuration
 * Define formatting rules here. 
 * They will be picked up when Prettier runs as part of eslint
 */
module.exports = {
  "singleQuote": true,
  "trailingComma": "all",
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 100,
  "overrides": [
    {
      "files": "*.tsx",
      "options": {
        "parser": "typescript"
      }
    }
  ]
}