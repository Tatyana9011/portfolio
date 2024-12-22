import { removeDataStorage } from '../../localStorage.js';
import {db} from '../../state.js';
import goBack from './goBack/goBack.js';

import renderSumisnisty from './renderSumisnisty.js';

const showResult=(title)=>{
    console.log('showResult: ', title);

    const contentSigns = document.querySelector('.content_signs');
   
    const elemArr = db.find(item=>item.name===title);

    const cleanedText = elemArr.textDescrib.replace(/“.*?”/g, '');
    const matches = elemArr.textDescrib.match(/“(.*?)”/g);
    const result = matches ? matches[matches.length - 1].slice(1, -1) : '';
   
    contentSigns.innerHTML = `
            <div class='goBack'>
                <img src="./image/Leading.png" alt=""/>
            </div>
    <div class="aroundSign">
        <div class='imageActive'>
            <img src="./image/${elemArr.nickName} (1).png" alt=""/>
            <div class="labelSign ">
                <p class='label pilcrow'>Прогноз для знаку</p>
                <p class= 'nameSign pilcrow'><b>${elemArr.name}</b></p>
            </div>
        </div>
    </div>
    <div class= 'aroundText'>
        <div class= 'discription' >
            <p class='text '>${elemArr.discription}</p> 
            <p class='text '>${cleanedText}</p>
            <p><b>${result}</b></p>
        </div>
    </div>

    <div class="result gun">
        <img  src="./image/gun.png" alt=""/>
        <p class='gunText pilcrow'><b>Зброя-талісман</b></p>
    </div>
    <p class="pilcrow">${elemArr.gun}</p>
    
    <div class="result moon">
        <img  src="./image/moon.png" alt=""/>
        <p class='gunText pilcrow'><b>Гороскоп на 2024</b></p>
    </div>
    <p class="pilcrow">${elemArr.advaic}</p>
    <div class="result cube">
        <img  src="./image/cube.png" alt=""/>
        <p class='gunText pilcrow'><b>Щасливі числа</b></p>
    </div>
    <p class="pilcrow">${elemArr.number}</p>
<br/><div class="empti"></div>
    <div class= "resultFooter"> 
        <div class="footer moon">
             <img  src="./image/moon.png" alt=""/>
             <p class='pilcrow footerText active'>Гороскоп</p>
        </div>
        <div class="footer heart">
             <img  src="./image/HardBlackColor.png" alt=""/>
             <p class="pilcrow footerText">Сумісність</p>
        </div>
    </div>
    `
 
    goBack(elemArr.name,'signChange')

   const footerHeart = document.querySelector('.heart')
   
    footerHeart.addEventListener('click',renderSumisnisty);
}
export default showResult;