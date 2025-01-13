// Guess the number game

let num = 56;
let userInput = prompt("Guess the number: ");

while (parseInt(userInput) !== num) {
  userInput = prompt("Sorry! Please try again.");
}

alert("Wahoo! You have successfully guessed the number", num);
