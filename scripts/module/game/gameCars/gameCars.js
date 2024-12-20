import {saveDataJSON, removeDataStorage} from "../../localStorage.js"
import stopGame from "./stopGame.js";
import { setting, music } from "../../stat.js";
import removerEventListener from "../../removerEventListener.js";

const gameCars =(bool)=>{
  console.log('gameCars: ');


  const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
  };

  const startRun = event => {

    event.preventDefault();
    keys[event.key] = true;

    const modalOverlay = document.querySelector('.modal-overlay'); 
    if(modalOverlay.style.display === 'none'){
      removerEventListener('keydown', startRun);
    }

  };
    
  const stopRun = event => {
    event.preventDefault();
    keys[event.key] = false;

    const modalOverlay = document.querySelector('.modal-overlay'); 

    if(modalOverlay.style.display === 'none'){
      removerEventListener('keyup', stopRun);
    };
  }
   
if(bool){
  saveDataJSON('game','car')

  const modalContent = document.querySelector('#modal_content');
  modalContent.innerHTML = `
  <div class="score"></div>
  <div class="game_modal">
    <div class="start"> 
      Начать игру! <br>
      <button>Легкий</button>
      <button>Средний</button>
      <button>Сложный</button>
    </div>
    <div class="gameArea"></div>
  </div>`

const MAX_ENEMY = 7;
const HEIGHT_ELEM = 100;
const score = document.querySelector('.score'),
  gameArea = document.querySelector('.gameArea'),
  car = document.createElement('div'),
  startBtn = document.querySelectorAll('.start button');
  
  music.volume = 0.05;

  car.classList.add('car');
  
  let startSpeed = 0;
  
function getQuantityElements(heightElement) {
  //сколько елементов (количество машин) поместется на странице
  return (gameArea.offsetHeight / heightElement) + 1;
}
const getRandomEneme = (max) => {
  return Math.floor((Math.random() * max) + 1);
};

//имитация движения автомобиля
const moveRoad = () => {
  let lines = document.querySelectorAll('.line');
  lines.forEach(line => {
    line.y += setting.speed;
    line.style.top = line.y + 'px';
    //если высота больше чем высота страници
    if (line.y >= gameArea.offsetHeight) {
      line.y = -HEIGHT_ELEM;
    }
  });
};
/* 1) В объект keys не должно добавляться новых свойств, для этого добавить условия*/
//добавляем другие автомобили
const moveEnemy = () => {
  let enemys = document.querySelectorAll('.enemy');
  enemys.forEach(enemy => {
    //getBoundingClientRect определяем параметры автомобиля
    let carRect = car.getBoundingClientRect();
    let enemRect = enemy.getBoundingClientRect();
    if (carRect.top + 3 <= enemRect.bottom - 3 &&
      carRect.right - 3 >= enemRect.left + 3 &&
      carRect.left + 3 <= enemRect.right - 3 &&
      carRect.bottom - 3 >= enemRect.top + 3) {

        stopGame ();
       
      if (!setting.record || setting.record < setting.score) {
        score.innerHTML = `УПС АВАРИЯ! Скорость ${setting.score} - это новый рекорд!`;
        saveDataJSON('score', setting.score);
        setting.record = setting.score;
        return;
      }
      score.innerHTML = `УПС АВАРИЯ!`;
    }
  
    enemy.y += setting.speed / 2;
    enemy.style.top = enemy.y + 'px';
    //если высота больше чем высота страници
    if (enemy.y >= gameArea.offsetHeight) {
      enemy.y = -HEIGHT_ELEM * setting.traffic;
      enemy.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) + 'px';
    }
  });
};
  
function playGame() {
  if (setting.start) {
    setting.score += setting.speed;
    score.innerHTML = `
    <p>СКОРОСТЬ: ${setting.score}</p>
    ${setting.record ? `<p>Рекорд: ${setting.record}</p>` : ''}
    `;
  
    setting.speed = startSpeed + Math.floor(setting.score / 5000);
  
    moveRoad();
    moveEnemy();//определяем параметри авто при столкновении 
    
    if (keys.ArrowLeft && setting.x > 0) {
      setting.x -= setting.speed;
    }
    if (keys.ArrowRight && setting.x < (gameArea.offsetWidth - car.offsetWidth)) {
      setting.x += setting.speed;
    }
    if (keys.ArrowDown && setting.y < (gameArea.offsetHeight - car.offsetHeight)) {
      setting.y += setting.speed;
    }
    if (keys.ArrowUp && setting.y > 0) {
      setting.y -= setting.speed;
    }
    car.style.left = setting.x + 'px';
    car.style.top = setting.y + 'px';
  
    requestAnimationFrame(playGame);
  
  }
}
  
const changeLevel = event => {
  let target = event.target;
  if (target.textContent === 'Легкий') {
    startSpeed = 3;
    setting.traffic = 3;
  }
  if (target.textContent === 'Средний') {
    startSpeed = 6;
    setting.traffic = 3;
  }
  if (target.textContent === 'Сложный') {
    startSpeed = 6;
    setting.traffic = 2;
  }
};
  
const startGame = (event) => {
  startBtn.forEach(btn => btn.disabled = true);
  changeLevel(event);
  //document.body.append(music);
  music.play();
  gameArea.style.minHeight=(Math.floor((modalContent.clientHeight - HEIGHT_ELEM) / 100)*100)+'px';

  gameArea.innerHTML = '';
  //создаем линии
  for (let i = 0; i < getQuantityElements(HEIGHT_ELEM); i++) {
    const line = document.createElement('div');
    line.classList.add('line');
    line.style.top = (i * HEIGHT_ELEM) + 'px';
    line.style.height = (HEIGHT_ELEM / 2) + 'px';
    line.y = i * HEIGHT_ELEM;
    gameArea.append(line);
  }
  //создаем машинки
  for (let i = 0; i < getQuantityElements(HEIGHT_ELEM * setting.traffic); i++) {
    //создаем другие автомобили
    const enemy = document.createElement('div');
    enemy.classList.add('enemy');
    //100 это высота автомобиля
    enemy.y = -HEIGHT_ELEM * setting.traffic * (i + 1);
    enemy.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) + 'px';
    enemy.style.top = enemy.y + 'px';
    enemy.style.background = `
    transparent
     url("../../../../image/enemy${getRandomEneme(MAX_ENEMY)}.png") 
     center / cover
     no-repeat
     `;
    gameArea.append(enemy);
  }
  
  setting.score = 0;
  setting.start = true;
  gameArea.append(car);
  car.style.left=(gameArea.offsetWidth / 2 - car.offsetWidth / 2)+'px';//ширина дороги и отнять половину ширины авто
  car.style.top = 'auto';
  car.style.bottom = '10px';
  //записываем координати машины в обьект setting
  setting.x = car.offsetLeft;
  setting.y = car.offsetTop;
  requestAnimationFrame(playGame);
};
  
startBtn.forEach(start => start.addEventListener('click', startGame));

document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

}else{

  stopGame()
    
}
}
export default gameCars;