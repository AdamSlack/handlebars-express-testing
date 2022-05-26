const Handlebars = require("handlebars");
const cheerio = require('cheerio');

// Could snazzy this up a little...
const { requireTemplateFile } = require('../../utils/requireTemplateFile')
const templateFile = requireTemplateFile('./main.handlebars');

const template = Handlebars.compile(templateFile);

describe('When rendering the main template', () => {
  let $ = undefined;
  
  beforeEach(async () => {
    // You could totally create some nice utils to wrap the fetching of a page
    // and loading of it into cheerio
    const page = template({});
    console.log(page)
    $ = cheerio.load(page);
  })

  it('Should contain a title', () => {
    // jquery-like syntax lets us select by text, class, testIds, similar to RTL
    expect($('title').text()).toEqual('Example App')
  })
})