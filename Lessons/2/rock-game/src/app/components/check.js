
module.exports = (player, comp) => {
  let winner;

  if ((player == 'rock' && comp == 'scissors') || (player == 'scissors' && comp == 'paper') || (player == 'paper' && comp == 'rock')) {
    winner = 'User';
  } else if (player === comp) {
    winner = 'Nobody';
  } else {
    winner = 'PC';
  }

  return { winner };
};