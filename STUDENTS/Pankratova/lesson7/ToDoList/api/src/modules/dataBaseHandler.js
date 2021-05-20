const dataBaseConnect = require('../db');
const createDataBase = require('../db/modules/createDB');
const createTables = require('../db/modules/createTable');

module.exports = async () => {
    try {
        const dbConnection = await dataBaseConnect();
        await createDataBase(dbConnection);
        await createTables(dbConnection);
        return dbConnection;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}
