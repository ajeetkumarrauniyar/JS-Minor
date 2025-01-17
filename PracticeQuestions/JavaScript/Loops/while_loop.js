// Write a while loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named sum.
let sum = 0;
let i = 1;

while (i <= 5) {
  sum = sum + i;
  i++;
}
// console.log(sum);

// Write a while loop to calculate the factorial of a number (e.g., 5! = 120) and store the result in a variable factorial.
let factorial = 1;
let j = 5;

while (j > 0) {
  factorial = factorial * j;
  j--;
}
// console.log(factorial);

// Write a while loop that appends the squares of numbers from 1 to 10 into an array named squares.
let squares = [];
let k = 1;

while (k <= 10) {
  squares.push(k * k);
  k++;
}
// console.log(squares);

// Write a while loop that finds the sum of even numbers between 1 and 20 and stores it in sumOfEvens.
let sumOfEvens = 0;
let m = 1;

while (m <= 20) {
  if (m % 2 === 0) {
    sumOfEvens = sumOfEvens + m;
  }
  //   sumOfEvens += m % 2;
  m++;
}
// console.log(sumOfEvens);

// Write a while loop to reverse the string "hello" and store the reversed string in reversedStr.
let salutation = "hello";
let reversedStr = "";
let index = salutation.length - 1;

while (index >= 0) {
  reversedStr = reversedStr + salutation[index];
  index--;
}

// console.log(reversedStr);

// Write a while loop that counts how many numbers between 1 and 50 are divisible by both 3 and 5 and store the count in divisibleCount.
let numbers = 1;
let divisibleCount = 0;

while (numbers <= 50) {
  if (numbers % 3 == 0 && numbers % 5 == 0) {
    // console.log(numbers)
    divisibleCount++;
  }
  numbers++;
}
// console.log(divisibleCount);

// Write a while loop that counts down from 5 to 1 and stores the numbers in an array named countdown.

let counts = 5;
let countdown = [];

while (counts >= 1) {
    countdown = countdown + counts
    counts--
}
// console.log(countdown);

