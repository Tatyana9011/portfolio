const boardColor = ()=>{
    console.log('boardColor: ');
       
    const modalContent = document.querySelector('#modal_content');
    modalContent.innerHTML = `
    <div class="container" id="board"></div>`
    
    const board = document.querySelector('#board');
    const SQUARES_NUMBER = 1000;
    const colors = ['rgb(228, 169, 169)', 'rgb(120, 219, 145)', 'rgb(95, 126, 228)', 'rgb(235, 236, 145)', 'rgb(241, 172, 67)'];
    
    for (let i = 0; i < SQUARES_NUMBER; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
    
      square.addEventListener('mouseover', () => {
        setColor(square);
      });
      square.addEventListener('mouseleave', () => {
        removeColor(square);
      });
    
      board.append(square);
    }
    
    function setColor(elem) {
      const color = getRandomColor()
      elem.style.backgroundColor = color;
      elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    }
    function removeColor(elem) {
      elem.style.backgroundColor = '#1d1d1d';
      elem.style.boxShadow = `0 0 2px #000`;
    }
    function getRandomColor() {
      const index = Math.floor(Math.random() * colors.length);
      return colors[index];
    }

}

       
export default boardColor;