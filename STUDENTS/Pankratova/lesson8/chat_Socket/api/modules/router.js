const express = require('express');
const dataBaseConnection = require('../db');
const handleRequest = require('./requestHandler');

const app = express();

app.use(express.json());

let dataBase;
dataBaseConnection().then((res) => dataBase = res);

app.get('/api/chat', async (req, res) => {
    handleRequest(dataBase, req, res, 'get');
});
app.post('/api/chat', async (req, res) => {
    handleRequest(dataBase, req, res, 'add');
});
app.delete('/api/chat:id', async (req, res) => {
    handleRequest(dataBase, req, res, 'del');
});
app.get('/api/user', async (req, res) => {
    handleRequest(dataBase, req, res, 'getUser');
});
app.post('/api/user', async (req, res) => {
    handleRequest(dataBase, req, res, 'login');
});

module.exports = app;
