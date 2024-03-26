const drowLine =(lineW='3',user)=>{
  console.log('color,lineW=,user: ', lineW,user);
    const canvas = document.querySelector('#getCanvas'),
    iconGetCanvas = document.querySelector('.icon_getCanvas'),
    colorInput=document.querySelector('.color');

    let color = colorInput.value;
    console.log('color: ', color);
    console.log('canvas.width: ', canvas.width);

let ctx = canvas.getContext('2d');
ctx.strokeStyle=color;
ctx.lineWidth = lineW;




canvas.addEventListener('mousemove', (event) => {
  const x = (event.offsetX*47/100),  //получаем координаты квадрата  
    y = (event.offsetY*65/100),
    //координаты указателя мыши относительно позиции последнего события mousemove
    mx = event.movementX,
    my = event.movementY;
    

  if (event.buttons > 0) {  //теперь рисуем при нажатии мыши
    iconGetCanvas.style.display = 'none';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + mx, y + my);
    ctx.stroke();
    ctx.closePath();
  }

})

}

export default drowLine;