const selector = require('../../utils/radio'); //const x = await selector...
const check = require('./check');
// const result = require('../../utils/console');
const logger = require('./logger');

function randomize() {
  return Math.floor(Math.random() * 3 + 1);
};

function translate(key) {
  const variants = {
    '1': 'rock',
    '2': 'scissors',
    '3': 'paper'
  };

  return variants[key];
}

function getAI() {
  return translate(randomize());
}

module.exports = async () => {
  let user, pc;
  let winner;
  try {
    pc = getAI();
    user = await selector({
      name: 'RockGame',
      message: 'Select Unit',
      choices: [
        'rock',
        'scissors',
        'paper'
      ]
    });
    winner = check(user, pc);
  }
  catch(err) {
    console.log('Crush ', err);
  }

  finally {
    if (winner) {
      logger(winner, { user, pc });
    } else {
      logger(null);
    }
  }
};