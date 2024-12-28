import { db } from "../../state.js";
import { saveDataJSON, getDataStorage } from "../../localStorage.js";
import activeSign from "./activeSign.js";


//добавляем активную линку на другой знак при клике + показіваем кнопку продолжить 
const clickSign = (str,e)=>{
    console.log('clickSign: ');
    const changeButton = document.querySelector('.change');
    const signs = document.querySelector('.signs');
    const allSigns = signs.querySelectorAll('.sign');

    const elem = e.target;
    const sign = elem.closest('.sign');
    const element = sign.querySelector('p');

    if(element){
       const titleElem = element.textContent;
        changeButton.classList.add('active');
        const elemArr = db.find(item=>item.name===titleElem)

        if(!str&&elemArr){
            saveDataJSON('signs', titleElem)
        }else{
            saveDataJSON(str, titleElem) 
        }

        allSigns.forEach(item=>activeSign(item))

        if (elem.closest('.sign')){
            sign.innerHTML=`
            <div class='imageActive'>
                <img src="./image/${elemArr.nickName} (1).png" alt=""/>
            </div>
            <p>${titleElem}</p>`
        }

    }
   
  

}
export default clickSign;