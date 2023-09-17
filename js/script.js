let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

const gameScreenElement = document.querySelector('#game-screen-element');
const resultScreenElement = document.querySelector('#result-screen-element');

const playerScoreElement = document.querySelector('#player-score-element');
const computerScoreElement = document.querySelector('#computer-score-element');

const playAgainBtn = document.querySelector('#play-again-button');

const getComputerChoice = () => {
  const choice = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
};

const calculateGame = (computerSelection, playerSelection) => {
  if (computerSelection === 'rock' && playerSelection === 'paper') {
    console.log('You Win!');
    playerScore += 1;
  } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    console.log('You Win!');
    playerScore += 1;
  } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    console.log('You Win!');
    playerScore += 1;
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    console.log('You Lose!');
    computerScore += 1;
  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    console.log('You Lose!');
    computerScore += 1;
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    console.log('You Lose!');
    computerScore += 1;
  } else {
    console.log('You Draw');
  }
  console.info('Player:', playerScore);
  console.info('computer:', computerScore);
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
};

const playRound = (event) => {
  const { value } = event.currentTarget;
  console.log(value);
  const playerSelection = event.currentTarget.value;
  const computerSelection = getComputerChoice();
  console.info('Player Chooses:', playerSelection);
  console.info('Computer Chooses:', computerSelection);
  calculateGame(computerSelection, playerSelection);
  gameScreenElement.classList.replace('d-flex', 'd-none');
  resultScreenElement.classList.replace('d-none', 'd-flex');
};

const playAgain = () => {
  gameScreenElement.classList.replace('d-none', 'd-flex');
  resultScreenElement.classList.replace('d-flex', 'd-none');
};

rockButton.addEventListener('click', playRound);

paperButton.addEventListener('click', playRound);

scissorsButton.addEventListener('click', playRound);

playAgainBtn.addEventListener('click', playAgain);
