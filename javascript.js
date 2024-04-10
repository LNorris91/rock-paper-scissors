
let userScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector("#result");
const yourScore = document.querySelector("#yourScore");
const theirScore = document.querySelector("#theirScore");
const finalResult = document.querySelector("#finalResult");

rockBtn.addEventListener('click', (e) => {
    userSelection = e.target.value;
    playGame()});
paperBtn.addEventListener('click', (e) => {
    userSelection = e.target.value;
    playGame()});
scissorsBtn.addEventListener('click', (e) => {
    userSelection = e.target.value;
    playGame()});

function getComputerChoice() {
    let computerChoices = ['rock', 'paper', 'scissors'];
    return computerChoices[(Math.floor(Math.random() * 3))];
}

function playGame() {
    let computerSelection = getComputerChoice();
    
        if (userSelection === "rock" && computerSelection === "scissors" ||
            userSelection === "paper" && computerSelection === "rock" ||
            userSelection === "scissors" && computerSelection === "paper") { 
                userScore++;
                yourScore.textContent = `${userScore}`; 
                theirScore.textContent = `${computerScore}`
                result.textContent = `You win that one!  You picked ${userSelection}, which destroys their ${computerSelection}`;
        } else if (userSelection === "rock" && computerSelection === "paper" ||
            userSelection === "paper" && computerSelection === "scissors" ||
            userSelection === "scissors" && computerSelection === "rock") { 
                computerScore++;
                yourScore.textContent = `${userScore}`; 
                theirScore.textContent = `${computerScore}`;
                result.textContent = `Lost that round.  the Program picked ${computerSelection}, which beats your ${userSelection}`;
        } else if (userSelection === computerSelection){
                yourScore.textContent = `${userScore}`; 
                theirScore.textContent = `${computerScore}`;
                result.textContent = `TIE!  You both chose ${userSelection}!`;
        } 

        if (userScore < 5 && computerScore < 5) {
            finalResult.textContent = ""
        } else if (userScore === 5) {
            finalResult.textContent = `YOU WIN!`;
            userScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            finalResult.textContent = `You lose`;
            userScore = 0;
            computerScore = 0;
        } 
    }