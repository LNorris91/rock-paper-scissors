
let userScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector("#result");
const yourScore = document.querySelector("#yourScore");
const theirScore = document.querySelector("#theirScore");
const finalResult = document.querySelector("#finalResult");

result.style.cssText = "padding-top: 10px; padding-bottom: 10px";
theirScore.style.cssText = "padding-bottom: 10px";

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
                yourScore.textContent = `Your Score: ${userScore}`; 
                theirScore.textContent = `That other Bastard's Score: ${computerScore}`
                result.textContent = `You beat his ass! You picked ${userSelection}, which destroys their ${computerSelection}`;
        } else if (userSelection === "rock" && computerSelection === "paper" ||
            userSelection === "paper" && computerSelection === "scissors" ||
            userSelection === "scissors" && computerSelection === "rock") { 
                computerScore++;
                yourScore.textContent = `Your Score: ${userScore}`; 
                theirScore.textContent = `That other Bastard's Score: ${computerScore}`;
                result.textContent = `You got knocked down kid, but you can get back up. Computer picked ${computerSelection}, which beats your ${userSelection}`;
        } else if (userSelection === computerSelection){
                yourScore.textContent = `Your Score: ${userScore}`; 
                theirScore.textContent = `That other Bastard's Score: ${computerScore}`;
                result.textContent = `*Cling!* That's the sound of you clashing in a Tie because you both chose ${userSelection}!`;
        } 

        if (userScore < 5 && computerScore < 5) {
            finalResult.textContent = ""
        } else if (userScore === 5) {
            finalResult.textContent = `Smoked that bitch! You killed 'em ${userScore} times!`;
            userScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            finalResult.textContent = `Damn! you lost, son. Computer beat you ${computerScore} times.`;
            userScore = 0;
            computerScore = 0;
        } 
    }