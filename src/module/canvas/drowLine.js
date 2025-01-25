import userWidth from "../userWidth.js";

const drowLine =(lineW='3',param='album')=>{

    const canvasWidth= document.querySelector('.canvas_width'),
    iconGetCanvas = document.querySelector('.icon_getCanvas'),
    colorInput=document.querySelector('.color'),
    paramBook = document.querySelector('.book'),
    paramAlbum = document.querySelector('.album'),
    user = userWidth(param);
    const drowLineCanvas = document.querySelector('.drowLine');
    if(drowLineCanvas){
      drowLineCanvas.remove();
    }
  let newCanvas = document.createElement('canvas');
  newCanvas.classList.add('drowLine');
  newCanvas.style.position = 'absolute';

  newCanvas.style.cssText=` 
  z-index:2000;
  width: ${user[0]}px; height: ${user[1]}px; 
  position: absolute;
  cursor: url(image/free_icon_pencil_4277132.png), pointer;
  margin: 20px 60px;
  border-radius: 5px;
  background: transparent;
  border: 2px solid #ffffff;
  box-shadow: 9px 9px 10px #505562;`
  canvasWidth.appendChild(newCanvas);
    let color = colorInput.value;//определяем цвет линии
    let ctx = newCanvas.getContext('2d');
       ctx.strokeStyle=color;
       ctx.lineWidth = lineW;
 newCanvas.addEventListener('mousemove', (event) => {
 let x=null, y=null,
 mx = event.movementX,  //координаты указателя мыши относительно позиции последнего события mousemove
 my = event.movementY;

 if (event.buttons > 0) {  //теперь рисуем при нажатии мыши
    if(paramAlbum.classList.contains('active')){
      x = (event.offsetX*47/100),  //получаем координаты квадрата  
      y = (event.offsetY*50/100);
    }
    if(paramBook.classList.contains('active')){
      x = (event.offsetX*110/100),  //получаем координаты квадрата  
      y = (event.offsetY*45/100);
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