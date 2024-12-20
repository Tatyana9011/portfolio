import { db } from "../../stat.js";
import { saveDataJSON } from "../../localStorage.js";


const clickSign = (str,e)=>{
    console.log('str: ', str);
    console.log('e: ', e);
    console.log('clickSign: ');
    const changeButton = document.querySelector('.change');
    const signs = document.querySelector('.signs');
    const allSigns = signs.querySelectorAll('.sign');

    const elem = e.target;
    const sign = elem.closest('.sign');
    const titleElem = sign.querySelector('p').textContent;
    changeButton.classList.add('active');
    const elemArr = db.find(item=>item.name===titleElem)
    saveDataJSON(str, titleElem)
    allSigns.forEach(item=>{
         const activeSign = item.querySelector('.imageActive');
        if(activeSign){
            const titleActive = item.querySelector('p').textContent
            const elemArr = db.find(item=>item.name===titleActive)
            activeSign.classList.remove('imageActive');
            item.innerHTML=`
            <div>
                <img src="./image/${elemArr.nickName}.png" alt=""/>
            </div>
            <p>${titleActive}</p>`
        }
    })
    if (elem.closest('.sign')){
        sign.innerHTML=`
        <div class='imageActive'>
            <img src="./image/${elemArr.nickName} (1).png" alt=""/>
        </div>
        <p>${titleElem}</p>`
    }
}
export default clickSign;