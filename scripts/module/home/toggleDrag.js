import removeEventListener from '../removerEventListener.js';
import { getDataStorage } from '../localStorage.js';
import changeActiveSidebar from '../../changeActiveSidebar.js';
const toggleDrag =()=>{
    console.log('toggleDrag: ');
    const draggable = document.getElementById('draggable'),
          menuToggle = document.querySelector(".menuToggle"),
          sidebar = document.querySelector(".sidebar"),
          dataPage =  getDataStorage('page');


    document.onpointerup=null;
    let offsetX = 0, offsetY = 0, isDragging = false, dragMoved = false;;
    
    const draggableMousemove=(e)=>{

      if (!isDragging) return;
      dragMoved = true;
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      draggable.style.left = `${x}px`;
      draggable.style.top = `${y}px`;

    }
   
    const draggableMousedown=(e)=>{

      document.onmousemove = draggableMousemove;
      
      dragMoved = false;
      isDragging = true;
      offsetX = e.clientX - draggable.offsetLeft;
      offsetY = e.clientY - draggable.offsetTop;
      draggable.style.cursor = 'grabbing';
     
    }

         
   const draggableMouseup=(e)=>{
      
      isDragging = false;
      draggable.style.cursor = 'grab';

      document.onmousemove = null;
    }

    const draggableClick=(e)=>{
     changeActiveSidebar(true);
    }


    if(dataPage=='Home'){

      menuToggle.style.display = 'flex';
      
      menuToggle.onpointerdown = draggableMousedown;
  
      menuToggle.onpointerup = draggableMouseup;

      menuToggle.addEventListener("click", draggableClick)
      
   } 



    
}

export default toggleDrag;