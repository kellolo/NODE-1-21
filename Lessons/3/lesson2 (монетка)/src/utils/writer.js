const fs = require('fs');

module.exports = async (path, data) => {
    try {
        fs.appendFileSync(path, `${data}\n`);
        return true;
    }
    catch (err) {
        console.log('==> FILE WRITE FAILURE ==> ' + err);
        return false
    }
};