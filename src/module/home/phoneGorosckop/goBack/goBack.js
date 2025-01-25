import renderSigns from "../renderSigns.js";
import changeSigns from "../changeSigns.js";
import renderSumisnisty from "../renderSumisnisty.js";
import { removeDataStorage } from "../../../localStorage.js";
const goBack=(name, str)=>{

    const back = document.querySelector('.goBack');

    back.addEventListener('click',()=>{
       if(str==="signChange"){
        renderSigns(); //відображає всі знаки 
        changeSigns(name, str); //виділяе активним наш знак
        removeDataStorage("sumisnisty")
       }
       if(str==="sumisnisty"){
            removeDataStorage("sumisnisty")
            renderSumisnisty();
        }
    })
}
export default goBack;