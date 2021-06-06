const dataBaseQuery = require('../db/modules/query');
const DB_CONFIG = require('../db/dataBaseConfig');

async function getFromDB(dataBase) {
    try {
        const sql = `SELECT * FROM ??`;
        const result = await dataBaseQuery(dataBase, sql,
            [`${DB_CONFIG.database}.${DB_CONFIG.tableChat}`]);
        if (result && result[0] && result[0].length) {
            return result[0];
        }
        else {
            return null;
        }
    }
    catch (err) {
        console.log('==> failed get messages ' + err);
        return null;
    }
}

async function addToDB(dataBase, payload) {
    try {
        const sql = `INSERT INTO ?? SET ?;`;
        const result = await dataBaseQuery(dataBase, sql,
            [`${DB_CONFIG.database}.${DB_CONFIG.tableChat}`, payload]);
        return (result);
    }
    catch (err) {
        console.log('==> failed post message ' + err);
        return null;
    }
}

async function delFromDB(dataBase, payload, req) {
    try {
        const sql = `DELETE FROM ?? WHERE (?? = ?);`;
        const result = await dataBaseQuery(dataBase, sql,
            [`${DB_CONFIG.database}.${DB_CONFIG.tableChat}`, 'id', req.params.id]);
        return (result);
    }
    catch (err) {
        console.log('==> failed delete message ' + err);
        return null;
    }
}

module.exports = { getFromDB, addToDB, delFromDB };
