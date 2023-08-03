const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

const newGameButton = document.querySelector('#new-game-button');

const getComputerChoice = () => {
  const choice = ['Rock', 'Paper', 'Scissors'];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
};

function playGame(event) {
  console.log(event.target.textContent);
  const playerSelection = event.target.textContent;
  const computerSelection = getComputerChoice();
  console.info('Player Chooses:', playerSelection, 'Computer Chooses:', computerSelection);
}

rockButton.addEventListener('click', playGame);

paperButton.addEventListener('click', playGame);

scissorsButton.addEventListener('click', playGame);

function startNewGame(event) {
  console.log(event.target.textContent);
}

newGameButton.addEventListener('click', startNewGame);
