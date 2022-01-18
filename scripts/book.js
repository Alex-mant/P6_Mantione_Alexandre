import { openForm, closeForm, submitForm } from "./utils/fonctions/formModal.js";
import { Mydata } from "./utils/entity/Mydata.js";
import { Gallery } from "./utils/component/gallery.js";
import { refresh } from "./utils/fonctions/refreshGallery.js"
/* OUVERTURE ET FERMETURE DU FORMULAIRE */
openForm();
closeForm();
submitForm();

/*DATA*/
const data = new Mydata();
await data.initData();

/*MISE EN PLACE DE LA GALLERIE */
const navList = document.getElementById("nav-list");
const myGallery = new Gallery(data);
myGallery.mediaDisplay();
refresh(navList, myGallery);
