const fs = require('fs');
const basket = require('./basket');

const ACTIONS = {
    add: basket.addToBasket,
    del: basket.delFromBasket,
    change: basket.changeBasket
}

module.exports = (req, res, pathToFile, action) => {
    try {
        const curResult = JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));
        if (action === 'get') {
            res.json(curResult);
        } else {
            const newResult = ACTIONS[action](curResult, req);
            fs.writeFileSync(pathToFile, JSON.stringify(newResult, null, ' '));
            res.json({ status: true });
        }
    }
    catch (err) {
        console.warn(err);
        res.sendStatus(500, `Request error: can't ${action}`);
    }
}
