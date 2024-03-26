import {validationURL}from '../validation.js';


const addImageUrl=(URL)=>{
    console.log('addImageUrl: ');

   const inputPreview = document.querySelector('#preview'),
   imgcanvas = document.getElementById("canvasPreview");

    if(validationURL(URL,'Image')){
        const ctx = imgcanvas.getContext('2d');
        inputPreview.crossOrigin = 'anonymous';
        inputPreview.src = URL;

     inputPreview.addEventListener('load', (e)=>{
        if(e.target){
          ctx.drawImage(inputPreview, 0, 0, imgcanvas.width, imgcanvas.height);
          return true;
        }else{
            console.log('----e.target.result фото пришо но не загрузилось');
        }
       })
       return true;
    }else{
        return null;
    }
    
}
export default addImageUrl;