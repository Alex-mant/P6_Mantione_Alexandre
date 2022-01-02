import { createFormModal } from './CreateDynamicModal.js';

/* OUVERTURE ET FERMETURE DU FORMULAIRE */
export const openForm = () => {
    const btnOpenForm = document.querySelector(".contact_button");
    
    btnOpenForm.addEventListener("click", (event) => {
        event.preventDefault();
        createFormModal();
    });
}

export const closeForm = () => {
    const btnCloseForm = document.querySelector(".form_closeBtn");    
    btnCloseForm.addEventListener("click", () => {
        document.querySelector(".modal").style.display = "none";        
    });
}

/* SUBMITBUTTON */

export const submitForm = () => {
    const btnSubmitForm = document.querySelector(".form_submitBtn");
    btnSubmitForm.addEventListener("click", (event)=>{
        event.preventDefault();
    });

}
