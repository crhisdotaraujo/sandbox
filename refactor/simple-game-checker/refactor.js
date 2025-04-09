function getPlayers(elementIds) {
  let players = [];

  elementIds.forEach((element) => {
    players.push({
      id: element,
      element: document.getElementById(element),
    });
  });

  return players;
}

function getPlayerScore(player) {
  return parseFloat(player.element.value);
}

function getGameWinner(playerOne, playerTwo) {
  if (getPlayerScore(playerOne) > getPlayerScore(playerTwo)) {
    return alert('Player 1 won!');
  }

  if (getPlayerScore(playerOne) < getPlayerScore(playerTwo)) {
    return alert('Player 2 won!');
  }

  return alert(`It's a Draw!`);
}

function showResult() {
  // Show 3 possible outcomes: Player 1, Player 2 and Draw
  let players = getPlayers(['player-1', 'player-2']);

  console.log(players);
  getGameWinner(players[0], players[1]);
}
