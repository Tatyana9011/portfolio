import renderSigns from "../renderSigns.js";
import changeSigns from "../changeSigns.js";

const goBack=(name)=>{
    const back = document.querySelector('.goBack');

    back.addEventListener('click',()=>{
        renderSigns();
        changeSigns(name);
    })
}
export default goBack;