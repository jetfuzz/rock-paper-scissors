//Create function for computer to generate rock, paper or scissors

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomChoice = choices[Math.floor(Math.random()*3)];
    return "Computer plays " + randomChoice;
}

console.log(getComputerChoice());

//Create function for user input

function getUserChoice() {
    let userChoice = prompt("Choose rock, paper or scissors:");
    return userChoice.toLowerCase();
}

console.log(getUserChoice());