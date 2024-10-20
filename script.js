let humanScore = 0;
let computerScore = 0;

playGame = () => {
  for (let i = 0; i < 5; i += 1) {
    console.log("----------------\n");
    console.log("----------------\n");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Current Score\n");
    console.log("----------------\n");
    console.log(`Player: ${humanScore}\n`);
    console.log(`Computer: ${computerScore}\n`);
  }
  if (humanScore > computerScore) alert("You WIN!!!");
  else alert("You LOST!!!");
};

playRound = (humanChoice, computerChoice) => {
  if (humanChoice == computerChoice) {
    console.log(`Its a draw!`);
    return 0;
  }
  if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore += 1;
    return 0;
  }
  if (humanChoice == "paper" && computerChoice == "rock") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore += 1;
    return 0;
  }
  if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore += 1;
    return 0;
  }
  console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  computerScore += 1;
  return 0;
};

getComputerChoice = () => {
  let randomChoice = Math.random();
  if (randomChoice >= 0 && randomChoice < 1 / 3) {
    return "rock";
  } else if (randomChoice >= 1 / 3 && randomChoice < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
};

getHumanChoice = () => {
  let choice = prompt("Enter your choice (rock, paper or scissors): ");
  choice = choice.toLowerCase();
  if (choice == "rock" || choice == "paper" || choice == "scissors") {
    return choice;
  }
  alert("Wrong Choice!!");
  return getHumanChoice();
};

playGame();
