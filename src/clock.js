const clock = document.getElementById("js-clock");

function paintClock() {
  const currentDate = new Date();
  const currentHour = currentDate.getHours(),
    currentMinute = currentDate.getMinutes();
  clock.innerText = `${currentHour < 10 ? "0" + currentHour : currentHour} : ${
    currentMinute < 10 ? "0" + currentMinute : currentMinute
  }`;
}

function init() {
  paintClock();
  setInterval(paintClock, 5000);
}

init();
