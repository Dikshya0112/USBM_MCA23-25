let userInput = document.getElementsByTagName("input")[0];
let sec = document.getElementsByClassName("right")[0];
let min = document.getElementsByClassName("left")[0];
let start = document.getElementsByTagName("button")[0];
let stop = document.getElementsByTagName("button")[1]
let reset = document.getElementsByTagName("button")[2]

let seconds;
let minutes;
let timerInterval;

start.addEventListener("click", () => {
  clearInterval(timerInterval);

  let totalSeconds = parseInt(userInput.value);
  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    alert("Please enter a valid number of seconds.");
    sec.innerHTML = seconds.toString().padStart(2, "0");
    min.innerHTML = minutes.toString().padStart(2, "0");
  }
  if (totalSeconds < 60) {
    seconds = totalSeconds;
    minutes = 0;
  } else {
    seconds = totalSeconds % 60;
    minutes = Math.floor(totalSeconds / 60);
  }


  sec.innerHTML = seconds.toString().padStart(2, "0");
  min.innerHTML = minutes.toString().padStart(2, "0");

  // Start the countdown
  timerInterval = setInterval(timer, 1000);
});

function timer() {
  if (seconds === 0 && minutes === 0) {
    clearInterval(timerInterval);
    alert("Time's up!");
  } else if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  // Update the display
  sec.innerHTML = seconds.toString().padStart(2, "0");
  min.innerHTML = minutes.toString().padStart(2, "0");
}

stop.addEventListener('click', ()=>{
 clearInterval(timerInterval)
})
reset.addEventListener('click',()=>{
  sec.innerHTML = '0'.padStart(2, "0");
  min.innerHTML = '0'.padStart(2, "0");
})