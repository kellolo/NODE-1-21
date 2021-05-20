const DB_CONFIG = require('../dataBaseConfig');
const dataBaseQuery = require('./query');

const userArr = [
    { name: 'adminName', secret: 'adminSecret', login: 'admin', password: 'admin' },
    { name: 'userName', secret: 'userSecret', login: 'user', password: 'user' },
]
const chatArr = [
    { user: 'admin', text: 'Hello!', date: '2021-04-25 04:04:00' },
    { user: 'admin', text: 'How are you?', date: '2021-04-25 04:04:04' },
    { user: 'user', text: 'Hi! I am fine :)', date: '2021-04-25 04:04:44' },
]

async function createTable(dbConnection, sql, tableName) {
    try {
        const result = await dataBaseQuery(dbConnection, sql, [`${DB_CONFIG.database}.${tableName}`]);
        if (result) {
            console.log(`==> table "${tableName}" created/used`);
            return true;
        }
        return false;
    }
    catch (err) {
        console.log(`==> table "${tableName}" create fail ` + err);
        dbConnection.end()
        return false;
    }
}

async function fillTable(dbConnection, arr, tableName) {
    try {
        const sql = `INSERT INTO ?? SET ?`;
        let result = null;
        for (let item of arr) {
            result = await dataBaseQuery(dbConnection, sql,
                [`${DB_CONFIG.database}.${tableName}`, item]);
            if (!result)
                break;
        }
        if (result) {
            console.log(`==> table "${tableName}" is filled in`);
            return true;
        }
        return false;
    }
    catch (err) {
        console.log(`==> table "${tableName}" fill fail ` + err);
        return false;
    }
}

module.exports = async (dbConnection) => {
    try {
        const sqlTableUsers = `CREATE TABLE if not exists ??(
            id int primary key auto_increment,
            name varchar(255) not null,
            secret varchar(255) not null,
            login varchar(255) not null,
            password varchar(255) not null,
            sessionId mediumtext null DEFAULT null
          )`;
        const result = await createTable(dbConnection, sqlTableUsers, DB_CONFIG.tableUsers);
        await fillTable(dbConnection, userArr, DB_CONFIG.tableUsers);
        if (result) {
            const sqlTableChat = `CREATE TABLE if not exists ??(
                id int primary key auto_increment,
                user varchar(255) not null,
                text longtext not null,
                date datetime not null
              )`;
            const result = await createTable(dbConnection, sqlTableChat, DB_CONFIG.tableChat);
            await fillTable(dbConnection, chatArr, DB_CONFIG.tableChat);
            return result ? true : false;
        }
        return false;
    }
    catch (err) {
        dbConnection.end()
        return false;
    }
}
