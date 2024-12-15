import addImageUrl from './addImagUrl.js';

function keydownET (){
    console.log('keydownET: ');
   
    const cb = function(e){
        console.log('e: ', e);
        const imageURL = document.querySelector('#imageURL');
        if(e.key=="Enter"||e.key=="Tab"){
            addImageUrl(imageURL.value);
        }
        document.removeEventListener('keydown', cb);

   }

   return cb;
    
}
export default keydownET;