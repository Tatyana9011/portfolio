import addFilterColor from './addFilterColor.js';

const rainbow = () =>{
const imgcanvas = document.getElementById("canvasPreview"),
        getCanvas = document.getElementById("getCanvas");

    let image = new SimpleImage(imgcanvas)
    
    if(! image.complete()){
        alert("Foreground image not loaded");
    }else{
        let H = image.getHeight();
        for (let pixel of image.values()){
          let Y = pixel.getY()
          if(Y<=(H/7)){
            addFilterColor('red',pixel)
          }
          if(Y<=(H/7)*2&&Y>(H/7)){
            addFilterColor('orange',pixel)
          }
          if(Y<=(H/7)*3&&Y>(H/7)*2){
            addFilterColor('yellow',pixel)
          }
          if(Y<=(H/7)*4&&Y>(H/7)*3){
            addFilterColor('green',pixel)
          }
          if(Y<=(H/7)*5&&Y>(H/7)*4){
            addFilterColor('blue',pixel)
          }
          if(Y<=(H/7)*6&&Y>(H/7)*5){
            addFilterColor('indigo',pixel)
          }
          if(Y>=H-(H/7)){
            addFilterColor('violet',pixel)
          }
        }
        image.drawTo(getCanvas);
    }
}
export default rainbow;