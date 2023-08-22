let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

const playerChoiceElement = document.querySelector('#player-choice');
const computerChoiceElement = document.querySelector('#computer-choice');

const gameOutcomeElement = document.querySelector('#game-outcome');

const newGameButton = document.querySelector('#new-game-button');

const getComputerChoice = () => {
  const choice = ['Rock', 'Paper', 'Scissors'];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
};

const calculateGame = (computerSelection, playerSelection) => {
  if (computerSelection === 'Rock' && playerSelection === 'Paper') {
    console.log('You Win!');
    gameOutcomeElement.textContent = 'You Win!';
    playerScore += 1;
  } else if (computerSelection === 'Scissors' && playerSelection === 'Rock') {
    console.log('You Win!');
    gameOutcomeElement.textContent = 'You Win!';
    playerScore += 1;
  } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
    console.log('You Win!');
    gameOutcomeElement.textContent = 'You Win!';
    playerScore += 1;
  } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
    console.log('You Lose!');
    gameOutcomeElement.textContent = 'You Lose!';
    computerScore += 1;
  } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
    console.log('You Lose!');
    gameOutcomeElement.textContent = 'You Lose!';
    computerScore += 1;
  } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
    console.log('You Lose!');
    gameOutcomeElement.textContent = 'You Lose!';
    computerScore += 1;
  } else {
    console.log('You Draw');
    gameOutcomeElement.textContent = 'You Draw!';
  }
  console.info('Player:', playerScore);
  console.info('computer:', computerScore);
};

const checkWinner = () => {
  if (playerScore >= 5) {
    console.log('Game End, You win');
    gameOutcomeElement.textContent = 'Game End, You win';
  } else if (computerScore >= 5) {
    console.log('Game End, You Lose. Computer Win');
    gameOutcomeElement.textContent = 'Game End, You Lose. Computer Win';
  }
};

const playGame = (event) => {
  if (playerScore >= 5 || computerScore >= 5) {
    gameOutcomeElement.textContent = 'Click the New Game Button to Restart Game';
    return console.log('Click the New Game Button to Restart Game');
  }
  const playerSelection = event.target.textContent;
  const computerSelection = getComputerChoice();
  console.info('Player Chooses:', playerSelection);
  console.info('Computer Chooses:', computerSelection);
  playerChoiceElement.textContent = playerSelection;
  computerChoiceElement.textContent = computerSelection;
  calculateGame(computerSelection, playerSelection);
  checkWinner(computerScore, playerScore);
};

rockButton.addEventListener('click', playGame);

paperButton.addEventListener('click', playGame);

scissorsButton.addEventListener('click', playGame);

const startNewGame = () => {
  playerScore = 0;
  computerScore = 0;
  gameOutcomeElement.textContent = '';
  playerChoiceElement.textContent = '';
  computerChoiceElement.textContent = '';
};

newGameButton.addEventListener('click', startNewGame);
