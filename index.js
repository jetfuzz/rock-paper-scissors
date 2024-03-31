const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let userChoice = "";

function playRound(playerSelection) {

    let computerSelection = choices[Math.floor(Math.random()*3)];

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
    roundResult.textContent = (playRound(playerSelection)) + " The score is now " + playerScore + " for player and " + computerScore + " for the computer";
    if (playerScore === 5 || computerScore === 5) {
        return gameEnd();
    }
}

function gameEnd() {
    document.getElementById("rockBtn").disabled = true;
    document.getElementById("paperBtn").disabled = true;
    document.getElementById("scissorsBtn").disabled = true;
    if (computerScore > playerScore) {
        gameResult.textContent = "Game Over! Computer wins!"
    } else if (playerScore > computerScore) {
        gameResult.textContent = "Game Over! You win!"
    } else gameResult.textContent = "Game Over! It's a tie!"
    }

//Add event listener to buttons that calls playRound function with correct playerSelection when clicked

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

rockBtn.addEventListener("click", () => {
    userChoice = "rock";
    playGame(userChoice);
});
paperBtn.addEventListener("click", () => {
    userChoice = "paper";
    playGame(userChoice);
});
scissorsBtn.addEventListener("click", () => {
    userChoice = "scissors";
    playGame(userChoice);
});

//Add a div for displaying results

const roundResult = document.createElement("div");
const gameResult = document.createElement("div");

container.appendChild(roundResult);
container.appendChild(gameResult);