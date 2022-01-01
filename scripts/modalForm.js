import { createModal } from './utils/CreateDynamicModal.js';

const openModal = () => {
    const btnOpenModal = document.querySelector(".contact_button");
    
    btnOpenModal.addEventListener("click", (event) => {
        event.preventDefault();
        createModal();
    });
}

const closeModal = () => {
    const btnCloseModal = document.querySelector(".form_closeBtn");    
    btnCloseModal.addEventListener("click", () => {
        document.querySelector(".modal").style.display = "none";        
    });
}

openModal();
closeModal();