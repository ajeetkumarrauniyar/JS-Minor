// Multiple of any number
// const userInput = prompt("Enter a number:");

// if (userInput % 5 === 0) {
//   console.log(userInput, "is a multiple of 5");
// } else {
//     console.log(userInput, "is NOT s multiple of 5");
// }

//================================================================

// let score = prompt("Enter your score");

// if (score < 0) {
//   alert("Please enter a valid score");
//   console.log("Please enter a valid score");
// } else if (score >= 90 && score <= 100) {
//   alert("A grade");
//   console.log("A grade");
// } else if (score >= 80 && score <= 89) {
//   alert("B grade");
//   console.log("B grade");
// } else if (score >= 70 && score <= 79) {
//   alert("C grade");
//   console.log("C grade");
// } else if (score >= 60 && score <= 69) {
//   alert("D grade");
//   console.log("D grade");
// } else if (score >= 50 && score <= 59) {
//   alert("E grade");
//   console.log("E grade");
// } else if (score >= 0 && score <= 49) {
//   alert("Fail");
//   console.log("Fail");
// }

//================================================================

// for (let i = 1; i <= 10000; i++) {
//   console.log("Hello Ajeet");
// }
// console.log("Good work done!");

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum = sum + i;
// }
// console.log("Sum: " + sum);

// Print all even numbers fro 1 to 100
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log("i", i);
//   }
// }

// Guess the number game
// let num = 56;

// let userInput = prompt("Guess the number: ");

// while (parseInt(userInput) !== num) {
//   userInput = prompt("Sorry! Please try again.");
// }

// alert("Wahoo! You have successfully guessed the number", num);

// Generating the username based on the user input
// let userInput = prompt("Please enter your full name").toLowerCase();

// let username = userInput.replace(/\s+/g, "");

// alert(`@${username}${username.length}`);

/*================================================================
ARRAYS
================================================================*/

// Find average of the given array (here, avg. marks of the class)

// const marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for (let mark of marks) {
//   sum = sum + mark;
// }

// let average = sum / marks.length;

// console.log("Average", average);

// const prices = [250, 645, 300, 900, 50];

// let i = 0; // Start from the beginning (O)
// for (let val of prices) {
//   let offer = val / 10;
//   let discountedPrice = val - offer;
//   prices[i] = discountedPrice
//   console.log(
//     `So discounted price is ${prices[i]},`
//   );
//   console.log(prices);
//   i++;
// }

// 2nd method:

// for (let i = 0; i < prices.length; i++) {
//   let offer = prices[i] / 10;
//   prices[i] -= offer;
// }
// console.log(prices);

// prices.push(99);
// prices.push(59);

// console.log(prices);

// prices.pop();
// prices.pop();

// console.log(prices);

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// companies.shift();

// companies.splice(2, 1, "Ola");

// companies.push("Amazon");
// console.log(companies);

/*================================================================
Functions & Methods
================================================================*/

// 1. String
// 2. Break down in letters;
// 3. Compare letters with a,e,i,o,u
// 4. merge the finally separated letters
// 5. increment the letters count
// 6. return the count

// function countVowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     let letters = str[i];
//     if (
//       letters == "a" ||
//       letters == "e" ||
//       letters == "i" ||
//       letters == "o" ||
//       letters == "u"
//     ) {
//       count++;
//     }
//   }
//   return console.log(count);
// }

// const countVowels = (str) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     let letters = str[i];
//     if (
//       letters == "a" ||
//       letters == "e" ||
//       letters == "i" ||
//       letters == "o" ||
//       letters == "u"
//     ) {
//       count++;
//     }
//   }
//   return console.log(count);
// };

// countVowels("Hitesh Chaudhary");

// let arr = [1, 2, 3, 4, 5];

// let calcSquare = (val) => {
//   console.log(val * val);
// };

// arr.forEach(calcSquare);

// let evenArray = arr.filter((val) => {
//   return val % 2 === 0;

// });

// console.log(evenArray);

// const output = arr.reduce((res, curr) => {
//   return res + curr;
// });

// console.log(output);

// print the largest number in the array
// const output = arr.reduce((prev, curr) => {
//   return prev > curr ? prev : curr;
// });

// console.log(output);

// let marks = [33, 55, 77, 99, 87, 92];

// const highestMarks = marks.filter((val) => {
//   return val > 90;
// });

// console.log(highestMarks);

// let userInput = prompt("Enter the number");

// let newArray = [];

// for (let i = 1; i <= userInput; i++) {
//   newArray[i - 1] = i;
// }

// const sumOfArray = newArray.reduce((prev, curr) => {
//   return prev + curr;
// });

// console.log(sumOfArray);

// const factorials = newArray.reduce((prev, curr) => {
//   return prev * curr;
// });

// console.log(factorials);
/*================================================================
DOM 
================================================================*/
// let body = document.querySelector("body");
// let button = document.createElement("button");

// function dynamicBtn() {
//   button.innerText = "Click Me";
//   button.style.backgroundColor = "red";
//   button.style.color = "white";
//   body.appendChild(button);
//   button.addEventListener("click", () => {
//     console.log("Button clicked");
//   });
// }

// dynamicBtn();

/*================================================================
Events 
================================================================*/
