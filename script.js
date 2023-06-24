function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * choice.length);
  const computerChoice = choice[randomChoice];
  return computerChoice;
}

getComputerChoice();

function playRound(playerSelection, computerSelection) {
  const choice = ["Rock", "Paper", "Scissors"];
  const rock = choice[0];
  const paper = choice[1];
  const scissors = choice[2];

  if (playerSelection === computerSelection) {
    return "Tie";

    // Computer chooses Paper and you choose Rock
  } else if (playerSelection === rock && computerSelection === paper) {
    return "The Computer plays Paper. You Lose!";

    // Computer chooses Scissors and you choose Rock
  } else if (playerSelection === rock && computerSelection === scissors) {
    return "The Computer plays Scissors. You Win!";

    // Computer chooses Rock and you choose Paper
  } else if (playerSelection === paper && computerSelection === rock) {
    return "The Computer plays Rock. You Win!";

    // Computer chooses Scissors when you played Paper
  } else if (playerSelection === paper && computerSelection === scissors) {
    return "The Computer plays Scissors. You Lose!";

    // Computer chooses Rock and you played Scissors
  } else if (playerSelection === scissors && computerSelection === rock) {
    return "The Computer plays Rock. You Lose!";

    // Computer chooses Paper and you played Scissors
  } else if (playerSelection === scissors && computerSelection === paper) {
    return "The Computer plays Paper. You Win!";
  }
}

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const roundNumberDisplay = document.getElementById("roundNumber");
const gameResultsDisplay = document.getElementById("gameResults");
const playerScoreDisplay = document.getElementById("playersScore");
const computerScoreDisplay = document.getElementById("computersScore");
const playerResultDisplay = document.getElementById("playersResult");
const computerResultDisplay = document.getElementById("computersResults");

let rounds = 0;
let playerScore = 0;
let computerScore = 0;
