// Write a function to print your name 
// let myName = "Sudikshya";
function printmyName(){
    console.log(`My name is ${myName}`); 
}

// printName();



// function myName(name,age,city){
//     console.log(`My name is ${name}.\nMy age is ${age}\nI live in  is ${city}`);
// }
// myName("Sudikshya",21,"Khordha");






// Return Statement
// function returnName(name,age,city){
//     return `My name is ${name}, my age -  ${age}, and I live in ${city}`;
// }

// let output = returnName("Sudikshya",21,"Khordha");
// console.log(output);





// Arrow function
//console.log(printName("Sudikshya")); // Reference error - printName is not defined

const printName = (name) => {
    return `My name is ${name}`;
}
console.log(printName("Sudikshya"));  