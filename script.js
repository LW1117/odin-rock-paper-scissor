aiChoice = () => {
  let randomChoice = Math.random();
  if (randomChoice >= 0 && randomChoice < 1 / 3) {
    return "Rock";
  } else if (randomChoice >= 1 / 3 && randomChoice < 2 / 3) {
    return "Paper";
  } else {
    return "Scissor";
  }
};
