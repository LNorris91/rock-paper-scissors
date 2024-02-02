//Create a function that will randomly return either rock, paper, or scissors
let computerChoice = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    return computerChoice [(Math.floor(Math.random() * 3))];
}
//Create a case insensitive prompt to get users answer
let userSelection = prompt("Make your selection!", "Rock, Paper, or Scissors?").toLowerCase();
let computerSelection = getComputerChoice();

//create variables to house the user and computers scores
let userScore = 0;
let computerScore = 0;

//Create a function that will call both user and computer choices and return results of that round
function playRound(userSelection, computerSelection) {
    if (userSelection === "rock" && computerSelection === "scissors" ||
        userSelection === "paper" && computerSelection === "rock" ||
        userSelection === "scissors" && computerSelection === "paper") { userScore++;
            return`You beat his ass! ${userSelection} destroys ${computerSelection}`;
    } else if (userSelection === "rock" && computerSelection === "paper" ||
            userSelection === "paper" && computerSelection === "scissors" ||
            userSelection === "scissors" && computerSelection === "rock") { computerScore++;
            return`You got knocked down kid, but you can get back up. ${computerSelection} beats ${userSelection}`;
    } else if (userSelection === computerSelection){
            return`*Cling!* That's the sound of you clashing in a Tie because ${userSelection} and ${computerSelection} are the same!`;
    } else return`You must've done something wrong, you fool! ${userSelection} is not valid! Try again!`;
}
console.log(playRound(userSelection, computerSelection))
console.log(userScore, computerScore)