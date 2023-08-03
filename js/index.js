const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

const newGameButton = document.querySelector('#new-game-button');

function handler(event) {
  console.log(event.target.textContent);
}

rockButton.addEventListener('click', handler);

paperButton.addEventListener('click', handler);

scissorsButton.addEventListener('click', handler);

newGameButton.addEventListener('click', handler);
