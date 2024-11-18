// Simple Calculator
// confirm(
//     "Enter 2 numbers to perform calculations. \nIf you want to exit, type 'exit' anytime."
//   );
//   let userResponse = prompt("Type 'Y' to continue or 'exit' to quit");

//   if (userResponse === 'Y') {
//     do {
//       let num1 = prompt("Enter the first number:");
//       num1 = Number(num1);

//       let num2 = prompt("Enter the second number:");
//       num2 = Number(num2);

//       if (isNaN(num1) || isNaN(num2)) {
//         alert("Please enter valid numbers.");
//         continue;
//       }

//       confirm(
//         "Now enter the operation you want to perform. The options are: +, -, *, /"
//       );
//       let opr = prompt("Enter the operation:");

//       switch (opr) {
//         case "+":
//           alert(`Result: ${num1 + num2}`);
//           break;
//         case "-":
//           alert(`Result: ${num1 - num2}`);
//           break;
//         case "*":
//           alert(`Result: ${num1 * num2}`);
//           break;
//         case "/":
//           alert(`Result: ${num1 / num2}`);
//           break;
//         default:
//           alert("Invalid operation. Please enter one of +, -, *, /.");
//       }

//       userResponse = prompt("Type 'Y' to continue or 'exit' to quit");
//     } while (userResponse !== 'exit');
//   }

//   if (userResponse === 'exit') {
//     alert("See you next time!");
//   }

// Guessing Game

// console.log("hi");
// let random = Math.floor(Math.random() * (100 - 1 + 1) + 1);
// console.log(random);
// let input = prompt("enter a number");
// input = Number(input);
// console.log(input); 
// if (input === random) {
//   console.log("YAHH");
// } 
// while (input != random) {

//   if (input > random) {
//     console.log("try smaller no");
//   } else if (input < random) {
//     console.log("try greater no");
//   } 
//    input = prompt("enter a number");
//   input = Number(input);
// }

// Word Counter
// let sentence = prompt("enter your sentence")
// let l= sentence.split(" ")
// console.log('No. of words are' , l.length);


// Login Attempt Limit
let Username = document.getElementById('username').value
console.log(Username);
let Password = document.getElementById('password').value
console.log(Password)
let MaxAttempt = 3
localStorage.setItem('username', Username)
localStorage.setItem('password', Password)
