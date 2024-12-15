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

