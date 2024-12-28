import closeModal from "./closeModal.js";
import scrollTopII from "../scrollTopII.js";

export const escapeHandler = event => {
    if (event.code === 'Escape') {
    closeModal();
    }
};

const openModal=()=>{
    console.log('openModal: ');

    const modal = document.querySelector('.modal'),
        modalOverlay = document.querySelector('.modal-overlay'),
        modalClose = document.querySelector('.close');
    
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';

    document.addEventListener('keydown', escapeHandler);
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click',closeModal);
    scrollTopII()
    document.body.classList.add('no-scroll'); // Отключаем прокрутку
}

export default openModal;