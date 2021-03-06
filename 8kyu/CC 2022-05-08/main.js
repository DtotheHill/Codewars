// =======8kyu Invalid Login - Bug Fixing #11 =======//

// Invalid Login - Bug Fixing #11
// Oh NO! Timmy has moved divisions... but now he's in the field of security. Timmy, being the top coder he is, has allowed some bad code through. You must help Timmy and filter out any injected code!

// Task
// Your task is simple, search the password string for any injected code (Injected code is any thing that would be used to exploit flaws in the current code, so basically anything that contains || or //) if you find any you must return "Wrong username or password!" because no one likes someone trying to cheat their way in!

// Preloaded
// You will be given a preloaded class called Database with a method login this takes two parameters username and password. This is a generic login function which will check the database for the user it will return either 'Successfully Logged in!' if it passes the test or 'Wrong username or password!' if either the password is wrong or username does not exist.


function validate(username, password){
  if (password.includes('||') || password.includes('//'))
    return 'Wrong username or password!'
  var database = new Database();
  return database.login(username, password);
}



// ======8kyu A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future" ======//

// Our friend Pac has finally decided to pursue a career in the coding industry.
// He is a newbie, he needs to learn properly.
// Therefore, Pac wants to apply for the worldwide famous -and very demanding-
// 'C0d3r 1ns1d3' Academy for beginners.
// In order to join, Pac is required to solve a series of 3 exercises about 'Bug Fixes'.
// He has been sent an email from the Academy with the following instructions,

// Dear Pac,  
// This is the first exercise. Find out what's wrong and fix the code.  
// You have 15 minutes to send a solution.  
// Good Luck.
// This code is a mess! Would you help Pac to fix the code in time?

// (This might be helpful -> Math.random();)



function yourFutureCareer(){
	var career = Math.random()
		if (career <= 0.32) return 'FrontEnd Developer'
		if (career <= 0.65) return 'BackEnd Developer'
		return 'Full-Stack Developer'
}

// ====== 8kyu Regex count lowercase letters =======//

// Your task is simply to count the total number of lowercase letters in a string.


function lowercaseCount(str){
  return (str.match(/[a-z]/g) || []).length;
}


// =======8kyu Improving Math.round(x) ======//

// Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.

// You may find the following Math methods useful:

// Math.round(x) (of course)
// Math.pow(x,y) (returns x to the power of y - e.g. Math.pow(3,4) == 81)


Math.roundTo = function (number, precision) {
 return +(number).toFixed(precision)
}



// ====== 8kyu Job Matching #1 ======//

// Let's build a matchmaking system that helps discover jobs for developers based on a number of factors.

// One of the simplest, yet most important factors is compensation. As developers we know how much money we need to support our lifestyle, so we generally have a rough idea of the minimum salary we would be satisfied with.

// Let's give this a try. We'll create a function match which takes a candidate and a job, which will return a boolean indicating whether the job is a valid match for the candidate.

// A candidate will have a minimum salary, so it will look like this:

// let candidate = {
//   minSalary: 120000
// }
// A job will have a maximum salary, so it will look like this:

// let job = {
//   maxSalary: 140000
// }
// If either the candidate's minimum salary or the job's maximum salary is not present, throw an error.

// For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary. However, let's also include 10% wiggle room (deducted from the candidate's minimum salary) in case the candidate is a rockstar who enjoys programming on Codewars in their spare time. The company offering the job may be able to work something out.

function match({minSalary}, {maxSalary}) {
  if (!minSalary || !maxSalary) throw new Error('')
  return minSalary*0.9<=maxSalary
  }