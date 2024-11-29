function suit(player) {
  const choices = ["batu", "gunting", "kertas"];
  const computer = choices[Math.floor(Math.random() * 3)];

  switch (player) {
    case "batu":
      switch (computer) {
        case "batu":
          return "DRAW";
        case "gunting":
          return "WIN";
        default:
          return "LOSE";
      }
    case "gunting":
      switch (computer) {
        case "gunting":
          return "DRAW";
        case "kertas":
          return "WIN";
        default:
          return "LOSE";
      }
    default:
      switch (computer) {
        case "kertas":
          return "DRAW";
        case "batu":
          return "WIN";
        default:
          return "LOSE";
      }
  }
}

console.log(suit("batu"));
