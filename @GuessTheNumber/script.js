let userInput = document.getElementById("number").value;
let submit = document.getElementById("submit");
let prevGuess = document.getElementById("prevGuess");
let guessRemaining = document.getElementById("guessRemaining");

const randomNumber = parseInt(Math.random() * 100 + 1);
