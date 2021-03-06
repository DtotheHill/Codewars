// ====== 8kyu Get Nth Even Numner ======//

//Return the Nth even number 

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466


function nthEven(n){
  return (n*2) -2
}


// ====== 8kkyu Generate range of integers ======//

// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// Task
// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// Note
// min < max
// step > 0
// the range does not HAVE to include max (depending on the step)


function generateRange(min, max, step){
  let arr = [];
  for (let i=min; i<=max; i += step) {
    arr.push(i);
  }
  return arr;
}


//====== 8kyu What's the real floor ======//

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here

// Examples
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3


function getRealFloor(n) {
  if (n >= 13) { return n - 2;}
  else if ( n > 0 ) { return n - 1;}
  else {return n;}
  }

let getRealFloor = n => (n >= 13 ) ? n-2 : (n > 0) ? n-1 : n


// ====== 8 kyu Super Duper Easy ======//

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".


function problem(x){
  return typeof x == 'string' ? 'Error' : (x * 50 + 6);
}

// ====== 8 kyu Training JS #7: if..else and ternary operator ======//


// Task:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.

let saleHotdogs = n => (n < 5) ? n * 100 : (n >=5 && n < 10) ? n * 95 : n * 90


//====== 8kyu Simple Fun #1: Seats in Theater ======//

// Task
// Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.

// The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.

// Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

// Example
// For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be

// seatsInTheater(nCols, nRows, col, row) === 96

function seatsInTheater(nCols, nRows, col, row) {
  return (nCols-col+1) * (nRows - row);  
}

let seatsInTheater = (nCols, nRows, col, row) => (nCols-col+1) * (nRows - row);  


//====== 8kyu What is between ======//

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
  let arr = []
  for (let i = a; i <= b; i++)
    arr.push(i)
  return arr
}

//======== 8kyu Grasshopper - Debug sayHello ======//

// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:
// Hello, Mr. Spock

function sayHello(name) {
  return `Hello, ${name}`
}

let sayHello = name => `Hello, ${name}`


//====== 8kyu Grasshopper - Grade Book ======//

// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

function getGrade (s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3

 if (avg >= 90) {
    return 'A';
  } else if (avg >= 80) {
    return 'B';
  } else if (avg >= 70) {
    return 'C';
  } else if (avg >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}


//======8kyu Summation======//

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}

// ====== 8kyu Messi Goals ======//

// Use variables to find the sum of the goals Messi scored in 3 competitions

// Information
// Messi goal scoring statistics:

// Competition	Goals
// La Liga	43
// Champions League	10
// Copa del Rey	5

var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

//====== 8kyu Personalized Message =====//

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet (name, owner) {
  if(name == owner){
    return 'Hello boss'
  }else {
    return 'Hello guest'
  }
}

let greet = (name, owner) => (name == owner) ? 'Hello boss' : 'Hello guest'

//====== 8kyu Create the Room======//

// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

const rooms = {
  firstRoom: {
    name: 'Kitchen',
    description: 'Easy',
    completed: true
  },
  secondRoom: {
    name: 'Dining Room',
    description: 'Medium ',
    completed: false
  },
  thirdRoom: {
    name: 'Bathroom',
    description: 'Hard',
    completed: true
  },
}

//======8kyu Combine Strings ======//

// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

let combineNames = (n1,n2) => `${n1} ${n2}`

//====== Order of operations ======//

// You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.

//original 
// function orderOperations () {
//   return 2 + 2 * 2 + 2 * 2
// }

let orderOperations = ()  => (2 + 2) * (2 + 2) * 2


//====== 8kyu Array Mean ======//

// Find the mean (average) of a list of numbers in an array.

var findAverage = nums => nums.reduce((a,c) => a + c) / nums.length


//====== Object Syntax debug ======//

// While making a zork-type game, you create an object of rooms. Unfortunately, the game is not working. Find all of the errors in the rooms object to get your game working again.




// original//

// var room = {
//   first: {
//     description: 'This is the first room'
//     items: {
//       chair: 'The old chair looks comfortable',
//       lamp: 'This lamp looks ancient'
//   },
//   second: {
//     description: 'This is the second room'
//     items: {
//       couch: 'This couch looks like it would hurt your back,
//       table: 'On the table there is an unopened bottle of water'
//     }
//   }
// }

//== solution==//
let room = {
  first: {
    description: 'This is the first room',
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient'
      },
  },
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water'
    }
  }
}

//====== 8kyu Terminal Game #1 ======//

// In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

// attribute	value
// name	user argument or 'Hero'
// position	'00'
// health	100
// damage	5
// experience	0

function Hero (name) {
  this.name = name || 'Hero';
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

//====== 8kyu Triple Trouble ======//


// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.


function tripleTrouble(one, two, three){
  let str =''
  for (let i = 0; i < one.length; i++){
   str += one[i]+two[i]+three[i]
    
  }
  return str
 }