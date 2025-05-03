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

