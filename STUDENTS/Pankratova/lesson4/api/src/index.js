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
    try {
        const basket = JSON.parse(fs.readFileSync('./src/db/basket.json', 'utf-8'));
        basket.content.push(req.body);
        fs.writeFileSync('./src/db/basket.json', JSON.stringify(basket, null, ' '));
        res.json({
            status: true
        });
    } catch (err) {
        res.sendStatus(500, 'Can not write basket');
    }

});
server.put('/basket/:id', async (req, res) => {
    try {
        fs.readFile('./src/db/basket.json', 'utf-8', (err, data) => {
            if (!err) {
                const basket = JSON.parse(data);
                basket.content[req.params.id].amount = req.body.amount
                fs.writeFile('./src/db/basket.json', JSON.stringify(basket), err => {
                    if (!err) {
                        res.json({
                            status: true
                        })
                    } else {
                        res.sendStatus(500)
                    }
                })
            }
        });
    } catch (err) {
        res.sendStatus(404, 'Not Found');
    }
});
server.delete('/basket/:id', async (req, res) => {
    try {
        fs.readFile('./src/db/basket.json', 'utf-8', (err, data) => {
            if (!err) {
                const basket = JSON.parse(data);
                basket.content.splice((req.params.id - 1), 1);
                fs.writeFile('./src/db/basket.json', JSON.stringify(basket), err => {
                    if (!err) {
                        res.json({
                            status: true
                        })
                    } else {
                        res.sendStatus(500)
                    }
                })
            }
        });
    } catch (err) {
        res.sendStatus(404, 'Not Found');
    }
});

// POST, PUT, DELETE

server.listen(3300, () => {
    console.log('Listening at 3300...')
});