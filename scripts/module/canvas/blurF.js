import addImageUrl from './addImagUrl.js';

function blurF (){
    console.log('blurF: ');

    const cb = function(e){

    const imageURL = document.querySelector('#imageURL');

    const target = e.target;
    addImageUrl(target.value);
    imageURL.removeEventListener('blur', cb);

   }

   return cb;
    
}
export default blurF;