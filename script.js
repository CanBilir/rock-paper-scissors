let humanScore = 0;
let computerScore = 0;
let humanSelection = " ";
let computerSelection = " ";

function getComputerChoise() {
  let num1 = Math.random();

  if(num1 < 0.3) {
    console.log(num1);
    return computerSelection = "Rock";

  }

  else if(num1 > 0.3 && num1 < 0.6) {
    console.log(num1);
    return computerSelection = "Paper";
  } 

  else {
    console.log(num1);
    return computerSelection = "Scissors";
  }
}

function getHumanChoise() {
  humanSelection = prompt("Type in your choise!");
  return humanSelection;
}
/*===========================================
            PLAY ROUND START
============================================= */
function playRound(humanChoise, computerChoise) {
  getComputerChoise();
  getHumanChoise();

  //Player chooses paper.
  if(humanChoise.toLowerCase() === "paper" && computerChoise ===  "Rock") {
    ++humanScore;
    alert(`You chose Paper and computer chose Rock, you WIN!\nYour Score: ${humanScore} Computer Score: ${computerScore}`);
    
  }

  else if(humanChoise.toLowerCase() === "paper" && computerChoise ===  "Paper") {
    alert(`It's a Tie!\nYour Score: ${humanScore} Computer Score: ${computerScore}`);
  }

  else if(humanChoise.toLowerCase() === "paper" && computerChoise ===  "Scissors") {
    ++computerScore;
    alert(`You chose Paper and computer chose Scissors, you lose:(!\nYour Score: ${humanScore} Computer Score: ${computerScore}`);
  }
  //Player chooses rock.
  if(humanChoise.toLowerCase() === "rock" && computerChoise ===  "Rock") {
    alert(`It's a Tie!\nYour Score: ${humanScore} Computer Score: ${computerScore}`);
    
  }

  else if(humanChoise.toLowerCase() === "rock" && computerChoise ===  "Paper") {
    ++computerScore;
    alert(`You chose Rock and computer chose Paper, you lose:(\nYour Score: ${humanScore} Computer Score: ${computerScore}`);
  }

  else if(humanChoise.toLowerCase() === "rock" && computerChoise ===  "Scissors") {
    ++humanScore;
    alert(`You chose Rock and computer chose Scissors, you WIN!:(!\nYour Score: ${humanScore} Computer Score: ${computerScore}`);
  }
  //Player Chooses Scissors.
  if(humanChoise.toLowerCase() === "scissors" && computerChoise ===  "Rock") {
    ++computerScore;
    alert(`You chose Scissors and computer chose Rock, you lose:(\nYour Score: ${humanScore} Computer Score: ${computerScore}`);
    
  }

  else if(humanChoise.toLowerCase() === "scissors" && computerChoise ===  "Paper") {
    ++humanScore;
    alert(`You chose Scissors and computer chose Paper, you WIN!\nYour Score: ${humanScore} Computer Score: ${computerScore}`);
  }

  else if(humanChoise.toLowerCase() === "scissors" && computerChoise ===  "Scissors") {
    alert(`It's a tie!\nYour Score: ${humanScore} Computer Score: ${computerScore}`);
  }
}
/*===============================================
                  PLAY ROUND END
=================================================*/
