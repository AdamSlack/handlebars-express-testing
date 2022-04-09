# Handlebars Express Testing

This is a sample project showing how you might test the page that gets rendered from an express backed handlebars project.

Templates are rendered via express and then returned from an API request.

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
