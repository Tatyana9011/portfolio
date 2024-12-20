import { db } from '../../stat.js'
import showResult from './showResult.js';
import {saveDataJSON, removeDataStorage, getDataStorage} from '../../localStorage.js';
import clickSign from './clickSign.js';

const changeSigns = (dataSigns)=>{
    console.log('changeSigns: ');

    const signs = document.querySelector('.signs');
    const allSigns = signs.querySelectorAll('.sign');
    const changeButton = document.querySelector('.change');
    let titleElem;

    if(dataSigns){
        const elemArr = db.find(item=>item.name===dataSigns)
        changeButton.classList.add('active');
        allSigns.forEach(sign=>{

            if(sign.querySelector('p').textContent===dataSigns){
                console.log('querySelector: ');
                
                    sign.innerHTML=`
                    <div class='imageActive'>
                        <img src="./image/${elemArr.nickName} (1).png" alt=""/>
                    </div>
                    <p>${dataSigns}</p>`

            }
        })
  }
  
    signs.addEventListener('click', clickSign.bind(this,'signs'))

    changeButton.addEventListener('click',()=>{
        console.log('changeButton: ');
        const getData = getDataStorage('signs')||getDataStorage('signChange');

        if(getData){
            removeDataStorage('signs')
            saveDataJSON('signChange', getData)
            showResult(getData)
        }
             
    })
}
export default changeSigns;