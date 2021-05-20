const express = require('express');
const dataBaseCreate = require('./modules/dataBaseHandler');
const handleRequest = require('./modules/requestHandler');

const app = express();
const port = 3000;

app.use(express.json());

let dataBase;
dataBaseCreate().then((res) => (dataBase = res));

app.get('/todo', async (req, res) => {
    handleRequest(dataBase, req, res, 'get');
});
app.post('/todo', async (req, res) => {
    handleRequest(dataBase, req, res, 'add');
});
app.put('/todo/:id', async (req, res) => {
    handleRequest(dataBase, req, res, 'update');
});
app.delete('/todo/:id', async (req, res) => {
    handleRequest(dataBase, req, res, 'del');
});
app.get('/user', async (req, res) => {
    handleRequest(dataBase, req, res, 'getUser');
});
app.post('/user', async (req, res) => {
    handleRequest(dataBase, req, res, 'login');
});

app.listen(port, () => { console.log(`listen at port ${port}...`); });
