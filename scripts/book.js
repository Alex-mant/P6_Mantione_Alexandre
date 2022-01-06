import { openForm, closeForm, submitForm } from "./utils/modalForm.js";
import { getSelectValue } from "./utils/galleryFilter.js";
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
  const myCountOfLikes = data.countOfLikes(); 

  /*AFFiCHE LES INFOS PHOTOGRAPHE */
  document.querySelector(".photograph-book_portrait").src = `${photographer.portrait}`;
  document.querySelector(".photograph-book_name").innerHTML = `${photographer.name}`;
  document.querySelector(".photograph-book_location").innerHTML = `${photographer.city}, ${photographer.country}`;
  document.querySelector(".photograph-book_tagline").innerHTML = `${photographer.tagline}`;
  document.querySelector(".pricePerHour").innerHTML = `${Math.round(photographer.price / 8)}€/heure`;
  /* COMPTABILISE LE NBR TOTAL DE LIKES */
  document.querySelector(".likes-count").innerHTML = `${myCountOfLikes} `;

  /* AFFICHE LA GALLERY DU PHOTOGRAPHE */
  document.querySelector(".mediaGallery").innerHTML = media
    .map(
      (media) =>
        `
    <figure class="gallery-cards">
    
    <img class="media-img" src="./assets/albums/${photographer.name.split(" ")[0]}/${media.image}">
    
    
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
    )
    .join("");

  const test = () => {
    const myVideo = media.map((x) => x.video).filter((x) => x);
    const focusVideo = document.querySelectorAll("figure img");
    focusVideo.forEach((item)=>{
        if (item.outerHTML == `<img class="media-img" src="./assets/albums/${photographer.name.split(" ")[0]}/undefined">`){
            item.outerHTML = `<video class="media-video" src="./assets/albums/${photographer.name.split(" ")[0]}/${myVideo}">`
        }
    })
  };
  test();
};
mediaDisplay();
