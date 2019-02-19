import cheerio from 'cheerio';
import { 
  item_selector, 
  title_selector, 
  price_selector, 
  image_url_selector, 
  rating_selector, 
  rating2_selector 
} from './selectors';

const crawler = (markup) => {
  const $ = cheerio.load(markup);
  const items = $(item_selector);
  const result = items.map((i, el) => {
    const title = $(el).find(title_selector).text();
    const price = $(el).find(price_selector).text();
    const image_url = $(el).find(image_url_selector).attr('src');
    const rating = $(el).find(rating_selector).contents().not('.label').text();
    const rating2 = $(el).find(rating2_selector).attr('alt');
    return { title, price, image_url, rating: rating || rating2 };
  });
  return result.get();
}

export default crawler;