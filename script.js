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

//flag variables
//start count is to prevent running the setInterval frequently;
let startCount = 0;
let isPause = false;

const startTimer = () => {
  startCount++;
  isPause = isPause && false;

  if (startCount == 1) {
    clearTimer = setInterval(() => {
      if (!isPause) {
        if (ms > 59) {
          ms = 0;
          secondHand++;
          if (secondHand > 59) {
            secondHand = 0;
            minuteHand++;
            minutes.innerText =
              minuteHand < 10 ? '0' + minuteHand + ':' : minuteHand + ':';
          }
          seconds.innerText =
            secondHand < 10 ? '0' + secondHand + ':' : secondHand + ':';
        }
        milli.innerText = ms < 10 ? '0' + ms : ms;
        ms++;
      }
    }, 18);
  }
};

const resetTimer = () => {
  if (startCount) {
    let audio = new Audio('assets/sound/resetSound.wav');
    audio.play();
  }
  minutes.innerText = '00:';
  seconds.innerText = '00:';
  milli.innerText = '00';
  minuteHand = secondHand = ms = 0;
  isPause = false;
  startCount = 0;

  clearInterval(clearTimer);
};

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', () => {
  isPause = true;
});
resetBtn.addEventListener('click', resetTimer);
