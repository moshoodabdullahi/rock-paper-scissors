let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');

const newGameButton = document.querySelector('#new-game-button');

const getComputerChoice = () => {
  const choice = ['Rock', 'Paper', 'Scissors'];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
};

const calculateGame = (computerSelection, playerSelection) => {
  if (computerSelection === 'Rock' && playerSelection === 'Paper') {
    console.log('You Win!');
  } else if (computerSelection === 'Scissors' && playerSelection === 'Rock') {
    console.log('You Win!');
    playerScore += 1;
  } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
    console.log('You Win!');
    playerScore += 1;
  } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
    console.log('You Lose!');
    computerScore += 1;
  } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
    console.log('You Lose!');
    computerScore += 1;
  } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
    console.log('You Lose!');
    computerScore += 1;
  } else {
    console.log('Draw');
  }
  console.info('Player:', playerScore);
  console.info('computer:', computerScore);
};

function playGame(event) {
  const playerSelection = event.target.textContent;
  const computerSelection = getComputerChoice();
  console.info('Player Chooses:', playerSelection);
  console.info('Computer Chooses:', computerSelection);
  calculateGame(computerSelection, playerSelection);
}

rockButton.addEventListener('click', playGame);

paperButton.addEventListener('click', playGame);

scissorsButton.addEventListener('click', playGame);

function startNewGame() {
  // const playerScore = 0
  // const computerScore = 0
  // console.info('Player Chooses:', playerScore);
  // console.info('Computer Chooses:', computerScore);
}

newGameButton.addEventListener('click', startNewGame);
