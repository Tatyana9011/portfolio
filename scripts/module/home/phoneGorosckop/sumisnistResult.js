import { getDataStorage } from "../../localStorage.js";
import { db, db_result, tableSumisnisty } from "../../stat.js";
import goBack from "./goBack/goBack.js";
import renderSumisnisty from "./renderSumisnisty.js";

const sumisnistResult = ()=>{
    console.log('sumisnistResult: ');
    const sign = getDataStorage('signChange');
    const pair = getDataStorage('sumisnisty');

    const contentSigns = document.querySelector('.content_signs');

    const nameSind0=elem=>elem.name==sign;
    const nameSind1=elem=>elem.name==pair;

    const elemArr0 = db.find(item=>item.name===sign);
    const elemArr1 = db.find(item=>item.name===pair);

    const index0 = db.findIndex(nameSind0);
    const index1 = db.findIndex(nameSind1);

    const namberSumisnosty = tableSumisnisty[index0-1][index1-1];

    contentSigns.innerHTML = `
            <div class='goBack'>
                <img src="./image/Leading.png" alt=""/>
            </div>
    <div class="aroundSign">
        <div class='imageActive'>
            <img src="./image/${elemArr0.nickName} (1).png" alt=""/>
            <div class="labelSign ">
                <p class='label pilcrow'>Сумісність для знаку</p>
                <p class= 'nameSign pilcrow'><b>${elemArr0.name}</b></p>
            </div>
        </div>
    </div>
    <div class="aroundSign">
        <div class='imageActive'>
            <img src="./image/${elemArr1.nickName} (1).png" alt=""/>
            <div class="labelSign ">
                <p class='label pilcrow'>Зі знаком</p>
                <p class= 'nameSign pilcrow'><b>${elemArr1.name}</b></p>
            </div>
        </div>
    </div>

    <div class= 'aroundText'>
        <div class= 'discription' >
            <p class='text '><b>${namberSumisnosty}</b></p> 
            <p class='text '>${db_result[namberSumisnosty-1]}</p>

        </div>
    </div>


   <div class="empti"></div>
   <div class= "resultFooter"> 
       <div class="footer moon">
            <img  src="./image/moonBlack.png" alt=""/>
            <p class=' footerText'>Гороскоп</p>
       </div>
       <div class="footer heart ">
            <img  src="./image/hartOrange.png" alt=""/>
            <p class="footerText  active">Сумісність</p>
       </div>
   </div>
    `
    goBack(elemArr0.name)
    const footerHeart = document.querySelector('.heart')
    footerHeart.addEventListener('click',renderSumisnisty);
}
export default sumisnistResult;