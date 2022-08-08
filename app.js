const choices = ["fire", "water", "grass"];
let winners = [];
function game() {
  //plays 5 rounds
  //console based
 for (let i = 1; i <= 5; i++){
    playRound(i);
 }
 document.querySelector("button").textContent = "Play new game";
 logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection,computerSelection);
  winners.push(winner);
  logRound(playerSelection,computerSelection,winner,round)
}

function playerChoice() {
  //get input from player
  let input = prompt("Type Fire, Grass or Water ");
  while (input == null) {
     input = prompt("Type Fire, Grass or Water ");
  }
  input = input.toLowerCase();
  let check = validateInput(input)
  while (check == false) {
   input = prompt("Type Fire, Grass or Water with correct spelling. Capitalization does not matter."); 
    input=input.toLowerCase(); 
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  //random computer input
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice)  
}

function checkWinner(choicePlayer,choiceComputer){
    if(choicePlayer === choiceComputer) {
        return ("tie");
    } else if (
        (choicePlayer === "fire" && choiceComputer === "grass") ||
     (choicePlayer === "grass" && choiceComputer === "water") ||
      (choicePlayer === "water" && choiceComputer === "fire")
      ) {
    
    return ("Player");
} else 
{
    return ("Computer");
}
} 

function logWins(){
    let playerWins = winners.filter(item => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "tie").length;
    console.log("Results :");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("ties:", ties);
} 

function logRound(playerChoice,computerChoice,winner,round){
    console.log("Round:", round)
    console.log("Player Chose", playerChoice);
    console.log("Computer Chose", computerChoice);
    console.log(winner, 'Won')
    console.log("-----------------------------------------------")

}


