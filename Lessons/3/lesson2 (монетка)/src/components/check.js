const { WIN, LOSE } = require("../utils/const");

module.exports = (user, pc) => {
  return user === pc ? WIN : LOSE;
};