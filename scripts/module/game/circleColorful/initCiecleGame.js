import createRandomCircle from "./createRandomCircle.js";
import finishGame from "./finishGame.js";

const initCiecleGame =()=>{
    console.log('initCiecleGame: ');
    const screen = document.querySelectorAll('.screen');
    const timeList = document.querySelector('#time-list');
    const timeEl = document.querySelector('#time');
    let time = 0;

    timeList.addEventListener('click', event => {
        if (event.target.classList.contains('time-btn')) {
          time = parseInt(event.target.getAttribute('data-time'));
          screen[1].classList.add('up');
          startGame();
          return time
        }
      })
      let idUnterval;
      function startGame() {
        idUnterval = setInterval(decreaseTime, 1000);
        setTime(time);
        createRandomCircle();
      }

      function setTime(value) {
        timeEl.innerHTML = `00:${value}`;
      }

      function decreaseTime() {
        if (time === 0) {
          finishGame(idUnterval)
        } else {
          let current = --time;
          if (current < 10) {
            current = `0${current}`;
          }
          setTime(current);
        }
      
      }
      
}
export default  initCiecleGame;