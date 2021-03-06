// ====== 7kyu Highest and lowest ======//

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
  let nums = numbers.split(' ')
  return `${Math.max(...nums)} ${Math.min(...nums)}`
}



// ====== 8kyu Remove exclamation marks ======//

function removeExclamationMarks(s) {
  return s.replace(/!/g,'')
}


// ====== 8kyu Get Planet Name By ID ======//

function getPlanetName(id){
  switch(id){
    case 1:
      return'Mercury'
    case 2:
      return'Venus'
    case 3:
      return'Earth'
    case 4:
      return'Mars'
    case 5:
      return'Jupiter'
    case 6:
      return 'Saturn'
    case 7:
     return 'Uranus'
    case 8:
      return'Neptune'
  }
}


// ====== 8kyu Double Char ======//

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  return str.split('').map((letter)=> `${letter}${letter}`).join('')
}



// ====== 8kyu Parse nice int from char problem ======//

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
  return parseInt(inputString)
}


// ====== 8kyu The feast of Many Beasts ======//

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.


function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}



//======8kyu Short long short ======//

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b
}

//======8kyu Expressions Matter ======//

// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

function expressionMatter(a, b, c) {
  return Math.max( a+b+c, (a+b)*c, a*(b+c), a*b*c ) ;
}

// ====== 8kyu Switch it up ======//

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

function switchItUp(number){
  var words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  return words[number];
}



// ======= 8kyu altERnaTIng cAsE <=> ALTerNAtiNG CaSe ======//

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

String.prototype.toAlternatingCase = function () {
  return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}


// 8kyu Unfinished Loop -Bug fixing #1 ======//

// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!


// Original

// function createArray(number){
//   var newArray = [];
  
//   for(var counter = 1; counter <= number;){
//     newArray.push(counter);
//   }
  
//   return newArray;
// }


// solution
function createArray(number){
  var newArray = [];
  
  for(var i = 1;  i<= number; i++){
    newArray.push(i);
  }
  
  return newArray;
}



//======8kyu My head is at the wrong end =====//

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

function fixTheMeerkat(arr) {
  return arr.reverse()
}

// ======8kyu Find numbers which are divisible by given number ======//

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

function divisibleBy(numbers, divisor){
  return [...numbers].filter(num=>num % divisor === 0)
}

// ====== 8kyu Student's final grade ======//

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10){
    return 100
  }else if (exam >75 && projects >= 5){
    return 90
  }else if (exam >50 && projects >=2){
    return 75
  }else {
    return 0
  }
}


// ======8kyu Is the string uppercase? ======?

// Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

String.prototype.isUpperCase = function() {
  return this.toString()===this.toUpperCase()
}

// ====== 8kyu Welcome! ======//

// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

function greet(language) {
	const base ={
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
}
  return base[language] || base.english
}


// ======= 8kyu Difference of volumes of Cuboids ======//

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

function findDifference([a,b,c], [d,e,f]) {
  return Math.abs(a*b*c - d*e*f)
}



// ====== 8kyu Sort and Star ======//

// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
  return s.sort()[0].split('').join('***')
}


// ====== 8kyu Stringy Strings ======//

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

function stringy(size) {
  let str = ''
  for (let i=1; i<=size; i++){
    str+= i%2
  }
  return str
}

// ======8kyu I love you, a little , a lot, passionately ... not at all ======//

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

const phrases = [
  'not at all',
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
]

let howMuchILoveYou = petals => phrases[petals % 6]

// ======= 8kyu Is it a palindrome ======//

// Write a function that checks if a given string (case insensitive) is a palindrome.

const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}


// ====== 8kyu Capitalization and mutability ======//


// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

function capitalizeWord(word) {
  return word[0].toUpperCase()+word.slice(1)
}



// ====== 8kyu Reverse list order ======//

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

function reverseList(list) {
  return list.reverse()
}



// ====== 8kyu Exclusive "or" (xor) Logical Operator ======//



// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

function xor(a, b) {
  if (a === true && b === false){
    return true
  }else if (a === false && b === true){
    return true
  }else {
    return false
  }
}


// ======8kyu Miles per gallon to kilometers per liter ======//

// Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

// Make sure to round off the result to two decimal points. If the answer ends with a 0, it should be rounded off without the 0. So instead of 5.50, we should get 5.5.

// Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres

function converter (mpg) {
  let conversion =  mpg / 2.82481053149
  return +conversion.toFixed(2)
}


// ======8kyu Is it a number ======//

// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

function isDigit(s) {
  return s ==parseFloat(s)
}


// ====== 8kyu Do you speak English ======//

// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence){
  let x = sentence.toLowerCase()
  if(x.includes('english')){
    return true
  }else {
    return false
  }
}

