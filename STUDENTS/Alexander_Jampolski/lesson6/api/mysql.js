const mysql2 = require('mysql2');

module.exports = () => {
  const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'auth-lesson',
    password: 'pass'
  });

  return connection;
};