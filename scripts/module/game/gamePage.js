import animated from "./animated.js";
import openModal from "../modal/openModal.js";
import gameCars from "./gameCars/gameCars.js";
import boardColor from "./boardColor/boardColor.js";

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
        if(target.closest('#boardColor')){
            openModal()
            boardColor()
        }
    })

}

       
export default gamePage;