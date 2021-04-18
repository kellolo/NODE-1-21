const Sequilize = require('sequelize');

const sequelize = new Sequilize('nodetodo', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize
