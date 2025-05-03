let playerScore = 0;  // value for player score
let computerScore = 0; // value for computer score

function getComputerChoice() {      //returns a string that later will be used as computer's choice
  let num1 = Math.random()
  let computerChoice = ""

  if(num1 <= 0.3) {
    computerChoice = "Rock";
  }

  else if(num1 > 0.3 && num1 <= 0.6) {
    computerChoice = "Paper";
  }

  else {
    computerChoice = "Scissors";
  }
  return computerChoice;
} 

function getHumanChoice() {     //returns a string to be used as player's choice
  let humanChoice = prompt("Type in your choice!");
  humanChoice = humanChoice.slice(0,1).toUpperCase() + humanChoice.slice(1).toLowerCase();
  return humanChoice;
}

function playRound(getHumanChoice, getComputerChoice) {
  console.log(`You chose ${getHumanChoice}, Computer chose ${getComputerChoice}`);

  if((getHumanChoice == 'Paper' && getComputerChoice == 'Rock') || (getHumanChoice == 'Rock' && getComputerChoice == 'Scissors') || (getHumanChoice == 'Scissors' && getComputerChoice == 'Paper')) {

    ++playerScore;
    console.log("You Win!");
    console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
  }

  else if((getHumanChoice == 'Paper' && getComputerChoice == 'Paper') || (getHumanChoice == 'Rock' && getComputerChoice == 'Rock') || (getHumanChoice == 'Scissors' && getComputerChoice == 'Scissors')) {
    console.log("It's a tie!");
    console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
  }

  else if((getHumanChoice == 'Paper' && getComputerChoice == 'Scissors') || (getHumanChoice == 'Rock' && getComputerChoice == 'Paper') || (getHumanChoice == 'Scissors' && getComputerChoice == 'Rock')) {
    console.log("You Lose!");
    ++computerScore;
    console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
  }

}

function playGame() {
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  if(playerScore > computerScore) {
    console.log(`You won the game by ${playerScore} - ${computerScore}!`);
  }

  else if(playerScore < computerScore) {
    console.log(`You lost the game by ${playerScore} - ${computerScore}...`);
  }

  else if( playerScore === computerScore) {
    console.log("Game is a tie.");
  }
}

