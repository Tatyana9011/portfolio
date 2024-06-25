import handleInput from './handleInput.js';


const newGame = ()=>{



    const modalContent = document.querySelector('#modal_content');
        modalContent.innerHTML = ` <div class="screen">
        <button class="time-btn">Start Game</button>
        <canvas id="myCanvas" width="450" height="450"></canvas>
        </div>`

        
        handleInput()
  


 
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