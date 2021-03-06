// ====== 8kyu Broken Counter ======//

// Our counter prototype is broken. Can you spot, what's wrong here?

class Counter {
  constructor() {
    this.value = 0;
  }
  
  increase() {
    this.value++;
  };

  getValue() {
    return this.value;
  };

  reset() {
    this.value = 0;
  };
}


// ====== 8kyu Training JS #18: Methods of String object--concat() split() and its good friend join() ======//

// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.


function splitAndMerge(str, sp) {
  return str.split(" ").map(word => word.split("").join(sp)).join(" ");
}

// ======8kyu Power ======//

// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

function numberToPower(number, power){
  let result=1;
    for (let i=1;i<=power;i++){ result*=number}
  return result
}

// ======= 8kyu Age Range Compatibility Equation =======//

// Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

// This equation doesn't work when the age <= 14, so use this equation instead:

function datingRange(age){
  return age>=14?`${Math.floor(age/2+7)}-${Math.floor((age-7)*2)}`:
                 `${Math.floor(age-(age*0.1))}-${Math.floor(age+(age*0.1))}`
}



// ====== 8kyu Simple Comparison ======//

// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().

function add(a, b){
	return +a==+b
}

