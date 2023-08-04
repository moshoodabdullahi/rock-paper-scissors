const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

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
  } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
    console.log('You Win!');
  } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
    console.log('You Lose!');
  } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
    console.log('You Lose!');
  } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
    console.log('You Lose!');
  } else {
    console.log('Draw');
  }
};

function playGame(event) {
  console.log(event.target.textContent);
  const playerSelection = event.target.textContent;
  const computerSelection = getComputerChoice();
  console.info('Player Chooses:', playerSelection, 'Computer Chooses:', computerSelection);
  calculateGame(computerSelection, playerSelection);
}

rockButton.addEventListener('click', playGame);

paperButton.addEventListener('click', playGame);

scissorsButton.addEventListener('click', playGame);

function startNewGame(event) {
  console.log(event.target.textContent);
}

newGameButton.addEventListener('click', startNewGame);
