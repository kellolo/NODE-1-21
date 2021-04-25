import mysql2 from 'mysql2';

const config = {
    host: 'localhost',
    user: 'root',
    database: 'auth-lesson',
    password: 'rootroot'
}

const databaseConnection = () => {
    return mysql2.createConnection(config);
};

export default databaseConnection();