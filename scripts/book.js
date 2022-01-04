import { openForm, closeForm, submitForm } from "./utils/modalForm.js";
import { getSelectValue } from "./utils/galleryFilter.js"
import { Mydata } from "./utils/class_Mydata.js";


/* OUVERTURE ET FERMETURE DU FORMULAIRE */
openForm();
closeForm();
submitForm();
/* FILTRE GALLERY*/
getSelectValue();

/* */

const mediaDisplay = async () => {
    const data = new Mydata();
    await data.initData();
    const photographer = data.getPhotographersById();
    const media = data.getAllMedia();
    
    document.querySelector(".photograph-book_portrait").src =`${photographer.portrait}`;
    
    document.querySelector(".mediaGallery").innerHTML = media.map((media) =>
    `
    <img class="media-img" src="/assets/albums/${photographer.name.split(" ")[0]}/${media.image}"></img>    
    
    `
    ).join("")    

}
mediaDisplay();
