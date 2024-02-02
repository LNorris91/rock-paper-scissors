//Create a function called getComputerChoice that will randomly return either rock, paper, or scissors
const computerChoice = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return computerChoice [(Math.floor(Math.random() * 3))];
}
console.log(getComputerChoice())