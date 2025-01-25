import {escapeHandler} from "./openModal.js"
import {getDataStorage, removeDataStorage} from "../localStorage.js"
import gameCars from "../game/gameCars/gameCars.js";
import snackAnimation from "../game/newGame/snackAnimation.js";


const closeModal = () => {
   const modalOverlay = document.querySelector('.modal-overlay'),
   modal = document.querySelector('.modal');

  let game = getDataStorage('game')

    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
    document.removeEventListener('keydown', escapeHandler);
    
    document.body.classList.remove('no-scroll'); // Включаем прокрутку

    if(game==='car'){
        gameCars(false);
        removeDataStorage('game')
  
    }
    if(game==='snack'){
        snackAnimation(false)
        removeDataStorage('game')
    }
};


export default closeModal;