import { createModal } from './CreateDynamicModal.js';

/* OUVERTURE ET FERMETURE DU FORMULAIRE */
export const openModal = () => {
    const btnOpenModal = document.querySelector(".contact_button");
    
    btnOpenModal.addEventListener("click", (event) => {
        event.preventDefault();
        createModal();
    });
}

export const closeModal = () => {
    const btnCloseModal = document.querySelector(".form_closeBtn");    
    btnCloseModal.addEventListener("click", () => {
        document.querySelector(".modal").style.display = "none";        
    });
}

