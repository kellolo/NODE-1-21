const socketIO = require('socket.io');

module.exports = server => {
  return socketIO(server, {
    origins: ['http://locahost:8080']
  });
};