import initCiecleGame from "./initCiecleGame.js";
import renderCircleGame from "./renderCircleGame.js";
import createRandomCircle from "./createRandomCircle.js";
import {objScore} from "../../state.js";

const circleColorful= ()=>{

renderCircleGame()
initCiecleGame()

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    objScore.score++;
    event.target.remove();
    createRandomCircle();
  }
})

}



export default circleColorful;