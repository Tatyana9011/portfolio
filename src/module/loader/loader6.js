function loader6() {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    loader.innerHTML = `
    <div class="sk-chasing-dots">
           <div class="sk-child sk-dot-1"></div>
           <div class="sk-child sk-dot-2"></div>
    </div>
    `;
    return loader;
  }
  
  export default loader6;