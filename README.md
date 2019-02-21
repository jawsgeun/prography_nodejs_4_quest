# prography_nodejs_4_quest

## command
To start server
```
npm run start
```

To build package
```
npm run build
```

## server router

1. /run_crawler

- it will get datas from kyobobook.co.kr when search 'node.js'
- data contains book title, price, image_url, rating_score
- server converts data to result.csv
- url_list

  http://www.kyobobook.co.kr/search/SearchCommonMain.jsp?vPstrCategory=TOT&vPstrKeyWord=node.js&vPplace=top&vPstartno=0&vPplace=list
  http://www.kyobobook.co.kr/search/SearchCommonMain.jsp?vPstrCategory=TOT&vPstrKeyWord=node.js&vPplace=top&vPstartno=20&vPplace=list
  http://www.kyobobook.co.kr/search/SearchCommonMain.jsp?vPstrCategory=TOT&vPstrKeyWord=node.js&vPplace=top&vPstartno=40&vPplace=list
  http://www.kyobobook.co.kr/search/SearchCommonMain.jsp?vPstrCategory=TOT&vPstrKeyWord=node.js&vPplace=top&vPstartno=60&vPplace=list
  http://www.kyobobook.co.kr/search/SearchCommonMain.jsp?vPstrCategory=TOT&vPstrKeyWord=node.js&vPplace=top&vPstartno=80&vPplace=list

2. /list

- server respond json_array data from 'result.csv'
