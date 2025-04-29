  let choiseComputer = ""

function getComputerChoise() {

  let choise = Math.random();

  if (choise <= 0.3) {
    choiseComputer = "Rock";
    console.log(choise);
  }

  else if (choise => 0.3 && choise <= 0.6) {
    choiseComputer = "Paper";
    console.log(choise);
  }

  else {
    choiseComputer = "Scissors";
    console.log(choise);
  }

  return choiseComputer;
}