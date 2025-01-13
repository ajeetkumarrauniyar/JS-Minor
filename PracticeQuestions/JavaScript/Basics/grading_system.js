// Grading system based on score
let score = prompt("Enter your score");

if (score < 0) {
  alert("Please enter a valid score");
  console.log("Please enter a valid score");
} else if (score >= 90 && score <= 100) {
  alert("A grade");
  console.log("A grade");
} else if (score >= 80 && score <= 89) {
  alert("B grade");
  console.log("B grade");
} else if (score >= 70 && score <= 79) {
  alert("C grade");
  console.log("C grade");
} else if (score >= 60 && score <= 69) {
  alert("D grade");
  console.log("D grade");
} else if (score >= 50 && score <= 59) {
  alert("E grade");
  console.log("E grade");
} else if (score >= 0 && score <= 49) {
  alert("Fail");
  console.log("Fail");
}
