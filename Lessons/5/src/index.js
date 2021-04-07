const express = require('express');
const dataBase = require('./db')();



const app = express();

app.use(express.json());
app.use('/', express.static('public'));

app.post('/user', (req, res) => {
  const { name, age } = req.body;

  const command = `
    INSERT INTO lesson.users (name, age)
    VALUES ('${ name }', ${ age });
  `;

  dataBase.connect(err => {
    if (!err) {
      dataBase.query(command, (err, result) => {
        if (!err) {
          console.log(result);
          res.send({ status: 'ok' })
        } else {
          console.log(err);
          res.send('Error DATABASE WRITE');
        }
      });
    } else {
      res.send('Error DATABASE');
    }
  });
  
});

app.get('/users', (req, res) => {
  const command = `
    SELECT * FROM lesson.users;
  `;

  dataBase.connect(err => {
    if (!err) {
      dataBase.query(command, (err, result) => {
        if (!err) {
          res.json(result)
        } else {
          console.log(err);
          res.send('Error DATABASE READ');
        }
      });
    } else {
      res.send('Error DATABASE');
    }
  });
});

app.listen(3000, () => { console.log('@3000'); });
