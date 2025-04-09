let inputPlayer1 = document.getElementById('player-1');
let inputPlayer2 = document.getElementById('player-2');

function showResult() {
  // Show 3 possible outcomes: Player 1, Player 2 and Draw

  let scorePlayer1 = parseFloat(inputPlayer1.value);
  let scorePlayer2 = parseFloat(inputPlayer2.value);

  if (scorePlayer1 > scorePlayer2) {
    alert('Player 1 won!');
  } else if (scorePlayer2 > scorePlayer1) {
    alert('Player 2 won!');
  } else {
    alert('Draw!');
  }
}
