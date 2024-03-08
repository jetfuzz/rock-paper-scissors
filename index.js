const choices = ["rock", "paper", "scissors"];

//Create function for computer to generate rock, paper or scissors

function getComputerChoice() {
    let randomChoice = choices[Math.floor(Math.random()*3)];
    return randomChoice;
}

//Create function for user input

function getUserChoice() {
    let userChoice = prompt("Choose rock, paper or scissors:");
    return userChoice.toLowerCase();
}

//Create function for playing one round of game

const playerSelection = getUserChoice();
console.log("Player choose " + playerSelection);

const computerSelection = getComputerChoice();
console.log("Computer choose " + computerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie! Both players choose rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors";

    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a tie! both players choose paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper";

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! scissors beats paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "It's a tie! Both players choose scissors";
    } else return "Invalid entry, please choose either rock, paper, or scissors";
}

console.log(playRound(playerSelection, computerSelection));