const blessed = require('blessed');
const { VARIANTS } = require('../utils/const');
const scene = {};

scene.screen = blessed.screen({
    smartCSR: true,
    title: '>> Heads and Tails <<'
});

scene.form = blessed.form({
    parent: scene.screen,
    width: 44,
    height: 15,
    keys: true,
    vi: true,
    border: {
        type: 'line',
        fg: 'yellow'
    }
});

scene.title = blessed.text({
    parent: scene.form,
    content: 'Try to toss the coin, Heads or Tails?',
    left: 2,
    fg: 'yellow',
    bold: true
});

scene.radioset = blessed.radioset({
    parent: scene.form,
    width: 40,
    top: 4,
    left: 2
});

scene.heads = blessed.radiobutton({
    parent: scene.radioset,
    name: 'coin',
    content: `I  ${VARIANTS[1]}`,
});

scene.tails = blessed.radiobutton({
    parent: scene.radioset,
    name: 'coin',
    content: `II  ${VARIANTS[2]}`,
    left: 22
});

scene.msg = blessed.message({
    parent: scene.screen,
    top: 6,
    width: 40,
    height: 3,
    left: 2,
    fg: 'green',
    border: {
        type: 'line',
        fg: 'green'
    },
    hidden: true
});

scene.submit = blessed.button({
    parent: scene.form,
    name: 'submit',
    content: 'GoGoGo',
    top: 9,
    left: 2,
    width: 9,
    shrink: true,
    padding: {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
    },
    style: {
        bold: true,
        fg: 'white',
        bg: 'green',
        focus: {
            inverse: true
        }
    }
});

scene.reset = blessed.button({
    parent: scene.form,
    name: 'reset',
    content: 'Restart',
    top: 9,
    left: 32,
    width: 9,
    shrink: true,
    hidden: true,
    padding: {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
    },
    style: {
        bold: true,
        fg: 'white',
        bg: 'red',
        focus: {
            inverse: true
        }
    }
});

scene.submit.on('press', function () {
    scene.form.submit();
});

scene.reset.on('press', function () {
    scene.form.reset();
});

scene.box = blessed.box({
    parent: scene.screen,
    width: 38,
    height: 15,
    left: 44,
    keys: true,
    vi: true,
    border: {
        type: 'line',
        fg: 'yellow'
    }
});

scene.image = blessed.image({
    parent: scene.box,
    width: 36,
    height: 13,
    type: 'ansi',
    file: './resources/coin.gif',
    animate: false
});

scene.boxRes = blessed.box({
    parent: scene.screen,
    width: 24,
    height: 15,
    left: 82,
    keys: true,
    vi: true,
    border: {
        type: 'line',
        fg: 'yellow'
    }
});

scene.titleRes = blessed.text({
    parent: scene.boxRes,
    content: 'Results',
    left: 2,
    fg: 'yellow',
    bold: true
});

scene.gameCnt = blessed.text({
    parent: scene.boxRes,
    left: 2,
    top: 3
});

scene.winCnt = blessed.text({
    parent: scene.boxRes,
    left: 2,
    top: 5
});

scene.winRatio = blessed.text({
    parent: scene.boxRes,
    left: 2,
    top: 7
});

scene.winChain = blessed.text({
    parent: scene.boxRes,
    left: 2,
    top: 9
});

scene.winRes = blessed.text({
    parent: scene.boxRes,
    left: 4,
    top: 11,
    bold: true
});

scene.screen.key(['escape', 'q', 'C-c'], function (ch, key) {
    return process.exit(0);
});

module.exports = () => {
    return scene;
};