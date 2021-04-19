const { send } = require('./chatHandler');

module.exports = io => {
  io.on('connection', socket => {
    console.log('User connected');

    socket.on('send', data => {
      const result = send(data);
      console.log(result);
    });
  });
};
