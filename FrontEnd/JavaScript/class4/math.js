// let num1 = 25
// let num2= 55.05
// let sum= num1+num2
// console.log(sum);// 80.05

// // Math is an inbuilt mathematical operation in js


// // Round

// console.log(Math.round(sum));//80
// console.log(Math.round(123.5));//124
// console.log(Math.PI);//3.141592653589793


// //Square root

// console.log(num1 ** 2);   //625 (Pow)
// console.log(Math.pow(num1));  //NaN
// console.log(Math.pow(num1,2)); // 625 
// console.log(Math.sqrt(num1));  //5(square root)

// //Ceil and Floor  Value

// console.log(Math.ceil(98.75));//99
// console.log(Math.floor(98.75));//98
// console.log(Math.floor(-325.35));//-326
// console.log(Math.ceil(-325.35))//-325


// //max
// console.log(Math.max(1,5,1000,40));//1000

// // min
// console.log(Math.min(1,5,1000,40));//1


// // absolute  - convert negative to positive
// console.log(Math.abs(-12));//12
// console.log(Math.abs(12));//12
// console.log(Math.abs(0.005));//0.005


//random
// console.log(Math.random());//0.22462019490233742
// console.log(Math.random());//0.9497375768113392
// console.log(Math.random());//0.911997573381973
// console.log(Math.random());//0.5784977144845427






// wap to print random number between 5 to 27
// console.log(Math.floor(Math.random()*5)) // 0-4
// console.log(Math.floor(Math.random()*6))// 0-5


// // end - start + 1
// let totalNumbers = 27 - 5 + 1
// let random =Math.floor(Math.random()* totalNumbers + 5)
// console.log(random);




//date
let date = new Date()
console.log(date);//2024-10-15T05:39:21.969Z
console.log(date.toISOString());//2024-10-15T05:39:21.969Z
console.log(date.getFullYear());//2024
console.log(date.getHours());//11
console.log(date.getMonth());//9  (it should be 10)
console.log(date.getMonth()+1);//10 
console.log(date.getDay());//2  --> tuesday
console.log(date.getDate());//15

;











