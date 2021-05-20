const DB_CONFIG = require('../dataBaseConfig');
const dataBaseQuery = require('./query');

module.exports = async (dbConnection) => {
    try {
        const sqlCreateDB = 'CREATE DATABASE if not exists ??';
        const result = await dataBaseQuery(dbConnection, sqlCreateDB, [`${DB_CONFIG.database}`]);
        if (result) {
            const sqlUseDB = 'USE ??';
            const result = await dataBaseQuery(dbConnection, sqlUseDB, [`${DB_CONFIG.database}`]);
            if (result) {
                console.log(`==> dataBase "${DB_CONFIG.database}" created (or used if exist)`);
                return true;
            }
        }
        return false;
    }
    catch (err) {
        console.log(`==> dataBase "${DB_CONFIG.database}" create/use fail ` + err);
        dbConnection.end();
        return false;
    }
}
