
const animation = () => {
    console.log('animation: ');

const canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let direction = 'rigft'
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Draw the food
    drawRect('red', food.x, food.y);
  
    // Draw the snake
    for (let segment of snake) {
      drawRect('green', segment.x, segment.y);
      console.log('segment.x, segment.y: ', segment.x, segment.y);
    }
  
    // Move the snake
    let head = { ...snake[0] };
  
    if (direction === 'left') head.x -= box;
    if (direction === 'rigft') head.x += box;
    if (direction === 'up') head.y -= box;
    if (direction === 'down') head.y += box;
  console.log('head.x',head.x,head.y );
    // Check for collisions with walls or itself
    if (
      head.x < 0 ||
      head.x >= canvas.width ||
      head.y < 0 ||
      head.y >= canvas.height ||
      snake.some(segment => segment.x === head.x && segment.y === head.y)
    ) {
      clearInterval(game);
      alert('Game Over!');
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
  }

  function handleInput(event) {
    console.log('handleInput: ');

    if (event.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'left';
    if (event.key === 'ArrowRight' && direction !== 'LEFT') direction = 'right';
    if (event.key === 'ArrowUp' && direction !== 'DOWN') direction = 'up';
    if (event.key === 'ArrowDown' && direction !== 'UP') direction = 'down';

}
  
document.addEventListener('keydown',handleInput);

const game = setInterval(drawGame, 500);

};
export default animation;