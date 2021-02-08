/**
 * Configure Babel - this transforms Typescript to Javascript
 * Using Babel is much quicker and friendlier than using tsc directly
 */
module.exports = {
  "presets": [
    // transforms Typescript to Javascript 
    // https://babeljs.io/docs/en/babel-preset-typescript
    "@babel/typescript", 
    [
      // allow using current Javascript without micromanaging transforms
      "@babel/preset-env",
      {
        "targets": {
          // we're building for node, so this is our target
          "node": "current"
        }
      }
    ],
    // allow using JSX syntax
    "@babel/preset-react"
  ],
  "plugins": [
    // a couple plugins to get additional Javascript features
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
}