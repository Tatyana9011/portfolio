const setCanvasWidthAndHeight=(w,h)=>{
   const imgcanvas = document.getElementById("canvasPreview"),
    getCanvas = document.getElementById("getCanvas");

    imgcanvas.style.width =` ${w}px`;
    imgcanvas.style.height =` ${h}px`;
    getCanvas.style.width =` ${w}px`;
    getCanvas.style.height =` ${h}px`;
}
export default setCanvasWidthAndHeight;