import renderSigns from "./renderSigns.js";
import changeSigns from "./changeSigns.js";
import {getDataStorage} from '../../localStorage.js';
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
        renderSigns();
        changeSigns(dataSigns);

    }
    if(signChange){
        contentSigns.style.display = 'block';
        gorosckopeContent.style.display = 'none';
        showResult(signChange);
    }
    if (signSumisnisty){
        renderSumisnisty()
    }

    gorosckopeContent.addEventListener('click',(e)=>{
        const target = e.target;
        console.log('target: ', target);

        if (target.closest('.image_goroscope')||target.closest('.title')){
            contentSigns.style.display = 'block';
            gorosckopeContent.style.display = 'none';
            renderSigns();
            changeSigns();
        }
    })



}
export default gorosckop;

