const read = require('../utils/reader');
const { WIN } = require('../utils/const');

const getMaxChain = (arr, pattern) => {
    let maxChain = 0;
    let currChain = 0;
    arr.forEach(elem => {
        currChain = elem.search(pattern) === -1 ? 0 : currChain + 1;
        if (currChain > maxChain)
            maxChain = currChain;
    });
    return maxChain;
}

module.exports = async (path) => {
    try {
        const gameDataStr = await (await read(path)).toString();
        const gameDataArr = gameDataStr.split('\n');
        const gameCnt = gameDataArr.length - 1;
        const pattern = new RegExp(WIN, 'g');
        const winCnt = (gameDataStr.match(pattern) || []).length;
        return {
            games: gameCnt,
            wins: winCnt,
            winRatio: gameCnt ? (winCnt / gameCnt).toFixed(2) : 0,
            winChain: getMaxChain(gameDataArr, pattern)
        };
    }
    catch (err) {
        console.log('==> STATISTICS FAILURE ==> ' + err);
        return { games: 0, wins: 0, winRatio: 0, winChain: 0 };
    }
};