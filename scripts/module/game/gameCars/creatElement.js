import getRandomEneme from "./getRandomEneme.js";
import { setting } from "../../state.js";
const createElement = (selector, contaner, count, height) =>{
        const MAX_ENEMY = 7;
        const MAX_TREE = 4;
        const elem = document.createElement('div'); //создаем елементи для обьектов на обочине, линии на дороге и автомобили
        elem.classList.add(selector);

        if(selector==='enemy'){
            //100 это высота автомобиля
            elem.y = -height * setting.traffic * (count + 1);
            elem.style.left = Math.floor(Math.random() * (contaner.offsetWidth - 50)) + 'px';
            elem.style.top = elem.y + 'px';
            elem.style.background = `
            transparent
            url("../../../../image/enemy${getRandomEneme(MAX_ENEMY)}.png") 
            center / cover
            no-repeat
            `;
        }else if(selector==='tree'||selector==='line'){
            elem.style.top = (count * height) + 'px';
            elem.style.height = (height / 2) + 'px';
            elem.y = count * height;
        }

        if(selector==='tree'){
            
            elem.style.background = `
            transparent
            url("../../../../image/tree${getRandomEneme(MAX_TREE)}.png") 
            center / cover
            no-repeat
            `;

            if(count%2){
                elem.style.left = (getRandomEneme(60)) + 'px';
            }
            elem.style.right = (getRandomEneme(60)) + 'px';
             
        }
       
   contaner.append(elem);
}

export default createElement;