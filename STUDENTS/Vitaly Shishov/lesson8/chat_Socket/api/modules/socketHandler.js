const { addToDB } = require('./chatHandler');
const dataBaseConnection = require('../db');

let dataBase;
dataBaseConnection().then((res) => (dataBase = res));

module.exports = (io) => {
  io.on('connection', socket => {
    console.log('User connected');

    socket.on('send', async data => {
      const result = await addToDB(dataBase, data);
    });
  });
};
