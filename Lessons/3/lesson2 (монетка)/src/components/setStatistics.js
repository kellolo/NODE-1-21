const getStatistics = require('./getStatistics');

module.exports = async (pathToLogs, scene) => {
    let stat = await getStatistics(pathToLogs);
    scene.winCnt.content = `Wins count:  ${stat.wins}`;
    scene.gameCnt.content = `Games count: ${stat.games}`;
    scene.winRatio.content = `Wins ratio:  ${stat.winRatio}`;
    scene.winChain.content = `Wins chain:  ${stat.winChain}`;
}