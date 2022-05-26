const Handlebars = require("handlebars");
const cheerio = require('cheerio');

// Could snazzy this up a little...
const { requireTemplateFile } = require('../utils/requireTemplateFile')
const templateFile = requireTemplateFile('./home.handlebars');

const template = Handlebars.compile(templateFile);


const names = ['world', 'Paul', 'Adam'];
describe.each(names)('When rendering the main template with a name of %p in the context', (name) => {
  let $ = undefined;
  
  beforeEach(async () => {
    const page = template({ name });
    console.log(page)
    $ = cheerio.load(page);
  })

  it('should contain a level 1 heading', () => {
    expect($('h1').text()).toEqual('Example App: Home')
  });

  it('should include a greeting', () => {
      expect($(`p:contains("Hello ${name}")`).text()).toEqual(`Hello ${name}`);
  })
})
