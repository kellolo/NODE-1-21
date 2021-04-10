const initScene = require('./components/initScene');
const runGame = require('./components/game');

const scene = initScene();
scene.screen.render();

// run game
scene.form.on('submit', function (data) {
    scene.checked = data.coin[0] ? 1 : 2;     // 1: heads,   2: tails
    scene.reset.hidden = true;
    scene.submit.hidden = true;
    scene.msg.display('Tossing a coin --->', 1, () => { runGame(scene) });
});
// restart
scene.form.on('reset', function () {
    scene.winRes.content = '';
    scene.submit.hidden = false;
    scene.image.setImage('./resources/coin.gif');
    scene.image.stop();
    scene.msg.display('Game restarted', 1, function () { });
});