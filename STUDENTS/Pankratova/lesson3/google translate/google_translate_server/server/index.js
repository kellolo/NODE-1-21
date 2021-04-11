const express = require('express');
const unirest = require('unirest');

const api = express();
api.use(express.json());

api.get('/?', (req, res) => {

  const request = unirest("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");
  request.headers({
    "content-type": "application/x-www-form-urlencoded",
    "accept-encoding": "application/gzip",
    "x-rapidapi-key": "f3b0211e92msh0c536528cdf80a4p17b061jsndcff5c047c7e",
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
    res.set({
      'Access-Control-Allow-Origin': '*'
    });
    res.send(response.body.data.translations);
  });

});

api.listen(3000);