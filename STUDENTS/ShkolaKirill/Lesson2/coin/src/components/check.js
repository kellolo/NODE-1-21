module.exports = (player, comp) => {
  let winner;

  if (
    (player == "head" && comp == "head") ||
    (player == "tail" && comp == "tail")
  ) {
    winner = "User";
  } else {
    winner = "PC";
  }

  return { winner };
};
