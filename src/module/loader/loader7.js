function loader7() {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    loader.innerHTML = `
    <div class="sk-cube-grid">
           <div class="sk-cube sk-cube-1"></div>
           <div class="sk-cube sk-cube-2"></div>
           <div class="sk-cube sk-cube-3"></div>
           <div class="sk-cube sk-cube-4"></div>
           <div class="sk-cube sk-cube-5"></div>
           <div class="sk-cube sk-cube-6"></div>
           <div class="sk-cube sk-cube-7"></div>
           <div class="sk-cube sk-cube-8"></div>
           <div class="sk-cube sk-cube-9"></div>
    </div>
    `;
    return loader;
  }
  
  export default loader7;