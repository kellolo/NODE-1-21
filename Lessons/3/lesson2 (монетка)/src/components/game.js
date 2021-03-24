const check = require('./check');
const logger = require('./logger');
const randomize = require('../utils/random');
const setStatistics = require('./setStatistics');
const { WIN, VARIANTS } = require('../utils/const');
const pathToLogs = process.argv[2] ? process.argv[2] : './logs/log.txt';

const renderResult = async (scene, res, pc) => {
    scene.winRes.style.fg = res === WIN ? 'green' : 'red';
    scene.winRes.content = res === WIN ? ':) You Win!!!' : ':( loooser...';
    scene.image.stop();
    scene.image.setImage(`./resources/${pc}.png`);
    scene.reset.hidden = false;
    await setStatistics(pathToLogs, scene);
    scene.screen.render();
}

module.exports = async (scene) => {
    let user, pc;
    let res = null;
    try {
        pc = VARIANTS[randomize(2)];
        user = VARIANTS[scene.checked];
        res = check(user, pc);
        scene.image.play();
        setTimeout(() => { renderResult(scene, res, pc) }, 2000);
    }
    catch (err) {
        console.log('==> GAME FAILURE =>> ' + err);
    }
    finally {
        res ? logger(res, { user, pc }) : logger(null);
    }
};