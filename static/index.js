const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://news.ycombinator.com';

axios.get(url)
  .then(response => {
    let html = response.data;
    console.log(getData(html));
  })
  .catch(error => {
    console.log(error);
  })

let getData = html => {
  data = [];
  const $ = cheerio.load(html);
  $('table.itemlist tr td:nth-child(3)').each((i, elem) => {
    data.push({
      title : $(elem).text(),
      link : $(elem).find('a.storylink').attr('href')
    });
  });
  return data;
}

