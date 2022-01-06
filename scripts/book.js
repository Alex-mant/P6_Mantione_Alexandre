import { openForm, closeForm, submitForm } from "./utils/fonctions/modalForm.js";
import { getSelectValue } from "./utils/fonctions/galleryFilter.js";
import { Mydata } from "./utils/classes/class_Mydata.js";
import { cardInfoPhotographer } from "./utils/fonctions/infoCardPhotographer.js";
import { sumOfLikes } from "./utils/fonctions/CountOfLikes.js";

/* OUVERTURE ET FERMETURE DU FORMULAIRE */
openForm();
closeForm();
submitForm();

/* FILTRE GALLERIE*/
getSelectValue();

/*MISE EN PLACE DE LA GALLERIE */
const mediaDisplay = async () => {
  const data = new Mydata();
  await data.initData();
  const photographer = data.getPhotographersById();
  const media = data.getAllMedia();
  const myCountOfLikes = data.countOfLikes();

  /*AFFiCHE LES INFOS PHOTOGRAPHE */
  cardInfoPhotographer(photographer);
  /* COMPTABILISE LE NBR TOTAL DE LIKES */
  sumOfLikes(myCountOfLikes);
  /* AFFICHE LA GALLERY DU PHOTOGRAPHE */
  document.querySelector(".mediaGallery").innerHTML = media
    .map((media) =>
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
    ).join("");
    const test = () => {
    const myVideo = media.map((x) => x.video).filter((x) => x);
    const focusVideo = document.querySelectorAll("figure img");
    focusVideo.forEach((item) => {
      if (item.outerHTML == `<img class="media-img" src="./assets/albums/${photographer.name.split(" ")[0]}/undefined">`) {
        item.outerHTML = `<video class="media-video" src="./assets/albums/${
          photographer.name.split(" ")[0]
        }/${myVideo}" autoplay loop muted></video>`;
      }
    });
  };
  test();
};
mediaDisplay();
