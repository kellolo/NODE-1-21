const mysql2 = require('mysql2/promise');
const DB = require('./dataBaseConfig');

module.exports = async () => {
    try {
        const connection = await mysql2.createConnection({
            host: DB.host,
            user: DB.user,
            password: DB.password,
            database: DB.database
        });
        return connection;
    }
    catch (err) {
        console.log("==> create connection fail " + err);
        return null;
    }
};
