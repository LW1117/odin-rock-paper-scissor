let humanScore = 0;
let computerScore = 0;

let playCount = 0;
let results = ``;
let scoreText = ``;

playRound = (humanChoice, computerChoice) => {
  if (humanChoice == computerChoice) {
    return `Its a draw!`;
  }
  if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore += 1;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  }
  if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore += 1;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  }
  if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore += 1;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  }
  computerScore += 1;
  return `You lose! ${computerChoice} beats ${humanChoice}`;
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

const buttons = document.querySelectorAll(".button");
const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");

scoreDiv.textContent = scoreText;

playGame = (choice) => {
  results = ``;
  results = playRound(choice, getComputerChoice());
  resultsDiv.textContent = results;
  scoreText = `\nCurrent Score\nPlayer: ${humanScore}\nComputer: ${computerScore}\n`;
  playCount += 1;
  if (playCount > 5) {
    if (humanScore > computerScore) {
      scoreText += `You WIN!!`;
    } else {
      scoreText += `Yos LOST!!`;
    }
    alert(scoreText);
    playCount = 0;
    humanScore = 0;
    computerScore = 0;
  }
  scoreText = `\nCurrent Score\nPlayer: ${humanScore}\nComputer: ${computerScore}\n`;
  scoreDiv.textContent = scoreText;
};

buttons.forEach((button) => {
  button.addEventListener("click", () => playGame(button.id));
});
