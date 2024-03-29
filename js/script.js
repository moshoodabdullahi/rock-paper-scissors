let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

const gameScreenElement = document.querySelector('#game-screen-element');
const resultScreenElement = document.querySelector('#result-screen-element');

const playerScoreElement = document.querySelector('#player-score-element');
const computerScoreElement = document.querySelector('#computer-score-element');

const playerResultImage = document.querySelector('#player-result-image');
const computerResultImage = document.querySelector('#computer-result-image');

const gameOutcomeElement = document.querySelector('#game-outcome-element');

const playAgainBtn = document.querySelector('#play-again-button');

const rulesButtonElement = document.querySelector('#rules-button-element');
const btnContainerElement = document.querySelector('#btn-container-element');
const closeGameRulesElement = document.querySelector('#close-game-rules-element');

const playerChoiceButton = document.querySelector('#player-choice');
const computerChoiceButton = document.querySelector('#computer-choice');

const getComputerChoice = () => {
  const choice = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
};

const calculateGame = (computerSelection, playerSelection) => {
  if (computerSelection === 'rock' && playerSelection === 'paper') {
    gameOutcomeElement.textContent = 'You Win!';
    playerScore += 1;
  } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    gameOutcomeElement.textContent = 'You Win!';
    playerScore += 1;
  } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    gameOutcomeElement.textContent = 'You Win!';
    playerScore += 1;
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    gameOutcomeElement.textContent = 'You Lose!';
    computerScore += 1;
  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    gameOutcomeElement.textContent = 'You Lose!';
    computerScore += 1;
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    gameOutcomeElement.textContent = 'You Lose!';
    computerScore += 1;
  } else {
    gameOutcomeElement.textContent = 'You Draw!';
  }
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
};

const generateSrcValue = (value) => {
  return `./images/icon-${value}.svg`;
};

const generateCircleClass = (value) => {
  return `btn-circle btn-${value}`;
};

const playRound = (event) => {
  const playerSelection = event.currentTarget.value;
  const computerSelection = getComputerChoice();
  calculateGame(computerSelection, playerSelection);
  gameScreenElement.classList.replace('d-flex', 'd-none');
  resultScreenElement.classList.replace('d-none', 'd-flex');
  const playerSelectionSrcValue = generateSrcValue(playerSelection);
  const computerSelectionSrcValue = generateSrcValue(computerSelection);
  playerResultImage.setAttribute('src', playerSelectionSrcValue);
  computerResultImage.setAttribute('src', computerSelectionSrcValue);
  const playerSelectionCircleClass = generateCircleClass(playerSelection);
  const computerSelectionCircleClass = generateCircleClass(computerSelection);
  playerChoiceButton.setAttribute('class', playerSelectionCircleClass);
  computerChoiceButton.setAttribute('class', computerSelectionCircleClass);
};

const playAgain = () => {
  gameScreenElement.classList.replace('d-none', 'd-flex');
  resultScreenElement.classList.replace('d-flex', 'd-none');
};

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);

playAgainBtn.addEventListener('click', playAgain);

const openRules = () => {
  rulesButtonElement.classList.replace('d-block', 'd-none');
  btnContainerElement.classList.replace('d-none', 'd-block');
};

const closeRules = () => {
  closeGameRulesElement.classList.replace('d-none', 'd-block');
  btnContainerElement.classList.replace('d-block', 'd-none');
};

rulesButtonElement.addEventListener('click', openRules);
closeGameRulesElement.addEventListener('click', closeRules);
