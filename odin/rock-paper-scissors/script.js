const ROUNDS = 5;
let pScore = 0;
let cScore = 0;
let gameOver = false;


const updatePScore = () => pScore++;
const updateCScore = () => cScore++;

const choices = ['rock', 'paper', 'scissors'];

const rock = document.createElement('button');
rock.textContent = 'Rock';
const paper = document.createElement('button');
paper.textContent = 'Paper';
const scissors = document.createElement('button');
scissors.textContent = 'Scissors';

const choiceButtons = document.getElementById('choices');
choiceButtons.appendChild(rock);
choiceButtons.appendChild(paper);
choiceButtons.appendChild(scissors);

const playerScore = document.querySelector('#player > p');
playerScore.textContent = `Player: ${pScore}`;
const playerText = document.querySelector('#player > .text');

const computerScore = document.querySelector('#computer > p');
computerScore.textContent = `Computer: ${cScore}`;
const computerText = document.querySelector('#computer > .text');


function getComputerChoice() {
    let x = Math.floor(Math.random() * 10) % 3;
    return choices[x];
}

// function getPlayerChoice() {
//     let choice = prompt("Choose: rock, paper or scissors").toLowerCase();
//     return choice.toLowerCase();
// }
const gameOverButton = document.createElement('button');
gameOverButton.style.width = '100px';
gameOverButton.style.backgroundColor = '#d99';
const replayButton = document.createElement('button');
replayButton.style.width = '100px';
replayButton.style.backgroundColor = '#99d';

const isGameOver = () => {
    if (pScore === ROUNDS || cScore === ROUNDS) {
        choiceButtons.removeChild(rock);
        choiceButtons.removeChild(paper);
        choiceButtons.removeChild(scissors);

        choiceButtons.appendChild(gameOverButton);
        gameOverButton.textContent = "Game over!"
        gameOverButton.style.cursor = 'auto';
        choiceButtons.appendChild(replayButton);
        replayButton.textContent = 'Replay?';
        return true;
    }
    return false;
}

const replay = () => {
    if (gameOver) {
        choiceButtons.removeChild(gameOverButton);
        choiceButtons.removeChild(replayButton);

        choiceButtons.appendChild(rock);
        choiceButtons.appendChild(paper);
        choiceButtons.appendChild(scissors);
        pScore = 0;
        cScore = 0;

        playerScore.textContent = `Player: ${pScore}`;
        computerScore.textContent = `Computer: ${cScore}`;
        computerText.textContent = '';
        playerText.textContent = '';
    }
}

function play(playerSelection, computerSelection) {
    const tie = playerSelection === computerSelection;
    const lose = (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock");

    computerText.textContent = computerSelection;
    playerText.textContent = playerSelection;
    if (lose) {
        updateCScore();
        computerScore.textContent = `Computer: ${cScore}`;
    } else if (tie) {
        null;
    } else {
        updatePScore();
        playerScore.textContent = `Player: ${pScore}`;
    }
    gameOver = isGameOver();
    replayButton.addEventListener('click', replay);
}

rock.addEventListener('click', () => play('rock', getComputerChoice()));
paper.addEventListener('click', () => play('paper', getComputerChoice()));
scissors.addEventListener('click', () => play('scissors', getComputerChoice()));
