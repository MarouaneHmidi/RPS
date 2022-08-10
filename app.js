const choices = ["fire", "water", "grass"];
let winners = [];
function resetGame() {
  winners = [];
  document.querySelector(".playerScore").textContent = "Score: 0";
  document.querySelector(".computerScore").textContent = "Score: 0";
  document.querySelector(".ties").textContent = "Ties: 0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".playerChoice").textContent = "";
  document.querySelector(".computerChoice").textContent = "";
  document.querySelector(".reset").style.display = "none";
}

function startGame() {
  let imgs = document.querySelectorAll("img");
  imgs.forEach((img) =>
  img.addEventListener(("click"), () =>{
    if (img.id) {
      playRound(img.id);
    } 
  })
  );

}

function playRound(playerChoice) {
  let wins = checkWins();
  if (wins >= 5){
    return;
  }
  const computerChoice = computerSelect();
  const winner = checkWinner(playerChoice,computerChoice);
  winners.push(winner);
  tallyWins();
  displayRound(playerChoice,computerChoice,winner);
  wins = checkWins();
  if (wins == 5){
    displayEnd()
  }
}

function displayEnd(){
    let playerWins = winners.filter(item => item == "Player").length;
    if (playerWins == 5){
      document.querySelector(".winner").textContent =
       " You won 5 games";
    } else {
      document.querySelector(".winner").textContent =
       " Computer won 5 games"
    }
    document.querySelector(".reset").style.display = "flex";

}

function displayRound(playerChoice, computerChoice, winner){
    document.querySelector(".playerChoice").textContent = `You chose ${
      playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    document.querySelector(".computerChoice").textContent = `The Computer chose ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
  if (winner == "Player") {
    document.querySelector(".winner").textContent = "You won the round";
  } else if (winner == "Computer") {
    document.querySelector(".winner").textContent = "The computer won the round";
  } else {
    document.querySelector(".winner").textContent = "The round was a tie";
  }
}

function tallyWins(){
    const pWinCount = winners.filter(item => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "tie").length;
    document.querySelector(".playerScore").textContent = `Score: ${pWinCount}`;
    document.querySelector(".computerScore").textContent = `Score: ${cWinCount}`;
    document.querySelector(".ties").textContent = `Score: ${ties}`;
} 

function computerSelect() {
  //random computer input
  const choice = choices[Math.floor(Math.random() * choices.length)];
  document.querySelector(`.${choice}`).classList.add("active");

  setTimeout(() => {
    document.querySelector(`.${choice}`).classList.remove("active");
  }, 700);

  return choice;
}

function checkWins(){
    const pWinCount = winners.filter(item => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    return Math.max(pWinCount,cWinCount);

}

function checkWinner(choice1,choice2){
    if(choice1 === choice2) {
        return ("tie");
    } else if (
        (choice1 === "fire" && choice2 === "grass") ||
     (choice1 === "grass" && choice2 === "water") ||
      (choice1 === "water" && choice2 === "fire")
      ) {
    
    return ("Player");
} else 
{
    return ("Computer");
}
} 

function setWins(){
    const pWinCount = winners.filter(item => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
} 

startGame();

