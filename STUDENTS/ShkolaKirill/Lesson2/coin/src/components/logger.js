const moment = require("moment");
const writer = require("../utils/writer");
const urlLog = "./logs/log.txt";

module.exports = async ({ winner }, { user, pc }) => {
  const log = winner
    ? `${moment().format(
        "LLL"
      )} === ${winner} WINS; User: ${user}; Result: ${pc};`
    : `${moment().format("LLL")} === ERR`;

  try {
    await writer(urlLog, log);
    return true;
  } catch {
    return false;
  }
};
