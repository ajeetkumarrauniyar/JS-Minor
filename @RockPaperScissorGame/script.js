const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");

const name = document.getElementById("name");
const message = document.getElementById("won-msg");

let playerName = prompt("Please enter your name");
name.innerHTML = playerName;


rock.addEventListener("click", (e) => {
  console.log("Rock clicked");
});

paper.addEventListener("click", (e) => {
  console.log("Paper clicked");
});

scissor.addEventListener("click", (e) => {
  console.log("Scissor clicked");
});

playerScore = 0;
computerScore = 0;

// playerScore.innerHTML = 1;

// computerScore.innerHTML = 3;

// message.innerHTML = "Player Score: " + playerScore.innerHTML;
