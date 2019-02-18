import express from 'express';

const app = express();

app.get('/run_crawl', (req, res) => {
  res.send('크롤링 시작');
})

app.get('/list', (req, res) => {
  res.send('크롤링 결과 반환');
})

app.listen(3000, () => {
  console.log('app listen at 3000 port');
})