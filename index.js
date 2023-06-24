
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

timer();

document.getElementById("bb").addEventListener("click", timer);

function timer() {
  var sec = 60;

  function updateSec() {
    sec--;
    if (sec < 10) {
      document.querySelector("text").innerHTML = `&nbsp${sec}`;
    } else {
      document.querySelector("text").innerHTML = sec;
    }
    if (sec === 0) {
      stopTimer();
    }
  }
  updateSec();

  var interval = setInterval(updateSec, 1000);

  function stopTimer() {
    clearInterval(interval);
  }
}