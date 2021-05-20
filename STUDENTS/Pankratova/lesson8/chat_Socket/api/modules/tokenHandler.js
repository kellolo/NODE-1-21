const dataBaseQuery = require('../db/modules/query');
const DB_CONFIG = require('../db/dataBaseConfig');
const jwt = require('./jwt');

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

async function addToDB(dataBase, user) {
    try {
        const token = jwt.generate({ name: user.name }, user.secret);
        const sql = `UPDATE ?? SET ?? = ? WHERE (?? = ?)`;
        const result = await dataBaseQuery(dataBase, sql,
            [`${DB_CONFIG.database}.${DB_CONFIG.tableUsers}`, 'sessionId', token.token, 'login', user.login]);
        return result ? token : null;
    }
    catch (err) {
        console.log('==> add token fail ' + err);
        return null;
    }
}

module.exports = { checkToken, addToDB };
