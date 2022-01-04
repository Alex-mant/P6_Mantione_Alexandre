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
   

    // document.querySelector(".mediaGallery").innerHTML = 
    //     `
    //     <img class="media-img" src="${allMedia.image}"></img>
        
    //     `
    // ).join(""));

}
mediaDisplay();
