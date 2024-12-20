import stopSnackGame from "./stopSnackGame.js";
import removerEventListener from "../../removerEventListener.js";

const animation = (bool) => {
    console.log('animation: ');
    let direction = 'right';
    let gameInterval;
    const modalOverlay = document.querySelector('.modal-overlay');


    function handleInput(event) {

      if (event.key === 'ArrowLeft' && direction !== 'RIGHT'){
        removerEventListener('keydown', handleInput); // Remove old listeners
        return direction = 'left';
      } 
      if (event.key === 'ArrowRight' && direction !== 'LEFT') {
        removerEventListener('keydown', handleInput); // Remove old listeners  
        return direction = 'right';
      }
        
      if (event.key === 'ArrowUp' && direction !== 'DOWN') {
        removerEventListener('keydown', handleInput); // Remove old listeners  
        return  direction = 'up';
      }
        
      if (event.key === 'ArrowDown' && direction !== 'UP') {
        removerEventListener('keydown', handleInput); // Remove old listeners
        return  direction = 'down';
      }
     
    }

    if (bool) {
     
      const canvas = document.getElementById('myCanvas');
      let ctx = canvas.getContext('2d');
      const box = 20;
      let snake = [{x:10*box, y:10*box}];
      let food = {
            x: Math.floor(Math.random() * (canvas.width / box)) * box,
            y: Math.floor(Math.random() * (canvas.height / box)) * box,
            };

  function drawRect(color, x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, box, box);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x, y, box, box);
  }  

  function drawGame() {
    console.log('drawGame: ');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Draw the food
    drawRect('red', food.x, food.y);
  
    // Draw the snake
    for (let segment of snake) {
      drawRect('green', segment.x, segment.y);
    }
  
    // Move the snake
    let head = { ...snake[0] };
  
    if (direction === 'left') head.x -= box;
    if (direction === 'right') head.x += box;
    if (direction === 'up') head.y -= box;
    if (direction === 'down') head.y += box;
    // Check for collisions with walls or itself
    if (
      head.x+20 < 0 ||
      head.x >= canvas.width+20 ||
      head.y+20 < 0 ||
      head.y >= canvas.height+20 ||
      snake.some(segment => segment.x === head.x && segment.y === head.y)||
      modalOverlay.style.display === 'none'
    ) {

      stopSnackGame(gameInterval)
        return;
    }
  
    // Check if food is eaten
    if (head.x === food.x && head.y === food.y) {
      food = {
        x: Math.floor(Math.random() * (canvas.width / box)) * box,
        y: Math.floor(Math.random() * (canvas.height / box)) * box,
      };
    } else {
      snake.pop(); // Remove the last segment if no food is eaten
    }

    snake.unshift(head); // Add new head to the snake

    document.addEventListener('keydown', handleInput); // Add fresh listeners
  }

  if (gameInterval) clearInterval(gameInterval); // Stop previous game loop

  gameInterval = setInterval(drawGame, 500); // Start new game loop

}else{

  stopSnackGame(gameInterval);
  
}



};
export default animation;