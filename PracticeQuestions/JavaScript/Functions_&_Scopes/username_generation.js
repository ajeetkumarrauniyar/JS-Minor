// Generating the username based on the user input

let userInput = prompt("Please enter your full name").toLowerCase();
let username = userInput.replace(/\s+/g, "");

alert(`@${username}${username.length}`);
