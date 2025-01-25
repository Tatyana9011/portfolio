function loader5() {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    loader.innerHTML = `
    <div class="sk-wandering-cubes">
            <div class="sk-spinner sk-spinner-pulse"></div>
    </div>
    `;
    return loader;
  }
  
  export default loader5;