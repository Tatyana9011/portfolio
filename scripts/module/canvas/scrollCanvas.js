const scrollCanvas = ()=>{
    const width = document.documentElement.clientWidth;
    const getCanvas = document.getElementById("getCanvas");
    
    if(width <1200){
        getCanvas.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
       });
     }
}
export default scrollCanvas;