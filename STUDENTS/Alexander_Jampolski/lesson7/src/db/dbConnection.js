import mysql2 from 'mysql2';

const config = {
    host: 'localhost',
    user: 'root',
    database: 'node',
    password: 'rootroot'
}

const dbConnection = () => {
    return mysql2.createConnection(config);
};

export default dbConnection();