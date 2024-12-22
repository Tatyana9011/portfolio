function loader2() {
    const loader = document.createElement('div');
    loader.classList.add('loader');
        loader.innerHTML = `
<div class="sk-double-bounce">
        <div class="sk-child sk-double-bounce-1"></div>
        <div class="sk-child sk-double-bounce-2"></div>
</div>
    `;
    return loader;
}

export default loader2;