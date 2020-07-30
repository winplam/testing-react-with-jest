# How to Test React Components Using Jest

My version of test sripts created by following [this blog post about testing React with Jest](https://www.sitepoint.com/test-react-components-jest).
NPM packages used and .babelrc have been updated to work with Reac 16.

## Requirements
* [Node.js](http://nodejs.org/)

## Running locally

- `git clone` this repo
- `cd testing-react-with-jest`
- `npm install`
- In one tab, run `npm run watch`. This will fire up Webpack and rebuild your app on each change.
- In another tab, run `npm start`. This will fire up a local server that will refresh automatically when the code changes.
- `open http://localhost:8081` to view to the app.

## Tests

Run `npm test` to run the tests with Jest.

Run `npm test -- --watch` to run Jest and have it automatically rerun everytime you change a file.
