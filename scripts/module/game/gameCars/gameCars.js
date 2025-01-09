import {saveDataJSON} from "../../localStorage.js"
import stopGame from "./stopGame.js";
import { setting, music, keys } from "../../state.js";
import startRun from "./startRun.js";
import stopRun from "./stopRun.js";
import rendalModalCart from "./rendalModalCart.js";
import createElement from "./creatElement.js";
import changeLevel from "./changeLevel.js";

const gameCars =(bool)=>{
  console.log('gameCars: ');
 if(bool){
    saveDataJSON('game','car')
    rendalModalCart();

const HEIGHT_ELEM = 100;
const score = document.querySelector('.score'),
  gameArea = document.querySelector('.gameArea'),
  car = document.createElement('div'),//створюємо елемент для машинки
  startBtn = document.querySelectorAll('.start button'),
  modalContent = document.querySelector('#modal_content'),
  gameModal = document.querySelector('.game_modal');
  
  music.volume = 0.05;

  car.classList.add('car');
  
 
function getQuantityElements(heightElement) {
  //сколько елементов (количество машин) поместется на странице
  return (gameArea.offsetHeight / heightElement) + 1;
}

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
const moveTree = () => {
  let trees = document.querySelectorAll('.tree');
  
  trees.forEach((tree,i) => {
    tree.y += setting.speed;
    tree.style.top = tree.y + 'px';

    //если высота больше чем высота страници
    if (tree.y >= gameArea.offsetHeight) {
      tree.y = -HEIGHT_ELEM;  //ховаємо елемент убіраючи його висоту
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
  
    enemy.y += setting.speed / 2; //скорость появления машин
    enemy.style.top = enemy.y + 'px';//увеличевается растояние от верха
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
  
    setting.speed = setting.startSpeed + Math.floor(setting.score / 5000);

    moveTree();//добавляемо обочіну як при русі авто
    moveRoad(); //добавляемо лінії на дорозі для враження що авто рухаеться
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
  
const startGame = (event) => {
//якщо гравець перезапускає гру - убираемо обочіну від кущів
  const trees = gameModal.querySelectorAll('.tree');
  trees.forEach(tree => tree.remove());

  startBtn.forEach(btn => {
    btn.disabled = true;
    btn.style.color="#c3c1c1";
    btn.style.cursor = "default";
  });
  changeLevel(event);
  
  music.play();
  //визначаємо висоту дороги
  gameArea.style.minHeight=(Math.floor((modalContent.clientHeight - HEIGHT_ELEM) / 100)*100)+'px';
    
  gameArea.innerHTML = '';

  //создаем линии и обочину
  for (let i = 0; i < getQuantityElements(HEIGHT_ELEM); i++) {
    createElement('line', gameArea,i, HEIGHT_ELEM)
    createElement('tree', gameModal,i, HEIGHT_ELEM-20) //создаем кустики на обочине
  }

  //создаем машинки
  for (let i = 0; i < getQuantityElements(HEIGHT_ELEM * setting.traffic); i++) {
    createElement ('enemy', gameArea, i, HEIGHT_ELEM)
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
  removeEventListener('click', startGame)
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