// =================Таймер===============

const start = document.querySelector('[data-action="start"]');
const pause = document.querySelector('[data-action="pause"]');
const stop = document.querySelector('[data-action="stop"]');
const p = document.querySelector("#event-time");
let currentTime;
let stopper;

class Timer {
  constructor(date) {
    this.date = date;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  start() {
    let startTime = Date.now();
    console.log(startTime);

    stopper = setInterval(() => {
      currentTime = Date.now() - startTime;
      console.log(currentTime);

      let hours = this.pad(
        Math.floor((currentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      let minutes = this.pad(
        Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60))
      );
      let seconds = this.pad(Math.floor((currentTime % (1000 * 60)) / 1000));

      p.textContent = `${hours}: ${minutes}:  ${seconds}`;
    }, 1000);
  }

  pause() {
    clearInterval(stopper);
  }

  stop() {
    clearInterval(stopper);
    p.textContent = `00:00:00`;
  }
}

const timer = new Timer("12");
console.log(timer);

start.addEventListener("click", timer.start.bind(timer));
pause.addEventListener("click", timer.pause.bind(timer));
stop.addEventListener("click", timer.stop.bind(timer));

// timer.start();
// ===========================================================
