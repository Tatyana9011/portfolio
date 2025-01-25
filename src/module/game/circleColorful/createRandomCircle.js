import getRandomNumber from '../../getRandomNumber.js'
import getRandomColor from '../../getRandomColor.js';

export default function createRandomCircle() {
    const board = document.querySelector('#board');
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    
    const { width, height } = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
  
    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.background = getRandomColor();
    board.append(circle);
  }

