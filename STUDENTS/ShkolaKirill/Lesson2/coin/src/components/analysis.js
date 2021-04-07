const fs = require("fs");
const readline = require("readline");
const analyseLog = require("./analyseLog");
const logFile = "./logs/log.txt";
let text = fs.readFileSync(logFile, "utf-8");

function stringCount() {
  return text.toString().split("\n").length;
}

function wins() {
  return text
    .match(/User WINS/g)
    .toString()
    .split(",").length;
}

function looses() {
  return text
    .match(/PC WINS/g)
    .toString()
    .split(",").length;
}

function ratio(win, loos) {
  return win / loos;
}

module.exports = () => {
  let strings, win, lose, rat;

  strings = stringCount();
  win = wins();
  lose = looses();
  rat = ratio(win, lose);
  analyseLog(strings, win, lose, rat);
};
