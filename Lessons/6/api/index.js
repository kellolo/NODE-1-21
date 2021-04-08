const express = require('express');
const database = require('./mysql')();
const jwt = require('./jwt');

const app = express();
app.use(express.json());

app.post('/api/user', async (req, res) => {
  const { login, password } = req.body;

  sqlRecFindUser = `
    SELECT * FROM users
    WHERE login='${login}'
  `;

  database.query(sqlRecFindUser, (err, response) => {
    if (!err) {
      const user = response[0];
      if (user) {
        console.log(user);
        if (user.password === password) {
          const token = jwt.generate();
          console.log(token);
          const tokenSetRequest = `
            UPDATE users
            SET sessionId='${ token.token }'
            WHERE login='${login}'
          `;

          database.query(tokenSetRequest, (err, result) => {
            if (!err) {
              res.json({ token: token.token });
            } else {
              console.log(err);
            }
          })
        } else {
          res.send('err PASSWORD DONT MATCH');
        }
      } else {
        console.log('err CANT FIND');
        res.send('err CANT FIND');
      }
    } else {
      console.log(err);
      
    }
  });
});


app.get('/api/user', (req, res) => {
  res.send('11111');
});

app.listen(5000, () => { console.log(5000) });