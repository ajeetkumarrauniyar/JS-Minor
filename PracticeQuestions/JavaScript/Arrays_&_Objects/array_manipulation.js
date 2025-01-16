// Array manipulation

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.shift();
companies.splice(2, 1, "Ola");
companies.push("Amazon");
// console.log(companies);

// ### Accessing Elements

// 1. Declare an array named fruits that contains the strings "apple", "banana", and "cherry".Access the second element of the array and store it in a variable named favoriteFruit.

const fruits = ["apple", "banana", "cherry"];
const favoriteFruit = fruits[1];
// console.log(favoriteFruit);

// 2. Create an array named colors with the strings "red", "blue", and "green". Access the first element and store it in a variable named primaryColor.
let colors = ["red", "blue", "green"];
const primaryColor = colors[0];
// console.log(primaryColor);

// 3. Declare an array named countries containing "USA", "Canada", and "Mexico". Access the last element of the array and store it in a variable named lastCountry.
let countries = ["USA", "Canada", "Mexico"];
const lastCountry = countries[2];
// console.log(lastCountry);

// ### Modifying Elements
// 1. You have an array named vegetables containing "carrot", "broccoli", and "spinach". Change the first element of the array to "kale".
let vegetables = ["carrot", "broccoli", "spinach"];
vegetables[0] = "kale";
// console.log(vegetables);

// 2. Declare an array named sports with the strings "soccer", "basketball", and "tennis". Change the second element to "baseball".
const sports = ["soccer", "basketball", "tennis"];
sports[1] = "baseball";
// console.log(sports);

// 3. Create an array named movies containing "Inception", "The Matrix", and "Interstellar". Change the last element to "Dunkirk".
const movies = ["Inception", "The Matrix", "Interstellar"];
movies[2] = "Dunkirk";
// console.log(movies);

// ###  Adding Elements
// 1. Declare an array named hobbies containing "reading" and "traveling". Add "cooking" to the array using the push method.
const hobbies = ["reading", "traveling"];
hobbies.push("cooking");
// console.log(hobbies);

// 2. Create an array named languages with the strings "English" and "Spanish". Add "French" to the array using the push method.
const languages = ["English", "Spanish"];
languages.push("French");
// console.log(languages);

// 3. You have an array named desserts containing "cake" and "ice cream". Add "cookies" to the array using the push method.
const desserts = ["cake", "ice cream"];
desserts.push("cookies");
// console.log(desserts);

// ### Removing Elements
// 1. You have an array named snacks containing "chips", "cookies", and "candy". Remove the last element of the array using the pop method and store it in a variable named lastSnack.
const snacks = ["chips", "cookies", "candy"];
const lastSnack = snacks.pop();
// console.log(snacks);
// console.log(lastSnack);

// 2. Declare an array named citiesVisited with the strings "Paris", "Berlin", and "Tokyo". Remove the last element using the pop method and store it in a variable named lastCity.
const citiesVisited = ["Paris", "Berlin", "Tokya"];
const lastCity = citiesVisited.pop();
// console.log(citiesVisited);
// console.log(lastCity);

// 3. Create an array named toDoList containing "laundry", "groceries", and "cleaning". Remove the last element using the pop method and store it in a variable named lastTask.
const toDoList = ["laundry", "groceries", "cleaning"];
const lastTask = toDoList.pop();
// console.log(toDoList);
// console.log(lastTask);

// ### Merging Arrays
// 1. You have two arrays: fruits containing "apple" and "banana", and vegetables containing "carrot" and "broccoli". Merge these two arrays into a new array named foodItems.
const fruit = ["apple", "banana"];
const vegetable = ["carrot", "broccoli"];
const foodItems = fruit.concat(vegetable);
// console.log(foodItems);

// 2. You have an array named firstNames containing "John" and "Jane", and another array named lastNames containing "Doe" and "Smith". Merge these two arrays into a new array named fullNames.
const firstNames = ["John", "Jane"];
const lastNames = ["Doe", "Smith"];
// const fullNames = firstNames.concat(lastNames);
// const fullNames = firstNames[0].concat(" ", lastNames[0]);
console.log(fullNames);
