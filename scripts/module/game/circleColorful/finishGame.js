import {objScore} from "../../state.js";
import circleColorful from "./circleColorful.js";

export default function finishGame(idUnterval) {
    const timeEl = document.querySelector('#time'); 
    const board = document.querySelector('#board');
    clearInterval(idUnterval);

    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `
    <div id="finishGameContent">
      <h4>Рахунок: <span class="primary">${objScore.score}</span></h4>
      <h3 class="startGame_btn">Грати ще</h3>
    </div>`;
    
    const startGame = document.querySelector('.startGame_btn');
    
    startGame.addEventListener('click',()=>{
      board.innerHTML='';
      circleColorful()
    })
}
   
  