const rendalModalCart = ()=>{
    const modalContent = document.querySelector('#modal_content');
    modalContent.innerHTML = `
    <div class="score"></div>
    <div class="game_modal">
        <div div class="start"> 
            Начать игру! <br>
            <button>Легкий</button>
            <button>Средний</button>
            <button>Сложный</button>
        </div>
        <div class="gameArea"></div>
    </div>`
}
export default rendalModalCart;
