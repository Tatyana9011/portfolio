import snackAnimation from './snackAnimation.js';

const stopSnackGame = (game)=>{

const startGameBtn = document.querySelector('.startGame_btn');

    startGameBtn?startGameBtn.addEventListener('click', snackAnimation):false;
    startGameBtn?startGameBtn.style.cssText='opacity:1; cursor:pointer;':false;

const modalOverlay = document.querySelector('.modal-overlay');
    
    clearInterval(game);

    if(modalOverlay.style.display !== 'none'){
        alert('Game Over!');
    }
         return;
}
export default stopSnackGame;