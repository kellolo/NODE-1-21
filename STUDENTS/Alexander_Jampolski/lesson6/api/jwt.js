const jwt = require('jsonwebtoken');

module.exports = {
  generate() {
    const token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    return {
      token,
      created: new Date()
    };
  }
};