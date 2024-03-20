import animated from "./animated.js";
import openModal from "../modal/openModal.js";
import gameCars from "./gameCars/gameCars.js";

const gamePage = ()=>{
    console.log('gamePage: ');
    const gamePage = document.querySelector('.game');
    animated()

    gamePage.addEventListener('click',(event)=>{
        let target = event.target;
        
        if(target.closest('#car')){
            openModal()
            gameCars(true)
        }
    })

}

       
export default gamePage;