const minutes = document.querySelector('.minute');
const seconds = document.querySelector('.second');
const milli = document.querySelector('.milliSecond');

const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');

let secondHand = 0;
let minuteHand = 0;
let ms = 0;
let clearTimer;

const startTimer = () => {
  clearTimer = setInterval(() => {
    if (ms > 60) {
      ms = 0;
      secondHand++;
      if (secondHand > 59) {
        secondHand = 0;
        minuteHand++;
        minutes.innerText =
          minuteHand < 10 ? '0' + minuteHand + ' : ' : minuteHand + ' : ';
      }
      seconds.innerText =
        secondHand < 10 ? '0' + secondHand + ' : ' : secondHand + ' : ';
    }
    milli.innerText = ms < 10 ? '0' + ms : ms;
    ms++;
  }, 10);
};

const resetTimer = () => {
  minutes.innerText = '00 : ';
  seconds.innerText = '00 : ';
  milli.innerText = '00';
  minuteHand = secondHand = ms = 0;
  clearInterval(clearTimer);
};

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
