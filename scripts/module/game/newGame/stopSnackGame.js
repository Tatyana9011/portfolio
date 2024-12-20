import removeEventListener from'../../removerEventListener.js'


const stopSnackGame = (game)=>{
    console.log('stopSnackGame: ');

    const modalOverlay = document.querySelector('.modal-overlay');
    
    clearInterval(game);

    if(modalOverlay.style.display !== 'none'){
        alert('Game Over!');
    }
         return;
    
}
export default stopSnackGame;