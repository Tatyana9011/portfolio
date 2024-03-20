import { getDataStorage } from "./localStorage.js";

export const setting = {
    start: false,
    score: 0,
    speed: 3,
    traffic: 3, //задает сложность игры  расстояние между машинками 2,5 машини
    record: getDataStorage('score'),
  };

  export const music = new Audio('../../../../music/muzyka-dlya-igr-15.mp3');

  export const weatherIcon = {
    cloud:`<ion-icon name="cloud-outline"></ion-icon>`,
    rainy:`<ion-icon name="rainy-outline"></ion-icon>`,
    thunderstorm:`<ion-icon name="thunderstorm-outline"></ion-icon>`, //гроза
    partlySunny: `<ion-icon name="partly-sunny-outline"></ion-icon>`,
    sun:`<ion-icon name="sunny-outline"></ion-icon>`,
  }

  // export const w = width/3;
 // export const h = hight/2;

  export const userWidth =()=>{
    const hight = document.documentElement.clientHeight;  //получаем размеры видимонго окна
    const width = document.documentElement.clientWidth;
    let w = 300;
    let h =200;

    if(width>1200&&hight>500){
      w = Math.floor(width/3);
      h = Math.floor(hight/2);
      return [w,h];
    }else if(width<1200&&hight<500){
      w = Math.floor(width/3);
      h = Math.floor(hight/2);
      return [w,h];
    }
  }