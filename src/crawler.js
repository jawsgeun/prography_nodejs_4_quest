import cheerio from 'cheerio';

const crawler = (markup) => {
  const $ = cheerio.load(markup);
  const result = $('.list_search_result .type_list tr .detail > .title > a');
  const titles = result.map((i, el) => $(el).text());
}

export default crawler;