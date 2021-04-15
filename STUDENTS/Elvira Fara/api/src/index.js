const express = require('express');
const handleRequest = require('./modules/requestHandler');
const { connectToDB, addUserToDB, getUserFromDB, addTokenToDB, checkToken } = require('./modules/login');
const server = express();

connectToDB();
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

server.post('/user', async (req, res) => {
    const { login, password } = req.body;
    try {
        let newUser = await getUserFromDB({ login: login });
        if (!newUser) {
            newUser = Object.assign({
                name: `${login}Name`,
                secret: `${login}Secret`,
                login: login,
                password: password
            });
            const result = await addUserToDB(newUser);
            if (result) {
                const token = await addTokenToDB(newUser);
                if (token) res.status(200).json({ token: token.token, user: newUser });
            }
            else res.status(403).json({ message: 'User login failed' });
        }
        else res.status(403).json({ message: 'User login is already in use' });
    }
    catch (err) {
        console.log('==> post user fail' + err);
        res.status(403).json({ message: 'User login failed' });
    }
});

server.put('/user', async (req, res) => {
    const { login, password } = req.body;
    try {
        const user = await getUserFromDB({ login: login });
        if (user && user.password === password) {
            const token = await addTokenToDB(user);
            if (token) res.status(200).json({ token: token.token, user: user });
        }
        else res.status(404).json({ message: 'User not found' });
    }
    catch (err) {
        console.log('==> put user fail' + err);
        res.status(401).json({ message: 'User login failed' });
    }
});

server.get('/user', async (req, res) => {
    try {
        if (req.get('Authorization')) {
            const user = await getUserFromDB({ sessionId: req.get('Authorization') });
            if (user && checkToken(user))
                res.status(200).json({ user: user });
            else res.status(401).json({ message: 'User is not logged in' });
        }
        else res.status(401).json({ message: 'User is not logged in' });
    }
    catch (err) {
        console.log('==> get user fail' + err);
        res.status(401).json({ message: 'User login failed' });
    }
});

server.listen(3300, () => { console.log('Listening at 3300...') });
