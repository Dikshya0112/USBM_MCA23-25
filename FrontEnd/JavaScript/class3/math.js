// Mathematical Operator:
let num1 = 5;
let num2 = 3;
let result1 = num1 + num2; // Addition Operator
let result2 = num1 - num2; // Subtraction
let result3 = num1 * num2; // Multiplication
let result4 = num1 / num2; // Division

// Modulo Operator :
// To find out remainder

let num3 = 29;
let odd = num3 % 2;
console.log(odd);

//  Exponentiation Operator

let square = 2 ** 2;
let cube = 2 ** 3;
console.log(square); // 4

// Relational Operator :
// To compare two values
// `!` --> Not Operator
console.log(10 > 5); // Boolean
console.log(10 < 5); // Boolean
console.log(5 >= 5); // Boolean
console.log(10 > !5); // Boolean
console.log(!5); // Boolean

// Equality Operator :
// `==` : Value check
// `===` : Value and Data type check

// console.log(5 == 5); // true
// console.log(5 == 6);// false
// console.log(5 == "5");//true
// console.log(5 === "5");//false
// console.log(5 != "5");//false
// console.log(5 !== "5");//true

// Conditional
// if (condition) {
// true code to be executed here
// }

// Falsy value :
// false, 0, -0, "",``,'', null, undefined, NaN

// if (-2) {
//   console.log("It is true");
// }

// Task-1:
// Given total_bill, discount_start_price if   is satisfied ,Print Discount


// let total_bill = 1000;
// if (total_bill > 500) {
//   console.log("Discount Available");
// } else {
//   console.log("No Discount");
// }

// //Task-2 :
// let age = 60;
// if (age >= 60) {
//   console.log("Adult and Senior");
// } else if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }

// Task-3
// Check if (male) and then check (22+) then he can able to maary
// const { stdin, stdout } = require('process');
// const readline = require('readline')
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout,
// })
// rl.question("Enter you age. \nEnter M for male and F for female", (gender)=>{
// let g = gender.toUpperCase();  
// switch (g) {
//   case "F":
//     console.log('You are not male');
//     rl.close()
//     break;
//   case "M":
//     console.log("You are a male\n ");
   
//   rl.question("enter your age", (age)=>{
//    let agee;
//    agee =  parseInt(age)
//      if (age >= 22) {
//       console.log("You can marry");
     
//     }
//   rl.close() })
//    break;
//    default : 
//    console.log('\nInvalid input');
   
// }}
// ) 

// Check the vowel(a,e,i,o,u)

// let char = "a";

// switch (char) {
//   case "a":
//     console.log("It's vowel");
//     break; // to break the flow
//   case "e":
//     console.log("It's vowel");
//     break;
//   case "i":
//     console.log("It's vowel");
//     break;
//   case "o":
//     console.log("It's vowel");
//     break;
//   case "u":
//     console.log("It's vowel");
//     break;

//   default:
//     console.log("It's not a vowel");
//     break;
// }

// rl module :

// const readline = require("readline");
//  console.log(readline);

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let item1;

// rl.question("Enter item1", (input1) => {
//   item1 = parseInt(input1);

//   if (item1 % 2 !== 0)
//     console.log("This is Odd:", item1);
// else if(item1 === NaN ){
//     console.log('enter a valid number');
// }
// else{
//     console.log('its even', item1);

// }
// rl.close()
// });

