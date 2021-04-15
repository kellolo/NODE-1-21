const dataBaseConnect = require('../db');
const dataBaseQuery = require('../db/modules/query');
const DB = require('../db/dataBaseConfig');
const jwt = require('./jwt');

let dataBase;
async function connectToDB() {
    try {
        dataBase = await dataBaseConnect();
    }
    catch (err) {
        console.log('==> connect to data base fail ' + err);
    }
}

async function checkToken(user) {
    try {
        let decoded = jwt.check(user.sessionId, user.secret);
        return decoded.name === user.name ? true : false;
    }
    catch (err) {
        console.log('==> check token fail ' + err);
        return false;
    }
}

async function addTokenToDB(user) {
    try {
        const token = jwt.generate({ name: user.name }, user.secret);
        const sql = `UPDATE ?? SET ?? = ? WHERE (?? = ?)`;
        const result = await dataBaseQuery(dataBase, sql,
            [`${DB.database}.${DB.table}`, 'sessionId', token.token, 'login', user.login]);
        return result ? token : null;
    }
    catch (err) {
        console.log('==> add token fail ' + err);
        return null;
    }
}

async function getUserFromDB(payload) {
    try {
        const sql = `SELECT * FROM ?? WHERE ?`;
        const result = await dataBaseQuery(dataBase, sql, [`${DB.database}.${DB.table}`, payload]);
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

async function addUserToDB(newUser) {
    try {
        const sql = `INSERT INTO ?? SET ?`
        const result = await dataBaseQuery(dataBase, sql, [`${DB.database}.${DB.table}`, newUser]);
        return result ? result : null;
    }
    catch (err) {
        console.log('==> add user fail ' + err);
        return null;
    }
}

module.exports = { connectToDB, getUserFromDB, addUserToDB, addTokenToDB, checkToken };
