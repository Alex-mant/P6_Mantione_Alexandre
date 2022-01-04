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
    document.querySelector(".photograph-book_name").innerHTML=`${photographer.name}`;
    document.querySelector(".photograph-book_location").innerHTML=`${photographer.city}, ${photographer.country}`;
    document.querySelector(".photograph-book_tagline").innerHTML=`${photographer.tagline}`;
    
    document.querySelector(".mediaGallery").innerHTML = media.map((media) =>
    `
    <figure class="gallery-cards">
        <a href="/assets/albums/${photographer.name.split(" ")[0]}/${media.image}">
        <img class="media-img" src="/assets/albums/${photographer.name.split(" ")[0]}/${media.image}">
        </a>

        <figcaption class="media-titlesnlikes">
            <span class="media-title">${media.title}</span>
            <span class="media-likes">
                ${media.likes}
                <button>
                    <i class="fas fa-heart"></i>
                </button>
            </span>
        </figcaption>  
    </figure>
    `
    ).join("")    

}
mediaDisplay();
