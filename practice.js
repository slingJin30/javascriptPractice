console.log("Hello, World!");

console.log("Hello, World!");

// Variables
const currency = "AUD";
let amount = 100;
var price = 50;
sold = 8;
console.log(currency, amount, price, sold);
/* 
Side note: variable keyword (let) | variable name (amount) | assignment operator (=) | variable value (100)
*/


// Functions
function number() {
  let a = 23;
  console.log(a);
}
number();

// Objects
let soda = new Object();
soda.name = "Candy Soda"; // the name of the brand of soda
// soda.name = "Strawberry Soda" // this will update the object
soda.price = 2.5; // this is the price of the soda
soda.stock = 200; // this is the stock value before
soda.sold = 32; // amount of sodas sold
soda.amount = 1; // this is the amount of soda a person is buying
soda.description =
  "Enjoy this wonderfully made soda now made in flavor of candy."; // soda description

soda.checkStock = function () {
  return this.stock - this.amount - this.sold;
};
soda.getName = function () {
  return this.name;
};

soda.getDesc = function () {
  return this.description;
};

soda.getPrice = function () {
  return this.price.toFixed(2);
};

// using string interpolation so we have JavaScript within our string `example ${javascript}`
console.log(`Avaiable Sodas: ${soda.checkStock()}`);
console.log(
  `The name of the brand is ${soda.getName()} and the description of the soda is ${soda.getDesc()} and the price is ${soda.getPrice()}`
);

// if else statements
let b = 2; // change the value to another number to see what happens
if (b === 2) {
  console.log("b = 2");
} else {
  console.log("Unable to determine the value");
}

// dom manipulation
// function changeBG() {
// document.body.style.backgroundColor = "red" // will change the background color of the body in the html page
// }

// event listeners
// buttonVairable.addEventListener("click", function(){
//     document.body.style.backgroundColor = "green"
// })

// for loops
for (let i = 0; i < 10; i++) {
  console.log("Running loop");
}

// saving to the localStorage
// localStorage.setItem("key", "true")

// get details from the localStorage
// localStorage.getItem("key")

// Arrays (data storing)
let array = ['Apples', 'Banana', 'Cookie']
console.log(`your array length is ${array.length}`); // returns the length of the array (3)

// adding new items to the array
array.push("Pineapple", "Fish")
console.log(`now your array length is ${array.length}`)

// show items in the array
console.log(array)

// display a paricular item in the array
console.log(`Arrady Index 0 is ${array[0]}`) // we get the first item in the array getting index value which is the "Apples"

// Sort the array
console.log(`Now your sorted array is ${array.sort()}`)

//  The date object
let today = new Date()
let todayDate = today.getDate()
let year = today.getFullYear()
let month = today.getMonth() + 1
console.log(`your date is ${todayDate}/${month}/${year}`)

// Data Types (three main types)
let dataTypeNumber = 70 // Numeric data type
let dataTypeString = 'number' // string data type
let dataTypeBoolean = true // boolean data type

// Palindrome Checker function

function palindromeChecker(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
    }
console.log(palindromeChecker('rar'));

// search function (not case senstive) 

function searchCaseInsensitive(str, searchTerm) {
    return str.toLowerCase().includes(searchTerm.toLowerCase());
}
console.log(searchCaseInsensitive('hello world frank', 'Frank'));

// search function (case sensitive)

function searchCaseSensitive(str, searchTerm) {
    return str.includes(searchTerm);
}
console.log(searchCaseSensitive('hello world frank', 'Frank'));

// validate email

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
console.log(validateEmail('example@example.com'));

// get random number

function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
console.log(randomNumber());

// get random name

let names = ['Alex', 'Jimmy', 'Jordan'];
console.log(names[Math.floor(Math.random() * names.length)]);

// get random uid

let uid = Math.floor(Math.random() * 10000000000) + 1;
console.log(uid);

// forbbiden characters

let forbbidenCharacters = ['<', '>', '"', '\'', '\\', '/', '|', '?', '*', ':', '.', ' '];

// remove fbidchars from filename

let filename = 'file1.txt';
let forbbidenCharacters = ['<', '>', '"', '\'', '\\', '/', '|', '?', '*', ':', ' '];
for (let i = 0; i < forbbidenCharacters.length; i++) {
    if (filename.includes(forbbidenCharacters[i])) {
        filename = filename.replace(forbbidenCharacters[i], '');
    }
}
console.log(filename);

// random numbers to an array


let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1);
}
console.log(randomNumbers);

// check how many months left from current date

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let monthsLeft = 12 - currentMonth;
console.log(monthsLeft);

// check how many days left from current date

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let daysLeft = 365 - currentDate.getDate();
console.log(daysLeft);


// node server
let http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}
).listen(3000);
console.log('Server running at http://localhost:3000/');

// check how many seconds are left in a minute

let currentDate = new Date();
let currentSeconds = currentDate.getSeconds();
let secondsLeft = 60 - currentSeconds;
console.log(secondsLeft);

// use a verification code
let message = 'test message';
let encryptedMessage = '';
for (let i = 0; i < message.length; i++) {
    encryptedMessage += String.fromCharCode(message.charCodeAt(i) + 1);
}
console.log(encryptedMessage); verificationCode = '';
for (let i = 0; i < 6; i++) {
    verificationCode += Math.floor(Math.random() * 10);
}
console.log(verificationCode);

