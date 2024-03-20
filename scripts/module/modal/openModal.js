import closeModal from "./closeModal.js";

export const escapeHandler = event => {
    if (event.code === 'Escape') {
    closeModal();
    }
};

const openModal=()=>{
    console.log('openModal: ');
    
    const modal = document.querySelector('.modal'),
        modalOverlay = document.querySelector('.modal-overlay'),
        scrollTop = document.documentElement.scrollTop,
        modalClose = document.querySelector('.close');
       // modalImg.style.top = scrollTop + 'px';
    
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';

    document.addEventListener('keydown', escapeHandler);
    
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click',closeModal);

}

export default openModal;