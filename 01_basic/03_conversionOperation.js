// let score = 33
// let score = "33"
// let score = null // o/p => typeof - 0
//let score = undefined // o/p => typeof - 0
// let score = true // o/p => typeof - 1
// let score = true // o/p => typeof - 0

let score = "33abc" // type NaN


console.log(typeof score);
// different way to print this using method 

console.log(typeof (score));

// let supooese we are getting data from another which is not confirmed that is number 

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN (special type) => not a number

// 33 => 33
// "33abc" => NaN
//true => 1; fasle => 0 

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
// "" => true
// "swechchha" => false

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);