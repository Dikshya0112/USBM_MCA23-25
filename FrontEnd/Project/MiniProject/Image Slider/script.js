// let image = document.getElementsByTagName("img")[0];
// let imgArr=[ 'images/img1.avif',"images/img2.jpg", "images/img3.jpg"]

// setInterval(()=>{
// image.src = "images/img2.jpg"
// },3000)
// setInterval(() => {
//     image.src = "images/img3.jpg"
// },6000)
// setInterval(()=>{
//     image.src= 'images/img1.avif'
// },9000)

let image = document.getElementsByTagName("img")[0];
let imgArr = ['images/img1.avif', 'images/img2.jpg', 'images/img3.jpg'];
let currentIndex = 0;

setInterval(() => {
    image.src = imgArr[currentIndex];
    currentIndex = (currentIndex + 1) % imgArr.length;
}, 3000); 

