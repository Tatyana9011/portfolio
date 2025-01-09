import { keys } from "../../state.js";
import removerEventListener from "../../removerEventListener.js";

const stopRun = event => {
    event.preventDefault();
    keys[event.key] = false;
    const modalOverlay = document.querySelector('.modal-overlay'); 
    if(modalOverlay.style.display === 'none'){
      removerEventListener('keyup', stopRun);
    };
  }

  export default stopRun;