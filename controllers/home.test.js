const request = require('supertest');
const cheerio = require('cheerio');
const app = require('../app')

describe('When rendering the home page', () => {
  let $ = undefined;

  beforeEach(async () => {
    // You could totally create some nice utils to wrap the fetching of a page
    // and loading of it into cheerio
    const page = await request(app).get('/');
    $ = cheerio.load(page.text);
  })

  it('should return the html as text', () => {
    // Assertion is deliberately wrong here.
    // Output of test failure will show you the rendered HTML
    expect($.html()).toEqual('')
  })

  it('should contain a title', () => {
    // jquery-like syntax lets us select by text, class, testIds, similar to RTL
    expect($('title').text()).toEqual('Example App')
  });

  it('should render the name provided within the context', () => {
    // Would need to look a little more into making the assertions, but this at least works™️
    expect($('p:contains("Hello world")').text()).toEqual('Hello world');
  })
})