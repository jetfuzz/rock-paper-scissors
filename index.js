//Create function for computer to generate rock, paper or scissors

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

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
console.log("Player chose " + playerSelection);

const computerSelection = getComputerChoice();
console.log("Computer chose " + computerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1
        return "You Lose! Paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        computerScore += 1
        playerScore += 1
        return "It's a tie! Both players choose rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1
        return "You win! Rock beats scissors";

    } else if (playerSelection === "paper" && computerSelection === "paper") {
        computerScore += 1
        playerScore += 1
        return "It's a tie! both players choose paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1
        return "You win! Paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1
        return "You lose! Scissors beats paper";

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1
        return "You win! scissors beats paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1
        return "You lose! Rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        computerScore += 1
        playerScore += 1
        return "It's a tie! Both players choose scissors";

    } else return "Invalid entry, please type either rock, paper, or scissors";
}

console.log(playRound(playerSelection, computerSelection));
console.log("The score is now " + playerScore + " for you and " + computerScore + " for the computer");

//Create a function that plays five rounds of game
//Keep score of each players wins and loses
//Display a winner after five rounds

function playGame() {
    for (let i = 0; i < 5; i++){
        
    }
}