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
  const choice = prompt("Enter your choice (rock, paper or scissors): ");
  if (choice == "rock" || choice == "paper" || choice == "scissors") {
    return choice;
  }
  alert("Wrong Choice!!");
  return getHumanChoice();
};
