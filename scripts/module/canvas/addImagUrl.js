import {validationURL}from '../validation.js';


const addImageUrl=(URL)=>{
    console.log('addImageUrl: ');

   const inputPreview = document.querySelector('#preview'),
   imgcanvas = document.getElementById("canvasPreview");

    if(validationURL(URL,'Image')){
        const ctx = imgcanvas.getContext('2d');
        
        inputPreview.src = URL;

        // console.log('inputPreview: ', inputPreview);
       inputPreview.setAttribute('crossOrigin', 'anonymous');
       inputPreview.addEventListener('load', (e)=>{
        if(e.target){
          ctx.drawImage(inputPreview, 0, 0, imgcanvas.width, imgcanvas.height);
          return true;
          // const data = image.data;
          //for (let i = 0; i < data.length; i += 4) {
         //   data[i] = 0; // remove red color from each pixel
         // }
          //ctx.putImageData(image, 0, 0);
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