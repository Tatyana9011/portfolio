import renderSigns from "./renderSigns.js";
import changeSigns from "./changeSigns.js";
import {getDataStorage, saveDataJSON} from '../../localStorage.js';
import showResult from "./showResult.js";
import renderSumisnisty from "./renderSumisnisty.js";
const gorosckop = ()=>{
    console.log('gorosckop: ');

    const gorosckopeContent = document.querySelector('.phone_content');
    const contentSigns = document.querySelector('.content_signs');

    const dataSigns = getDataStorage('signs');
    const signChange = getDataStorage('signChange');
    const signSumisnisty = getDataStorage('sumisnisty');

    if(dataSigns){
        contentSigns.style.display = 'block';
        gorosckopeContent.style.display = 'none';
        renderSigns(); //страница со всеми знаками
        changeSigns(dataSigns,'signs'); //если уже выбирали знак он отобразится активним если нет то ничего
    }
    if(signChange){ //ми уже определились со своим знаком то рендерится таблица с гороскопом
        contentSigns.style.display = 'block';
        gorosckopeContent.style.display = 'none';
        showResult(signChange);
    }                    //ми уже определились со своим знаком и нажали на сумісність 
    if (signSumisnisty){ //виводимо сторінку зі своїм знаком и всіма іншими, що б вибрати пару
        renderSumisnisty()
    }
//якщо нічого нема в локальній памяті висвічується перша сторінка сайту
    gorosckopeContent.addEventListener('click',(e)=>{
        const target = e.target;

        if (target.closest('.image_goroscope')||target.closest('.title')){
            contentSigns.style.display = 'block';
            gorosckopeContent.style.display = 'none';
            renderSigns();
            changeSigns();
        }
    })



}
export default gorosckop;

