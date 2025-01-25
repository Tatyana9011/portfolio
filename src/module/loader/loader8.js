function loader6() {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    loader.innerHTML = `
    <div class="sk-folding-cube">
          <div class="sk-cube sk-cube-1"></div>
          <div class="sk-cube sk-cube-2"></div>
          <div class="sk-cube sk-cube-4"></div>
          <div class="sk-cube sk-cube-3"></div>
    </div>
    `;
    return loader;
  }
  
  export default loader6;