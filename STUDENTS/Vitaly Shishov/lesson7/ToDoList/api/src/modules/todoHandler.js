const dataBaseQuery = require('../db/modules/query');
const DB_CONFIG = require('../db/dataBaseConfig');

async function getFromDB(dataBase, payload) {
    try {
        const sql = `SELECT * FROM ?? WHERE ?`;
        const result = await dataBaseQuery(dataBase, sql,
            [`${DB_CONFIG.database}.${DB_CONFIG.tableTodos}`, payload]);
        if (result && result[0] && result[0].length) {
            return result[0];
        }
        else {
            return null;
        }
    }
    catch (err) {
        console.log('==> failed get "todo" ' + err);
        return null;
    }
}

async function addToDB(dataBase, payload, req) {
    try {
        const newTodo = Object.assign(payload, req.body);
        const sql = `INSERT INTO ?? SET ?;`;
        const result = await dataBaseQuery(dataBase, sql,
            [`${DB_CONFIG.database}.${DB_CONFIG.tableTodos}`, newTodo]);
        return (result);
    }
    catch (err) {
        console.log('==> failed post "todo" ' + err);
        return null;
    }
}

async function delFromDB(dataBase, payload, req) {
    try {
        const sql = `DELETE FROM ?? WHERE (?? = ?);`;
        const result = await dataBaseQuery(dataBase, sql,
            [`${DB_CONFIG.database}.${DB_CONFIG.tableTodos}`, 'id', req.params.id]);
        return (result);
    }
    catch (err) {
        console.log('==> failed delete "todo" ' + err);
        return null;
    }
}

async function updateDB(dataBase, payload, req) {
    try {
        const sql = `UPDATE ?? SET ?? = ? WHERE (?? = ?);`;
        const result = await dataBaseQuery(dataBase, sql,
            [`${DB_CONFIG.database}.${DB_CONFIG.tableTodos}`, 'done', req.body.done, 'id', req.params.id]);
        return (result);
    }
    catch (err) {
        console.log('==> failed put "todo" ' + err);
        return null;
    }
}

module.exports = { getFromDB, addToDB, delFromDB, updateDB };
