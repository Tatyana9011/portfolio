import { db } from '../../state.js'
import clickSign from './clickSign.js';
import { getDataStorage, saveDataJSON,removeDataStorage } from '../../localStorage.js';
import showResult from './showResult.js';
import sumisnistResult from './sumisnistResult.js';

const changeSigns = (dataSigns, str)=>{
        
    const signs = document.querySelector('.signs');
    const allSigns = signs.querySelectorAll('.sign');
    const changeButton = document.querySelector('.change');


    if(dataSigns&&str==='signChange'){ //виділяемо активним наш знак
        const elemArr = db.find(item=>item.name===dataSigns)
        changeButton.classList.add('active');

        allSigns.forEach(sign=>{

            if(sign.querySelector('p').textContent===dataSigns){
                
                    sign.innerHTML=`
                    <div class='imageActive'>
                        <img src="${require(`../../../assets/images/${elemArr.nickName} (1).png`)}" alt=""/>
                    </div>
                    <p>${dataSigns}</p>`

            }
        })
        
     }else if(dataSigns&&str==='signs'){
        console.log('dataSigns&&str==', dataSigns);
     }
  //в будь якому разі чи є в локал сторідж чи ні на все знаки зодіаку ставимо клік
    signs.addEventListener('click', clickSign.bind(this,str)) //добавляем активную линку на другой знак при клике

    //добавляем слушатель клика на кнопку
    changeButton.addEventListener('click',()=>{

        const data = getDataStorage('signChange')||getDataStorage('signs');
        changeButton.classList.remove('active');

        if(data||str==='signChange'||str==='signs'){
            saveDataJSON('signChange', data)
            removeDataStorage('signs');
            showResult(data)
        }
        if(str==='sumisnisty'){
            sumisnistResult();
        }
             
    })

}
export default changeSigns;