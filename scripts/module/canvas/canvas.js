'use strict';
import userWidth from '../userWidth.js';
import keydownET from './keydownET.js';
import blurF from './blurF.js';
import addFilterColor from './addFilterColor.js';
import rainbow from './rainbow.js';
import drowLine from './drowLine.js';


const canvas = ()=>{
    console.log('canvas: ');

const fileinput = document.getElementById("finput"),
page= document.querySelector(".image"),
imgcanvas = document.getElementById("canvasPreview"),
getCanvas = document.getElementById("getCanvas"),
selector = document.getElementById("lang"),
selectorLine = document.getElementById("line"),
imageURL = document.querySelector('#imageURL'),
colorInput=document.querySelector('.color'),
iconGetCanvas = document.querySelector('.icon_getCanvas'),
paramBook = document.querySelector('.book'),
paramAlbum = document.querySelector('.album');


let image=null,
    param='album',
    user = userWidth(param),
    colorValue = colorInput.value;

//
colorInput.addEventListener('change',()=>{
  colorValue = colorInput.value;
  drowLine('3');
  
})
    
const setCanvasWidthAndHeight=(w,h)=>{
  imgcanvas.style.width =` ${w}px`;
  imgcanvas.style.height =` ${h}px`;
  getCanvas.style.width =` ${w}px`;
  getCanvas.style.height =` ${h}px`;
}

setCanvasWidthAndHeight(user[0], user[1])

window.addEventListener('resize', (e) => {
  user = userWidth(param);
  setCanvasWidthAndHeight(user[0], user[1])
  drowLine('3');
})

drowLine('3');

page.addEventListener('click', (event) =>{
   
  const target = event.target;


  if(target.matches('.album')){
    target.classList.add('active');
    paramBook.classList.remove('active');
    param = 'album'
    user = userWidth(param)
    setCanvasWidthAndHeight(user[0], user[1])
    drowLine('3');
  }
  if(target.matches('.book')){
    target.classList.add('active');
    paramAlbum.classList.remove('active');
    param = 'book';
    user = userWidth(param)
    setCanvasWidthAndHeight(user[0], user[1])
    drowLine('3');
  }
  if(target.closest('.arrow')&&image!==null){
    image = new SimpleImage(imgcanvas);
    iconGetCanvas.style.display = 'none';
    image.drawTo(getCanvas); 
    drowLine('3');
  }
  if(target.matches('#clear2')){
    if(image!==null){
      getCanvas.setAttribute('width', `${user[0]}`);
      getCanvas.width = imgcanvas.width;
      image = new SimpleImage(imgcanvas);
      image.drawTo(getCanvas); 
      drowLine('3');
   
    }else{
      clearCanvas()
    }
  }
  
  startFilter(target);
})

selectorLine.addEventListener('change',(event)=>{
 const target = event.target,
 value = target.value;
 drowLine(value);
})

  imageURL.addEventListener('change',(e)=>{
    e.preventDefault();

    if(e.target.value!==""){
      //console.log('e.target.value: ', e.target.value);
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
    console.log('target: ', target);
   // ||image==null&&target.closest('.moreContent')
    if(image==null&&target.matches('#rainbow')
    ||image==null&&target.matches('#lang')){
        alert("Необхідно завантажити картинку");
        return;
     }
      if(target.matches('#rainbow') ){  //если нажади на кнопку радуга
        target.blur()
        rainbow()
      }
      if(target.matches('#lang')&&image!==null){  
        if(target.value!==""){
          addFilter(target.value); //юзер вибирает цвер фильтра
        }
      }   
      if(target.matches('#clear')&&getCanvas){ //очистить два поля кенвоз
         target.blur()
         clearCanvas()
      }
      if(target.matches('.color') ){ 
        drowLine('3');
      }
    }

    function addFilter(color) {
  let image = new SimpleImage(imgcanvas);

  if(!image.complete()){
    alert("Необхідно завантажити картинку");
  } else {
      for (let pixel of image.values()){
        addFilterColor(color,pixel)
      }
    }
    iconGetCanvas.style.display = 'none';
    image.drawTo(getCanvas);
}
//ф-ия фільтрует какой вибрали цвет и сетает его в картинку  
//очищаем картинки
function clearCanvas(){
  console.log('clearCanvas: ');
  getCanvas.setAttribute('width', `${user[0]}`);
  getCanvas.width = getCanvas.width;
  imgcanvas.setAttribute('width', `${user[0]}`);
  imgcanvas.width = imgcanvas.width;
  image=null;
  fileinput.value='';
  selector.value = '';
  imageURL.value = '';
  getCanvas.width='300';
  iconGetCanvas.style.display = 'block';
  drowLine('3');
 } 


 /*
//Змінюємо зелений фон на іншу картинку
var fgImage = new SimpleImage("drewRobert.png");
var bgImage = new SimpleImage("hippieflower.jpg");

function createComposite() {
  var output = new SimpleImage(fgImage.getWidth(),fgImage.getHeight());
  var greenThreshold = 240;
  for (var pixel of fgImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (pixel.getGreen() > greenThreshold) {    // вместо 240 можно использовать pixel.getRed()+ pixel.getBlue()   так исчезнит ободок
	
      //pixel is green, use background
      var bgPixel = bgImage.getPixel(x,y);
      output.setPixel(x,y,bgPixel);
    }
    else {
      //pixel is not green, use foreground
      output.setPixel(x,y,pixel);
    }
  }
  return output;
}

var rezult = createComposite()
print(rezult)

//ховаемо одне зображення в іншому
var img0 = new SimpleImage("smalluniverse.jpg")
var img1 = new SimpleImage("smalllion.jpg")
//очищаем младшие біти /16 і *16
function chop(image){
     for(var px of image.values()){
        px.setRed(Math.floor(px.getRed()/16)*16);
        px.setGreen(Math.floor(px.getGreen()/16)*16);
        px.setBlue(Math.floor(px.getBlue()/16)*16);
     }
     print("chop img" ,image)
  return image;
}

function shitt(image){
  for(var px of image.values()){
    px.setRed(Math.floor(px.getRed()/16));
    px.setGreen(Math.floor(px.getGreen()/16));
    px.setBlue(Math.floor(px.getBlue()/16));
  }
   print("shitt img" ,image)
  return image;
}

// crop(image, width, height)  треба реалізувати цю ф-ю для обрізки зображення  щоб убрати if з ф-ції combine
function combine(start, hide){
    let wHide=hide.getWidth()
    let hHide=hide.getHeight()
    print(wHide,hHide)
    
    let ansver = new SimpleImage(start.getWidth(),start.getHeight())
    // до цієї ф-ції треба реалізувати перевірку startPixel.getGreen()+startHide.getGreen() щоб не реревищувала 255  //створити ф-ю newpv(p,
  for(var pixel of ansver.values()){
    let x=pixel.getX();
    let y=pixel.getY();
    if(x<=wHide-1&&y<=hHide-1){
        let startPixel = start.getPixel(x,y)
        let startHide = hide.getPixel(x,y)
        pixel.setRed(startPixel.getRed()+startHide.getRed())
        pixel.setGreen(startPixel.getGreen()+startHide.getGreen())
        pixel.setBlue(startPixel.getBlue()+startHide.getBlue()) 
    }
  }
   print(" ansver img", ansver)
  return  ansver;
}

var start = chop(img0);
var  hide = shitt(img1);
var stego = combine(start, hide)

function beforImag(img){
    for (let pix of img.values()){
        pix.setRed(Math.floor(pix.getRed()%16)*16);
        pix.setGreen(Math.floor(pix.getGreen()%16)*16);
        pix.setBlue(Math.floor(pix.getBlue()%16)*16);
    }

    return img
}
print("beforImag",beforImag(stego))


// crop(image, width, height)  треба реалізувати цю ф-ю для обрізки зображення
var img0 = new SimpleImage("smalluniverse.jpg")
function crop(image, width, height){
     var n = new SimpleImage(width,height);
     for(var p of image.values()){
        var x = p.getX();
        var y = p.getY();
       
      if (x < width && y < height){
     var np = n.getPixel(x,y);
     np.setRed(p.getRed());
     np.setBlue(p.getBlue());
     np.setGreen(p.getGreen()); 
}

     }
     return n;
}

print(crop(img0,245,180))


// write your code here
function makeDarker(image,amount){
    for (var px of image.values()){
        px.setRed(px.getRed()-amount);
        px.setGreen(px.getGreen()-amount);
        px.setBlue(px.getBlue()-amount);
    }
    return image;
}
img = new SimpleImage("chapel.png");
img = makeDarker(img,50);
print(img); 

*/  





}
export default canvas;