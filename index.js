//Create function for computer to generate rock, paper or scissors randomly

let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random()*choices.length);
    return randomChoice;
}

console.log(getComputerChoice());

//Create function for user input to choose rock, paper or scissors

function getUserChoice() {
    let userChoice = prompt("Choose rock, paper or scissors:");
    return userChoice.toLowerCase();
}

console.log(getUserChoice());