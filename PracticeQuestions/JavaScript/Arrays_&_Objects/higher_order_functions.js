// Working with arrays and higher-order functions
let arr = [1, 2, 3, 4, 5];

// Calculate square of each element
let calcSquare = (val) => {
  console.log(val * val);
};
arr.forEach(calcSquare);

// Filter even numbers
let evenArray = arr.filter((val) => {
  return val % 2 === 0;
});
console.log(evenArray);

// Calculate sum of all elements
const output = arr.reduce((res, curr) => {
  return res + curr;
});
console.log(output);

// Print the largest number in the array
const largestNumber = arr.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log(largestNumber);

// Example with marks
let marks = [33, 55, 77, 99, 87, 92];
const highestMarks = marks.filter((val) => {
  return val > 90;
});
console.log(highestMarks);
