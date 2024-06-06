const drowLine =(lineW='3')=>{
  console.log('color,lineW=,user: ', lineW);
    const canvas = document.querySelector('#getCanvas'),
    iconGetCanvas = document.querySelector('.icon_getCanvas'),
    colorInput=document.querySelector('.color'),
    paramBook = document.querySelector('.book'),
    paramAlbum = document.querySelector('.album');


    let color = colorInput.value;//определяем цвет линии
    console.log('color: ', color);
    let ctx = canvas.getContext('2d');
    console.log('ctx: ', ctx.height, ctx.width);
       ctx.strokeStyle=color;
       ctx.lineWidth = lineW;
const newImage = canvas.value
canvas.addEventListener('mousemove', (event) => {
 let x=null, y=null,
 mx = event.movementX,  //координаты указателя мыши относительно позиции последнего события mousemove
 my = event.movementY;

 if (event.buttons > 0) {  //теперь рисуем при нажатии мыши
    if(paramAlbum.classList.contains('active')){
      x = (event.offsetX*47/100),  //получаем координаты квадрата  
      y = (event.offsetY*65/100);
    }
    if(paramBook.classList.contains('active')){
      x = (event.offsetX*110/100),  //получаем координаты квадрата  
      y = (event.offsetY*60/100);
      mx=mx*2;

    }

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