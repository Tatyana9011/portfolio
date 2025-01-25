'use strict';
import userWidth from '../userWidth.js';
import keydownET from './keydownET.js';
import blurF from './blurF.js';
import addFilterColor from './addFilterColor.js';
import rainbow from './rainbow.js';
import setCanvasWidthAndHeight from './setCanvasWidthAndHeight.js';
import scrollCanvas from './scrollCanvas.js';

const canvas = ()=>{

const fileinput = document.getElementById("finput"),
page= document.querySelector(".imageCanvas"),
imgcanvas = document.getElementById("canvasPreview"),
getCanvas = document.getElementById("getCanvas"),
selector = document.getElementById("lang"),
imageURL = document.querySelector('#imageURL'),
paramBook = document.querySelector('.book'),
paramAlbum = document.querySelector('.album'),
labelCreat = document.querySelector('.labelCreat');

let image=null,
    param='album',     
    user = userWidth(param);
    

setCanvasWidthAndHeight(user[0], user[1])

window.addEventListener('resize', (e) => {//визначаємо зміни  вікна
  user = userWidth(param);
  setCanvasWidthAndHeight(user[0], user[1])

})

page.addEventListener('click', (event) =>{
   
  const target = event.target;

  if(target.matches('.album')){

    target.classList.add('active');
    paramBook.classList.remove('active');
    param = 'album'
    user = userWidth(param)
    setCanvasWidthAndHeight(user[0], user[1])

  }
  if(target.matches('.book')){

    target.classList.add('active');
    paramAlbum.classList.remove('active');
    param = 'book';
    user = userWidth(param)
    setCanvasWidthAndHeight(user[0], user[1])

  }
  if(target.closest('.arrow')&&image!==null){

    image = new SimpleImage(imgcanvas);
    image.drawTo(getCanvas); 
    fileinput.setAttribute('disabled', 'true');
    imageURL.setAttribute('disabled', 'true');
    labelCreat.classList.add('disabletLable');
    labelCreat.classList.remove('addImg');

  }

  startFilter(target);

})

imageURL.addEventListener('change',(e)=>{
    e.preventDefault();

    if(e.target.value!==""){

      if(image==null){

        document.addEventListener("keydown",keydownET())
        
      }
      if(image==null){
            
        imageURL.addEventListener('blur', blurF())

      }
       return image = true;
      }
      
 })

 //добавляем картинку
  fileinput.addEventListener('change', (e)=>{
    e.preventDefault();
    image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas); 
  });

  function startFilter(target){

    if(image==null&&target.matches('#rainbow')
    ||image==null&&target.matches('#lang')){

        alert("Необхідно завантажити картинку");
        return;

     }
      if(target.matches('#rainbow') ){  //если нажади на кнопку радуга
        target.blur()
        rainbow()

        fileinput.setAttribute('disabled', 'true');
        imageURL.setAttribute('disabled', 'true');
        labelCreat.classList.add('disabletLable');
        labelCreat.classList.remove('addImg');

        scrollCanvas()
       
      }
      if(target.matches('#lang')&&image!==null){  
        if(target.value!==""){
          addFilter(target.value); //юзер вибирает цвер фильтра
          scrollCanvas()
        }
      } 
      if(target.matches('#clear')&&getCanvas){ //очистить два поля кенвоз
         target.blur()
         clearCanvas()
      }
    }
//ф-ия фільтрует какой вибрали цвет и сетает его в картинку
    function addFilter(color) {
      let image = new SimpleImage(imgcanvas);

      if(!image.complete()){
        alert("Необхідно завантажити картинку");
      } else {

      for (let pixel of image.values()){

        addFilterColor(color,pixel)

        fileinput.setAttribute('disabled', 'true');
        imageURL.setAttribute('disabled', 'true');
        labelCreat.classList.add('disabletLable');
        labelCreat.classList.remove('addImg');
      }
    }

    image.drawTo(getCanvas);
}
  
//очищаем картинки
function clearCanvas(){

  getCanvas.setAttribute('width', `${user[0]}`);
  getCanvas.width = getCanvas.width;
  imgcanvas.setAttribute('width', `${user[0]}`);
  imgcanvas.width = imgcanvas.width;
  image=null;
  fileinput.value='';
  selector.value = '';
  imageURL.value = '';
  getCanvas.width='300';
  fileinput.removeAttribute('disabled');
  imageURL.removeAttribute('disabled');
  labelCreat.classList.add('addImg');
  labelCreat.classList.remove('disabletLable');
   
 } 
}
export default canvas;