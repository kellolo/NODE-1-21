const dataBaseQuery = require('../db/modules/query');
const token = require('./tokenHandler');
const DB_CONFIG = require('../db/dataBaseConfig');

async function getFromDB(dataBase, payload) {
    try {
        const sql = `SELECT * FROM ?? WHERE ?`;
        const result = await dataBaseQuery(dataBase, sql,
            [`${DB_CONFIG.database}.${DB_CONFIG.tableUsers}`, payload]);
        if (result && result[0] && result[0].length) {
            return result[0][0];
        }
        else {
            return null;
        }
    }
    catch (err) {
        console.log('==> get user fail ' + err);
        return null;
    }
}

async function addToDB(dataBase, newUser) {
    try {
        const sql = `INSERT INTO ?? SET ?`
        const result = await dataBaseQuery(dataBase, sql,
            [`${DB_CONFIG.database}.${DB_CONFIG.tableUsers}`, newUser]);
        return result ? result : null;
    }
    catch (err) {
        console.log('==> add user fail ' + err);
        return null;
    }
}

async function login(dataBase, req, res) {
    const { login, password, action } = req.body;
    try {
        let curUser = await getFromDB(dataBase, { login });
        if (curUser && action === 'register') {
            res.json({ message: 'User login is already in use' });
            return false;
        }
        if ((!curUser || (curUser && curUser.password !== password)) && action === 'login') {
            res.json({ message: 'User not found' });
            return false;
        }
        if (!curUser) {
            curUser = {
                name: `${login}Name`,
                secret: `${login}Secret`,
                login: login,
                password: password
            };
            const result = await addToDB(dataBase, curUser);
            if (!result) {
                res.json({ message: 'User login failed' });
                return false;
            }
        }
        const curToken = await token.addToDB(dataBase, curUser);
        if (curToken) {
            res.status(200).json({ token: curToken.token, user: curUser });
            return true;
        }
    }
    catch (err) {
        console.log(`==> fail ${action}` + err);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { getFromDB, addToDB, login };
