//Create a function called getComputerChoice that will randomly return either rock, paper, or scissors
let computerChoice = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return computerChoice [(Math.floor(Math.random() * 3))];
}

let getUserChoice = prompt('Make your selection!', 'Rock, Paper, or Scissors?')