const animetidCarusel =()=>{
    console.log('animetidCarusel: ');

// You can change global letiables here:
let radius = 240; // how big of the radius
let autoRotate = true; // auto rotate or not
let rotateSpeed = -60; // unit: seconds/360 degrees
let imgWidth = 120; // width of images (unit: px)
let imgHeight = 170; // height of images (unit: px)

// animation start after 1000 miliseconds
setTimeout(init, 1000);
//щоб не створювати два слухателя собітий убираем цей елемент і фукнцію для неї в home page
const draggable = document.querySelector('#draggable');
if(draggable)draggable.remove();

const odrag = document.getElementById('drag-container');//драг контейнер (его не видно наєкране но он влияем на положение картинок)
const ospin = document.getElementById('spin-container');
const aImg = ospin.getElementsByTagName('img');
let aEle = [...aImg]; // combine 2 arrays

// Size of images
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

//встановлюємо стилі для кожної картинки
function init(delayTime) {
  for (let i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

//трансформируем драг контейнер
function applyTranform(obj) {
  // Constrain the angle of camera (between 0 and 180)
  if(tY > 180) tY = 180;
  if(tY < 0) tY = 0;

  // Apply the angle
  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes?'running':'paused');
}

let sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

// auto spin
if (autoRotate) {
  let animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// setup events
document.onpointerdown = function (e) { //натиснули клавішу миші
  clearInterval(odrag.timer);
  e = e || window.event;
  let sX = e.clientX,
      sY = e.clientY;

  this.onpointermove = function (e) { //рухаемо мишкою з натисненою клавішею миші
    e = e || window.event;
    let nX = e.clientX,
        nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {  //отпустили клавішу миші
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

                                           
}

export default animetidCarusel;