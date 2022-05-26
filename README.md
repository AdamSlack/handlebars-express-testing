# Handlebars Express Testing

This is a sample project showing how you might test a handlebars w/ express app.

Example tests approach 2 different angles.

1. Testing the result of the express endpoints
2. Testing only a rendered template

Templates rendered via express and then returned from an API request use supertest to simulate the running and calling of the API.

Templates rendered separately to the API use the handlebars engine directly.

Tests both with and without express being involved use `cheerio` to allow you to query the rendered string.

This project levereages:
- `supertest` to simulate invoking express endpoints
- `cheerio` to load rendered HTML into a format easy to query
- `jest` to structure and run tests

## Getting started

Install dependencies: `npm install`

Run the tests: `npm run test`

Inspect the output in your console.

## Project structure

The express app has views and controllers.

The Controllers will pick a view to render and return that.

THe views consist of handlebars templates that will end up being rendered.

## Importing Handlebars Template Files

This project has a util function that will read the template using node's `fs` api. To allow the util to be imported and used from anywhere. The npm package `callsite` is used.
