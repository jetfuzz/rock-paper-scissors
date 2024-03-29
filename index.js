const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

//Create function for playing one round of game

function playRound(playerSelection) {

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

function playGame(playerSelection) {
    console.log (playRound(playerSelection));
    console.log("The score is now " + playerScore + " for player and " + computerScore + " for the computer");
    gameEnd();
}

function gameEnd() {
    if (computerScore > playerScore) {
        console.log("The computer wins!")
    } else if (playerScore > computerScore) {
        console.log("You win!")
    } else console.log("Game is a tie!")
    }

//Add event listener to buttons that:
//Calls playRound function with correct playerSelection when clicked

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

rockBtn.addEventListener("click", () => {
    playGame("rock");
});
paperBtn.addEventListener("click", () => {
    playGame("paper");
});
scissorsBtn.addEventListener("click", () => {
    playGame("scissors");
});