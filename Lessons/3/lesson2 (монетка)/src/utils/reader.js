const fs = require('fs');

module.exports = async (path) => {
    try {
        return fs.readFileSync(path, 'utf-8');
    }
    catch (err) {
        console.warn('==> FILE READ FAILURE ==> ' + err);
    }
}