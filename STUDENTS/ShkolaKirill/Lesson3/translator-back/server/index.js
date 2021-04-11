const expres = require("express");
const unirest = require("unirest");

const api = expres();
api.use(expres.json());

api.get("/?", (req, res) => {
  const request = unirest("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");

  request.headers({
    "content-type": "application/x-www-form-urlencoded",
    "accept-encoding": "application/gzip",
    "x-rapidapi-key": "f4a398a8d2msh2e2b34a056e6870p17d4e6jsnfcc899cdb7f8",
    "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    useQueryString: true,
  });

  request.form({
    q: req.query.translate,
    source: req.query.lang1,
    target: req.query.lang2,
  });

  request.end(function (response) {
    if (res.error) throw new Error(res.error);
    res.set({
      "Access-Control-Allow-Origin": "*",
    });

    res.send(response.body.data.translations);
  });
});

api.listen(3000);
