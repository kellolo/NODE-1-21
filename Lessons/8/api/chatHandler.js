const database = require('./mysql')();

module.exports = {
  send(msg) {
    const newMessage = `
      INSERT INTO chat (user, text, date)
      VALUES ('${ msg.user }', '${ msg.message }', '${ msg.date }')
    `;
    database.query(newMessage, (err, response) => {
      console.log(err);
      if (!err) {
        return true;
      } else {
        return false;
      }
    });
  }
};