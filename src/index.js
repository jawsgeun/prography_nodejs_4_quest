import 'babel-polyfill'
import express from 'express';
import _ from 'lodash';
import rp from 'request-promise';
import iconv from 'iconv-lite';

import crawler from './crawler';
import urls from './urls';
import exportCSV from './exportCSV';
import importCSV from './importCSV';

const app = express();

app.get('/run_crawl', async (req, res) => {
  const result_list = await Promise.all(urls.map(async (url) => {
    const result = await rp({ url, encoding: null });
    const decoded_result = iconv.decode(new Buffer(result), 'EUC-KR').toString();
    return crawler(decoded_result);
  }));
  await exportCSV(_.flatten(result_list));
  res.send('크롤링 완료');
})

app.get('/list', async (req, res) => {
  const result = await importCSV();
  res.send(`
  <h2>크롤링 결과 반환</h2>
  <br>
  ${result.map((item) => JSON.stringify(item)).join('<br>')}`);
})

app.listen(3000, () => {
  console.log('app listen at 3000 port');
})