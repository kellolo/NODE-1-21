const Sequilize = require('sequelize');

const sequelize = new Sequilize('node-todo', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
