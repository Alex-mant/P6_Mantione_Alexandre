import { Mydata } from "../entity/MyData.js";
import { Gallery} from "../controllers/gallery.js"
import { openForm, closeForm, submitForm } from "../utils/helpers/formModal.js";
import { refreshGallery } from "../utils/helpers/refreshGallery.js";


const data = new Mydata();
await data.initData();
const myGallery = new Gallery(data);


//  MISE EN PLACE DE LA GALLERIE
myGallery.display();
refreshGallery(myGallery);

// OUVERTURE ET FERMETURE DU FORMULAIRE
openForm();
closeForm();
submitForm();