const DB_CONFIG = require('../dataBaseConfig');
const dataBaseQuery = require('./query');

const userArr = [
    { name: 'adminName', secret: 'adminSecret', login: 'admin', password: 'admin' },
    { name: 'userName', secret: 'userSecret', login: 'user', password: 'user' },
]
const todoArr = [
    { name: 'first todo of admin', done: 0, userId: 1 },
    { name: 'second todo of admin', done: 0, userId: 1 },
    { name: 'todo1 of user', done: 0, userId: 2 },
    { name: 'todo2 of user', done: 1, userId: 2 },
    { name: 'todo3 of user', done: 1, userId: 2 },
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
            const sqlTableTodos = `CREATE TABLE if not exists ??(
                id int primary key auto_increment,
                name varchar(255) not null,
                done bool not null DEFAULT false,
                userId int not null
              )`;
            const result = await createTable(dbConnection, sqlTableTodos, DB_CONFIG.tableTodos);
            await fillTable(dbConnection, todoArr, DB_CONFIG.tableTodos);
            return result ? true : false;
        }
        return false;
    }
    catch (err) {
        dbConnection.end()
        return false;
    }
}
