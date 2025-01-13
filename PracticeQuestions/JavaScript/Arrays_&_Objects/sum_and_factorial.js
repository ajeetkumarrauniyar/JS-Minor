// Generate an array and calculate sum and factorial

let userInput = prompt("Enter the number");

let newArray = [];

for (let i = 1; i <= userInput; i++) {
  newArray[i - 1] = i;
}

const sumOfArray = newArray.reduce((prev, curr) => {
  return prev + curr;
});

console.log(sumOfArray);

const factorials = newArray.reduce((prev, curr) => {
  return prev * curr;
});

console.log(factorials);
