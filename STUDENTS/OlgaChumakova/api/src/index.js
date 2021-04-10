const express = require('express');
const fs = require('fs');
const server = express();

server.use(express.json());

server.get('/catalog', (req, res) => {
  fs.readFile('./src/db/catalog.json', 'utf-8', (err, data) => {
    if (!err) {
      res.json(JSON.parse(data));
    }
  });
});

server.get('/basket', (req, res) => {
  fs.readFile('./src/db/basket.json', 'utf-8', (err, data) => {
    if (!err) {
      res.json(JSON.parse(data));
    }
  });
});

server.post('/basket', async (req, res) => {
  // console.log(req.body);
  try {
    const basket = JSON.parse(fs.readFileSync('./src/db/basket.json', 'utf-8'));
    basket.content.push(req.body);
    fs.writeFileSync('./src/db/basket.json', JSON.stringify(basket, null, ' '));
    res.json({ status: true });
  }
  catch(err) {
    res.sendStatus(500, 'Can not write basket');
  }

});
server.put('/basket/:id?', (req, res) => {
  try {
    const basket = JSON.parse(fs.readFileSync('./src/db/basket.json', 'utf-8'));
    const index = basket.content.findIndex(e => e.productId === req.params.id)
    basket.content[index] = JSON.parse(req.body)
    fs.writeFileSync('./src/db/basket.json', JSON.stringify(basket, null, ' '));
    res.json({ status: true });
  }
  catch(err) {
    res.sendStatus(500, 'Can not write basket');
  }
});
server.delete('/basket', (req, res) => {
  try {
    const basket = JSON.parse(fs.readFileSync('./src/db/basket.json', 'utf-8'));
    const index = basket.content.findIndex(e => e.productId === req.params.id)
    basket.content.splice(index, 1)
    fs.writeFileSync('./src/db/basket.json', JSON.stringify(basket, null, ' '));
    res.json({ status: true });
  }
  catch(err) {
    res.sendStatus(500, 'Can not write basket');
  }
});

// POST, PUT, DELETE

server.listen(3300, () => { console.log('Listening at 3300...') });
