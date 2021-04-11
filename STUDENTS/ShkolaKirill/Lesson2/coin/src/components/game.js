const logger = require("./logger");
const selector = require("../utils/radio");
const check = require("./check");

function randomize() {
  let a = Math.random();
  if (a < 0.5) {
    a = 0;
  } else {
    a = 1;
  }

  return a;
}

function translate(key) {
  const variants = {
    0: "head",
    1: "tail",
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
      name: "Heads and Tails",
      message: "to flip a coin",
      choices: ["head", "tail"],
    });
    winner = check(user, pc);
  } catch (err) {
    console.log("Crush", err);
  } finally {
    if (winner) {
      logger(winner, { user, pc });
    } else {
      logger(null);
    }
  }
};
