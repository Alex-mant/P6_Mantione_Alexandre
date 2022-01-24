import { openForm, closeForm, submitForm } from "./utils/fonctions/formModal.js";
import { Mydata } from "./entity/MyData.js";
import { Gallery } from "./component/gallery.js";
import { refreshGallery } from "./utils/fonctions/refreshGallery.js"
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
myGallery.display();
refreshGallery(navList, myGallery);
