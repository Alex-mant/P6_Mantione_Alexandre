import { openForm, closeForm, submitForm } from "./utils/fonctions/modalForm.js";
import { getSelectValue } from "./utils/fonctions/galleryFilter.js";
import { Mydata } from "./utils/classes/class_Mydata.js";
import { cardInfoPhotographer } from "./utils/fonctions/infoCardPhotographer.js";
import { countOfLikes } from "./utils/fonctions/CountOfLikes.js";
import { factoryGallery } from "./utils/factory/ImagesOrVideos.js";
import { Lightbox } from "./utils/classes/class_Lightbox.js";

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
  const medias = data.getMediaOfCurrentPhotographer();
  const photographer = data.getPhotographersById();
  
  factoryGallery(medias, photographer);
  /*AFFiCHE LES INFOS PHOTOGRAPHE */
  cardInfoPhotographer(photographer);
  /* COMPTABILISE LE NBR TOTAL DE LIKES */
  countOfLikes(medias);

  /* LightBox */
  Lightbox.init(medias);
}
mediaDisplay();
