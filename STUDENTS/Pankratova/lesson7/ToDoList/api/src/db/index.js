const mysql2 = require('mysql2/promise');
const DB_CONFIG = require('./dataBaseConfig');

module.exports = async () => {
    try {
        const connection = await mysql2.createConnection({
            host: DB_CONFIG.host,
            user: DB_CONFIG.user,
            password: DB_CONFIG.password,
        });
        return connection;
    }
    catch (err) {
        console.log("==> create connection fail " + err);
        return null;
    }
};
