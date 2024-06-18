// let score = 33
// let score = "33"
// let score = null // o/p => typeof - 0
//let score = undefined // o/p => typeof - 0
// let score = true // o/p => typeof - 1
// let score = true // o/p => typeof - 0

let score = "33abc" // type NaN


// console.log(typeof score);
// different way to print this using method 

// console.log(typeof (score));

// let supooese we are getting data from another which is not confirmed that is number 

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // NaN (special type) => not a number

// 33 => 33
// "33abc" => NaN
//true => 1; fasle => 0 

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
// "" => true
// "swechchha" => false

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

//************************************ Operations ***********************/

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion