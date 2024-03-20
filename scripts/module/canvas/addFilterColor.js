//ф-ия фільтрует какой вибрали цвет и сетает его в картинку  
import setColor from "./setColor.js";

function addFilterColor(color,pixel) {
    
    let avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
  
    if(color=='gray'){
     setColor(avg,avg,avg,pixel)
     }
    if(color=='red'){
       if(avg<128){
         setColor(2*avg,0,0,pixel)
      }if(avg>=128){
       setColor(255,2*avg-255,2*avg-255,pixel)
      }
    }
    if(color=='green'){
     if(avg<128){
       setColor(0,2*avg,0,pixel)
    }if(avg>=128){
     setColor(2*avg-255,255,2*avg-255,pixel)
    }
    }
    if(color=='blue'){
     if(avg<128){
       setColor(0,0,2*avg,pixel)
    }if(avg>=128){
       setColor(2*avg-255,2*avg-255,255,pixel)
    }
    }
     if(color=='orange'){
     if(avg<128){
       setColor(2*avg,0.8*avg,0,pixel)
     }if(avg>=128){
       setColor(255,1.2*avg-51,2*avg-255,pixel)
     }
     }
    if(color=='yellow'){
     if(avg<128){
        setColor(2*avg,2*avg,0,pixel)
     }if(avg>=128){
        setColor(255,255,2*avg-255,pixel)
     }
     }
     if(color=='indigo'){
     if(avg<128){
       setColor(0.8*avg,0,2*avg,pixel)
     }if(avg>=128){
        setColor(1.2*avg-51,2*avg-255,255,pixel)
     }
     }
    if(color=='violet'){
     if(avg<128){
        setColor(1.6*avg,0,1.6*avg,pixel)
     }if(avg>=10.48){
      setColor(0.4*avg+153,2*avg-255,0.4*avg+153,pixel)
     }
     }

    }
  export default addFilterColor;