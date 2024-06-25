



const animation = (arrow) => {

const canvas = document.getElementById('myCanvas');
let tick = 0;
let tickX = 0;
let tickY = 0;
let ctx = canvas.getContext('2d');


ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
ctx.fillStyle = 'blue';
ctx.fillRect(tick, tick, 20, 20); // (x, y, width, height)

if(arrow=='up'&&tickX>=0){

tickX--;

}
if(arrow=='down'&&tickX<430){
tickX++;
}
if(arrow=='left'&&tickY>=0){
tickY++;
}
if(arrow=='right'&&tickY<430){
    tickY++;
}


if (tickX < 430||tickY < 430||tickY >=0||tickX >=0) {
requestAnimationFrame(animation);
} else{
    stopGame()
}


};
export default animation;