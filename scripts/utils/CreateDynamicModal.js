import { fisheyeData, fetchPhotographe} from './fetchPhotographe_objects.js';

export const createFormModal = async () => {
    await fetchPhotographe();   
    
    /* getCurrentName :
    Récupère l'id envoyé dans l'url,
    traite les caractères inutiles
    et établi une recherche basé sur cette dernière
    afin de renvoyé la valeur de name qui est une autre clé contenue dans ce même objet.
    */
   const getCurrentName = () =>{
       const myId = window.location.search.split("?id=").join("");
       return fisheyeData.find(photographer => photographer.id == myId).name
    }    
    
    document.querySelector(".modal").style.display = "block";
    document.querySelector(".form_title").innerHTML =
    `    
        Contactez-moi </br>${getCurrentName()}          
    `
};
