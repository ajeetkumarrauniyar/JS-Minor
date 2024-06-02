const cells = document.querySelectorAll(".cell");
const resetButton = document.querySelector("#reset-button");
const winner = document.querySelector("#winner");

let turn = true; // turn of playerX or player0

const winningsPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (turn) {
      // PlayerX
      cell.innerText = "X";
      turn = false;
      // console.log("Turn X ", turn);
    } else {
      cell.innerText = "0";
      turn = true;
      // console.log("Turn 0 ", turn);
    }
    cell.disabled = true; // Disable the clicked cell (FYI: // Disabled property only applies to form input elements like <input>, <button>, <select>, etc. It does not work on regular HTML elements like <div> or <span>.)

    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winningsPatterns) {
    let position1value = cells[pattern[0]].innerText;
    let position2value = cells[pattern[1]].innerText;
    let position3value = cells[pattern[2]].innerText;

    if (position1value != "" && position2value != "" && position3value != "") {
      if (
        position1value === position2value &&
        position2value === position3value
      ) {
        winner.textContent = `Congratulations! Winner is ${position1value}`;
      }
    }
  }
};

const resetGame = () => {
  resetButton.addEventListener("click", (e) => {
    console.log(e);
    console.log("Resetting game");
    turn = true;
    cells.textContent = "";
  });
};
