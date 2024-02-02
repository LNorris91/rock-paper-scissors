//create variables to house the user and computer's scores
let userScore = 0;
let computerScore = 0;

//create a function to play a game consisting of 5 rounds that also keeps track of scores
function playGame() {

     //Create a function that will randomly return either rock, paper, or scissors
    let computerChoice = ['rock', 'paper', 'scissors'];
    function getComputerChoice() {
        return computerChoice [(Math.floor(Math.random() * 3))];
    }
    //Create a case insensitive prompt to get users answer
    let userSelection = prompt("Make your selection!", "Rock, Paper, or Scissors?").toLowerCase();
    let computerSelection = getComputerChoice();
    
    //Create a function that will call both user and computer choices and return results of that round
    function playRound(userSelection, computerSelection) {
        if (userSelection === "rock" && computerSelection === "scissors" ||
            userSelection === "paper" && computerSelection === "rock" ||
            userSelection === "scissors" && computerSelection === "paper") { userScore++;
                return`You beat his ass! You picked ${userSelection}, which destroys ${computerSelection}`;
        } else if (userSelection === "rock" && computerSelection === "paper" ||
                userSelection === "paper" && computerSelection === "scissors" ||
                userSelection === "scissors" && computerSelection === "rock") { computerScore++;
                return`You got knocked down kid, but you can get back up. Computer picked ${computerSelection}, which beats ${userSelection}`;
        } else if (userSelection === computerSelection){
                return`*Cling!* That's the sound of you clashing in a Tie because you both chose ${userSelection}!`;
        } else return`You must've done something wrong, you fool! ${userSelection} is not valid! Try again!`;
    }
            console.log(playRound(userSelection, computerSelection))
}
playGame()
playGame()
playGame()
playGame()
playGame()

//Create a function that displays the final match results
function matchResults() {
    if (userScore > computerScore) {
        return`Smoked that bitch! You killed 'em ${userScore} times!`;
    } else if (userScore < computerScore) {
        return `Damn! you lost, son. Computer beat you ${computerScore} times.`;
    } else if (userScore == computerScore) {
        return `You both live to fight another day. you tied and both scored ${userScore}`;
    }
}
console.log(matchResults())
