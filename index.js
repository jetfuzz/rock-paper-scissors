const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

//Create function for playing one round of game

function playRound() {

    let playerSelection = prompt("Choose rock, paper or scissors:").toLowerCase();

    let computerSelection = choices[Math.floor(Math.random()*3)];

    console.log("Player chooses " + playerSelection);

    console.log("Computer chooses " + computerSelection);

    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1
        return "You lose! Paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1
        return "You win! Rock beats scissors";

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
    } else if (playerSelection === computerSelection) {
        computerScore += 1
        playerScore += 1
        return `It's a tie! Both players choose ${playerSelection}`;
    } else return "Invalid entry, please type either rock, paper, or scissors";

}

//Create a function that plays five rounds of game
//Keep score of each players wins and loses
//Display a winner after five rounds

function playGame() {
    console.log (playRound());
    console.log("The score is now " + playerScore + " for player and " + computerScore + " for the computer");

    console.log (playRound());
    console.log("The score is now " + playerScore + " for player and " + computerScore + " for the computer");

    console.log (playRound());
    console.log("The score is now " + playerScore + " for player and " + computerScore + " for the computer");

    console.log (playRound());
    console.log("The score is now " + playerScore + " for player and " + computerScore + " for the computer");

    console.log (playRound());
    console.log("The score is now " + playerScore + " for player and " + computerScore + " for the computer");

    gameEnd();
}

console.log(playGame())

function gameEnd() {
    if (computerScore > playerScore) {
        console.log("The computer wins!")
    } else if (playerScore > computerScore) {
        console.log("You win!")
    } else console.log("Game is a tie!")
    }