
const circleColorful= ()=>{
    const modalContent = document.querySelector('#modal_content');
    modalContent.innerHTML = `
  <div class="screen">
    <h1>Выберите время</h1>
    <ul id="time-list" class="time-list">
      <li>
        <button class="time-btn" data-time="10">
          10 сек
        </button>
      </li>
      <li>
        <button class="time-btn" data-time="20">
          20 сек
        </button>
      </li>
      <li>
        <button class="time-btn" data-time="30">
          30 сек
        </button>
      </li>
      <li>
        <button class="time-btn" data-time="45">
          45 сек
        </button>
      </li>
    </ul>
  </div>

  <div class="screen">
    <h3>Осталось <span id="time">00:00</span></h3>
    <div class="board" id="board"></div>
  </div>`

const screen = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['rgb(228, 169, 169)', 'rgb(120, 219, 145)', 'rgb(95, 126, 228)', 'rgb(235, 236, 145)', 'rgb(241, 172, 67)'];
let time = 0;
let score = 0;

timeList.addEventListener('click', event => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'));
    screen[1].classList.add('up');
    startGame();
  }
})

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
})

function startGame() {
  setInterval(decreaseTime, 1000);
  setTime(time);
  createRandomCircle();
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }

}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<hi>Cчет: <span class="primary">${score}</span></hi>`;

}
function createRandomCircle() {
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = getRandomColor();
  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

}



export default circleColorful;