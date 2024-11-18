// //synchronous
// console.log('first')
// console.log('second');
// console.log('third');

// //asynchronus
// console.log('start');
// setTimeout(()=>{
//     console.log('middle');

// },2000)
// console.log('third');
const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

async function fetchData() {
    try{
const response = await fetch(url)
const data = await response.json()
console.log(data);

    }
    catch(error){
console.log(error);

    }
}
fetchData()

/*task
1. homepage(carousel)
2.products page
3.about page
4.cart page
5.login , signup page

navbar, footer each page
*/