const express = require('express');
const handleRequest = require('./modules/requestHandler');
const server = express();

server.use(express.json());

server.get('/catalog', async (req, res) => {
    handleRequest(req, res, './src/db/catalog.json', 'get');
});

server.get('/basket', async (req, res) => {
    handleRequest(req, res, './src/db/basket.json', 'get');
});

server.post('/basket', async (req, res) => {
    handleRequest(req, res, './src/db/basket.json', 'add');
});

server.put('/basket/:id', async (req, res) => {
    handleRequest(req, res, './src/db/basket.json', 'change');
});

server.delete('/basket/:id', async (req, res) => {
    handleRequest(req, res, './src/db/basket.json', 'del');
});

server.listen(3300, () => { console.log('Listening at 3300...') });
