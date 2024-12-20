import { getDataStorage, saveDataJSON } from '../../localStorage.js';
import { db } from '../../stat.js';
import appendGroup from './SetGroup/appendGroup.js';
import goBack from './goBack/goBack.js';
import sumisnistResult from './sumisnistResult.js';
import clickSign from './clickSign.js';
import showResult from './showResult.js';

const renderSumisnisty =()=>{
    console.log('renderSumisnisty: ');
   
    const sign = getDataStorage('signChange');
    const elemArr = db.find(item=>item.name===sign);
    const contentSigns = document.querySelector('.content_signs');

    contentSigns.innerHTML = `
        <div class='goBack'>
            <img src="./image/Leading.png" alt=""/>
        </div>
        <div class="aroundSign">
            <div class='imageActive'>
                <img src="./image/${elemArr.nickName} (1).png" alt=""/>
                <div class="labelSign ">
                 <p class='label '>Сумісність для знаку</p>
                 <p class= 'nameSign '><b>${elemArr.name}</b></p>
                </div>
            </div>
        </div>
        <div class = "signs">
        </div>
        <button class="change">Продовжити</button>
          <br/><div class="empti"></div>
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
       
       
       appendGroup()
       goBack(elemArr.name)

       const signs = document.querySelector('.signs');
       signs.addEventListener('click', clickSign.bind(this,'sumisnisty'))

        const button = document.querySelector('.change');
        button.addEventListener('click',sumisnistResult) 

        const footer = document.querySelector('.resultFooter')
        footer.addEventListener('click',(e)=>{
            const target = e.target;

            if(target.closest('.moon')){

                showResult(elemArr.name)
            }
            if(target.closest('.heart')){
                alert('Обери знак зодіаку, щоб дізнатися сумісність')
            }

        });
       
       

}
export default renderSumisnisty;