const toggleDrag =()=>{
    console.log('toggleDrag: ');
    const draggable = document.getElementById('draggable'),
          menuToggle = document.querySelector(".menuToggle"),
          sidebar = document.querySelector(".sidebar");
  
    let offsetX = 0, offsetY = 0, isDragging = false, dragMoved = false;;
    
    if(draggable){

      menuToggle.style.display = 'flex';
      
    draggable.addEventListener('mousedown', (e) => {
      console.log('mousedown: ');
      dragMoved = false;
      isDragging = true;
      offsetX = e.clientX - draggable.offsetLeft;
      offsetY = e.clientY - draggable.offsetTop;
      draggable.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;

      dragMoved = true;
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;

      draggable.style.left = `${x}px`;
      draggable.style.top = `${y}px`;
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      draggable.style.cursor = 'grab';
    });



    menuToggle.addEventListener("click", () => {
      
      if (!dragMoved) {
        menuToggle.classList.toggle("active");
        sidebar.classList.toggle("active");
      }

   })

  } 



    
}

export default toggleDrag;