const express = require('express');
const unirest = require('unirest');
const writer = require('./utils/writer');
const urlLog = './logs/log.txt';

const api = express();
api.use(express.json());

api.get('/?', (req, res) => {
  console.log(req.query);

  
  const log = `${(new Date()).toLocaleString()}: request: ${JSON.stringify(req.query)}`;

  try {
      writer(urlLog, log);
  }
  catch {
    console.log('Ошибка при записи в файл');
  }


  const request = unirest("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");

  request.headers({
    "content-type": "application/x-www-form-urlencoded",
    "accept-encoding": "application/gzip",
    "x-rapidapi-key": "b741bd18a8mshc937517d0cb4522p18ee17jsn14409b718e40",
    "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    "useQueryString": true
  });
  
  request.form({
    "q": req.query.translate,
    "source": req.query.lang1,
    "target": req.query.lang2
  });
  
  request.end(function (response) {
    if (response.error) throw new Error(response.error);
    
    // localhost:3000/?translate=hello&lang1=en&lang2=ru

    res.set({
      'Access-Control-Allow-Origin': '*'
    });

    res.send(response.body.data.translations);
  });

});

api.listen(3000);