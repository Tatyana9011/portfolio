import animation from "./SnackAnimation.js";
import {saveDataJSON, removeDataStorage} from "../../localStorage.js"

const newGame = ()=>{
    saveDataJSON('game','snack')


    const modalContent = document.querySelector('#modal_content');
        modalContent.innerHTML = ` <div class="screen">
        <button class="startGame_btn">Start Game</button> 
        <div class= "text_info">
            <p>Для гри використовуйте клавіші на клавіатурі:</p>
            <div class="all_button">
                <button class="keyLeft"><ion-icon name="arrow-back-outline"></ion-icon></button>
                <div class="groupUpDown">

                    <button class="keyUp"><ion-icon name="arrow-up-outline"></ion-icon></button>
                    <button class="keyDown"><ion-icon name="arrow-down-outline"></ion-icon></button>
            
                </div>
                <button class="keyRight"><ion-icon name="arrow-forward-outline"></ion-icon></button>
            </div>
        </div>
        <canvas id="myCanvas" width="460" height="460"></canvas>
        </div>`
        const startGame = document.querySelector('.startGame_btn');
       
        startGame.addEventListener('click', animation.bind(event,true));

                     
}                                                                                                                 
export default newGame;


/* 
// Starting a game loop
gameLoop();


// Game level state

let gameState = 'running';

// Handling game completion

function gameOver() {

    gameState = 'gameover';

    // Additional actions when finishing the game

}

*/