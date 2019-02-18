import express from 'express';
import crawler from './crawler';
import rp from 'request-promise';
import iconv from 'iconv-lite';

const app = express();
const uri = 'http://www.kyobobook.co.kr/search/SearchCommonMain.jsp?vPstrCategory=TOT&vPstrKeyWord=node.js&vPplace=top';
app.get('/run_crawl', async (req, res) => {
  const result = await rp({ uri, encoding: null });
  const decoded_result = iconv.decode(new Buffer(result), 'EUC-KR').toString();
  crawler(decoded_result);
})

app.get('/list', (req, res) => {
  res.send('크롤링 결과 반환');
})

app.listen(3000, () => {
  console.log('app listen at 3000 port');
})