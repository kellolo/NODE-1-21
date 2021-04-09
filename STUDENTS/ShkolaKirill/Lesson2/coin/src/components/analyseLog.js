module.exports = (strings, win, lose, rat) => {
  console.log("Кол-во проведённых игр: " + (strings - 1));
  console.log(`Кол-во побед: ${win}`);
  console.log(`Кол-во поражений: ${lose}`);
  console.log(`Соотношение побед к поражениям: ${rat}`);
};
