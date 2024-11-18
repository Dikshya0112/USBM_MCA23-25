//object : key ,value -> pair
// key can be any datatype
// let student1 = { // literal
//     'name':'Sudikshya',
//     'age':21,
//     'stream':'MCA',
// }
// console.log(typeof student1);// object
// // obj is meaningfull as compared to array becoz of its key

// //using constructor
// const stud2= new Object()
// stud2.name = "Abhi"
// stud2.age= 22
// console.log(stud2);

//todo :
// to create arr objs of 50 students
// let student1 = [
//   {
//     // literal
//     name: "Sudikshya",
//     age: 21,
//     stream: "MCA",
//   },
//   {
//     name: "Ankita",
//     age: 21,
//     stream: "MCA",
//   },
//   {
//     name: "Sonali",
//     age: 21,
//     stream: "MCA",
//   },
//   {
//     name: "Madhu",
//     age: 22,
//     stream: "MCA",
//   },
// ];
//access
// dot notation
// bracket Notification

// // modify
// student1.name="Abhiii"

//nested obj
// let person = {
//   name: "abc",
//   age: 20,
//   address: { landmark: "infocity", pin: 751024 },
// };
// console.log(person);


//commentss obj
// let user = {
//     username:'abc',
//     email:'abc@gmail.com',
//     gender:'female',
//     age:30,
//     comments:['hh','httyh','thynh'],
//     address:{
//         city:'bbsr',
//         pin:752024,
//         state:'odisha'
//     }
// }
// console.log(user.username,
// user.email,
// user.address.city,
// user.address.state,
// user.comments,
// user.comments[0],
// user.comments[user.comments.length - 1])

//this keyword - it refers toyhe current obj
// let stud = {
//     name:'Abhishek',
//     age:22,
//     greet:function(){
//         console.log(`hello ${this.name}`);   
//     }
// }
// // console.log(stud.greet());
// stud.greet()


