import { getDataStorage, saveDataJSON } from '../../localStorage.js';
import { db } from '../../state.js';
import appendGroup from './SetGroup/appendGroup.js';
import goBack from './goBack/goBack.js';
import sumisnistResult from './sumisnistResult.js';
import clickSign from './clickSign.js';
import showResult from './showResult.js';
import scrollTopII from '../../scrollTopII.js';
const renderSumisnisty =()=>{
   
    const sign = getDataStorage('signChange'); //який в нас знак зодіаку 
    const elemArr = db.find(item=>item.name===sign);
    const contentSigns = document.querySelector('.content_signs');

    contentSigns.innerHTML = `
        <div class='goBack'>
            <img src="${require(`../../../assets/images/Leading.png`)}"alt=""/>
        </div>
        <div class="aroundSign">
            <div class='imageActive'>
                <img src="${require(`../../../assets/images/${elemArr.nickName} (1).png`)}" alt=""/>
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
             <img  src="${require(`../../../assets/images/moonBlack.png`)}"  alt=""/>
             <p class=' footerText'>Гороскоп</p>
        </div>
        <div class="footer heart ">
             <img  src="${require(`../../../assets/images/hartOrange.png`)}" alt=""/>
             <p class="footerText  active">Сумісність</p>
        </div>
    </div>
        ` 
       appendGroup() //рендерить всі групи знаків на торінку
       

       const signs = document.querySelector('.signs');
       signs.addEventListener('click', clickSign.bind(this,'sumisnisty'))

       const changeButton = document.querySelector('.change');
        //добавляем слушатель клика на кнопку
        changeButton.addEventListener('click',sumisnistResult);
       // scrollTopII('phone_content',)
        const footer = document.querySelector('.resultFooter')
        footer.addEventListener('click',(e)=>{

            const bool =  changeButton.classList.contains("active");
            const target = e.target;

            if(target.closest('.moon')){

                showResult(elemArr.name)

            }
            if(target.closest('.heart')&&!bool){
                alert('Обери знак зодіаку, щоб дізнатися сумісність')
            }else if(target.closest('.heart')&&bool){
                sumisnistResult();
            }

        });

        goBack(elemArr.name,'signChange') //якщо натиснути всі знаки то поверне до сторінки вибрати знак зодіаку
       scrollTopII('.content_signs');

}
export default renderSumisnisty;