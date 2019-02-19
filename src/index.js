import express from 'express';
import crawler from './crawler';
import rp from 'request-promise';
import iconv from 'iconv-lite';
import urls from './urls';

const app = express();

app.get('/run_crawl', async (req, res) => {
  const result_list = await Promise.all(urls.map(async (url) => {
    const result = await rp({ url, encoding: null });
    const decoded_result = iconv.decode(new Buffer(result), 'EUC-KR').toString();
    return crawler(decoded_result);
  }));
  // console.log(result_list);
})

app.get('/list', (req, res) => {
  res.send('크롤링 결과 반환');
})

app.listen(3000, () => {
  console.log('app listen at 3000 port');
})