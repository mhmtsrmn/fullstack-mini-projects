const ROUNDS = 5;

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let x = Math.floor(Math.random() * 10) % 3;
    return choices[x];
}

function getPlayerChoice() {
    let choice = prompt("Choose: rock, paper or scissors").toLowerCase();
    return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    const possibleResults = {
        tie: "It's a Tie!",
        lose: "You Lose! `" + computerSelection + "` beats `" + playerSelection + "`",
        win: "You Win! `" + playerSelection + "` beats `" + computerSelection + "`"
    }
    const tie = playerSelection === computerSelection;
    const lose = (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")

    if (tie) return possibleResults['tie'];
    if (lose) return possibleResults['lose'];
    return possibleResults['win'];
}

function playGame() {
    let scores = { player: 0, computer: 0 };
    let res;
    for (let i = 0; i < ROUNDS; i++) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        res = playRound(playerSelection, computerSelection);
        alert(res);
        if (res.includes('Win')) scores.player++;
        if (res.includes('Lose')) scores.computer++;
    }
    console.log(scores);
    if (scores.player > scores.computer) {
        alert('You win the game!')
    } else if (scores.player < scores.computer) {
        alert('You lose the game...')
    } else {
        alert('It is a tie.')
    }
}

playGame();