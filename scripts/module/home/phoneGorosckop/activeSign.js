import { db } from "../../state.js";
const activeSign = (item)=>{
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
}
export default activeSign;