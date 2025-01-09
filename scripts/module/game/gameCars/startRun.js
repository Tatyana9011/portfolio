
import { keys } from "../../state.js";
import removerEventListener from "../../removerEventListener.js";


const startRun = event => {

    event.preventDefault();
    keys[event.key] = true;

    const modalOverlay = document.querySelector('.modal-overlay'); 
    if(modalOverlay.style.display === 'none'){
      removerEventListener('keydown', startRun);
    }

  };
  export default startRun;