const renderCircleGame =()=>{
  console.log('renderCircleGame: ');
    const modalContent = document.querySelector('#modal_content');
    modalContent.innerHTML = `
  <div class="screen">
    <h1>Выберите время</h1>
    <ul id="time-list" class="time-list">
      <li>
        <button class="time-btn" data-time="10">
          10 сек
        </button>
      </li>
      <li>
        <button class="time-btn" data-time="20">
          20 сек
        </button>
      </li>
      <li>
        <button class="time-btn" data-time="30">
          30 сек
        </button>
      </li>
      <li>
        <button class="time-btn" data-time="45">
          45 сек
        </button>
      </li>
    </ul>
  </div>
  <div class="screen">
    <h3>Осталось <span id="time">00:00</span></h3>
    <div class="board" id="board"></div>
  </div>`
}
export default renderCircleGame;