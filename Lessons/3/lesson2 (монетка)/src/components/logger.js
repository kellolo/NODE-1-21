const moment = require('moment');
const writer = require('../utils/writer');
const urlLog = './logs/log.txt';

module.exports = async (res, { user, pc }) => {
    const log = res ?
        `${moment().format('LLL')} === ${res};  User: ${user};  PC: ${pc};` :
        `${moment().format('LLL')} === ERROR`;
    try {
        await writer(urlLog, log);
        return true;
    }
    catch (err) {
        console.log('==> LOG WRITE FAILURE ==>' + err);
        return false;
    }
};