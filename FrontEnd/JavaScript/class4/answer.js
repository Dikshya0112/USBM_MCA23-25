/*
1.  Math.floor() -  used to find the floor value of a number. 
It rounds down and returns the largest integer less than or equal to a given number.
for ex: Math.floor(11.5) = 11  ,   Math.floor(5.95) = 5

2.  Generate random number betwn 1-100
Math.floor(Math.random()*(end - start + 1) + start)  
 
3.  Math.ceil() - used to find the ceil value
It rounds up and returns the largest integer greater than or equal to given no.
for ex: Math.ceil(11.5) = 12  ,   Math.ceil(5.95) = 6

4.  Math.pow(2, 3) - it helps to find the power of given no.
here its 2^3 
output - 8

5. Value of Math.PI = 3.141592653589793
*/

//2.
console.log(Math.floor(Math.random()*(100-1+1)+1))
//4.
console.log(Math.pow(12, 2)); //144
//5.
console.log(Math.PI);//3.141592653589793


//TASKS:
//1.Generate a random number between 1 and 100.
let start = 1 
let end = 100
let randomNo = Math.floor(Math.random()*(end - start +1)+start)
console.log(randomNo);

//2.Round the number 6.75 down to the nearest integer.
console.log(Math.floor(6.75)); //6

//3. Round the number 9.12 up to the nearest integer.
console.log(Math.ceil(9.12)); //10

//4.Generate a random number between 5 and 27 (inclusive).
let startt = 5
let endd = 27
let rNo = Math.floor(Math.random()*(endd - startt +1)+startt)
console.log(rNo);

//5.Add 5 days to the current date.
let date =  new Date()
console.log(date.getDate() + 5); // today - 23 , o/p - 28

//6.Get the number of milliseconds between January 1, 2023, and today. 

let  startDate = new Date('January 1, 2023');
let  millisecs = date - startDate;
//console.log(date, startDate,millisecs);
console.log(`Milliseconds between January 1, 2023, and today: ${millisecs}`);


//7.Get the current hour.
console.log(date.getHours());

//8.  Create a date for January 1, 2025.
let newDate = new Date('January 1, 2025')
console.log(newDate);

//9. Get the current day of the week (0 for Sunday, 6 for Saturday).
console.log(date.getDay());// 3 - wed

//10.Get the current month (0-11).
console.log(date.getMonth());//9 - Oct

//12. What is the difference between getDate() and getDay()?
/* getDate() -  we'll get the date i.e 23
   getDay()- we'll get the day in a week , i.e today is wednesday
*/



