//Create function for computer to generate rock, paper or scissors randomly

let choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random()*choices.length)
    return randomChoice
}

console.log(getComputerChoice())