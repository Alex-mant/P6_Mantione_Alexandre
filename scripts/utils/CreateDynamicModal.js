import { closeModal } from '../modalForm.js'
import { fisheyeData } from './fetchPhotographe_objects.js';
import { fetchPhotographe } from './fetchPhotographe_objects.js';

export const createModal = async () => {
    await fetchPhotographe();   
    
    /* getCurrentName :
    Récupère l'id envoyé dans l'url,
    traite les caractères inutiles
    et établi une recherche basé sur cette dernière
    afin de renvoyé la valeur de name qui est une autre clé contenue dans ce même objet.
    */
   const getCurrentName = () =>{
       const myId = window.location.search.split("?id=").join("");
       return fisheyeData.find(x => x.id == myId).name
    }    
    
    document.querySelector(".modal").style.display = "block";
    document.querySelector(".modal").innerHTML =

    `
    <div class="form_container">
        <span class="form_closeBtn">
            <img src="./assets/icons/close.svg" alt="">
        </span>
        <form action="">
            <h2>Contactez-moi </br>${getCurrentName()}</h2>
            <label for="">
                <p class="form_text">Prénom</p>
                <input class="form_input" type="text">
            </label>
            <label for="">
                <p class="form_text">Nom</p>
                <input class="form_input" type="text">
            </label>
            <label for="">
                <p class="form_text">Email</p>
                <input class="form_input" type="text">
            </label>
            <label for="">
                <p class="form_text ">Votre message</p>
                <textarea class="form_input message" type="text"></textarea>
            </label>
            </br></br>
            <button class="form_submitBtn"type="submit">Envoyer</button>
        </form>
    </div>
    `
    closeModal();
};
