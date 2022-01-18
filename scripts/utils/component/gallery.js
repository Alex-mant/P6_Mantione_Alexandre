import { factoryGallery } from "../factory/factoryGallery.js";
import { cardInfoPhotographer } from "../fonctions/cardInfoPhotographer.js";
import { filterBy } from "../fonctions/filterBy.js";
import { countOfLikes } from "../fonctions/CountOfLikes.js"
import { Lightbox } from "./Lightbox.js";

export class Gallery{
    constructor(data){
      this._data = data;
      this._medias = this._data.getMediaOfCurrentPhotographer();
      this._photographer = this._data.getPhotographersById();
      this._mediasFiltered = filterBy(this._medias);
      
    }
    
    refresh(){          
      this.mediaDisplay();
      }

    mediaDisplay(){      
      /* AFFICHE LA GALLERY*/
      factoryGallery(this._mediasFiltered, this._photographer);
      /*AFFiCHE LES INFOS PHOTOGRAPHE */
      cardInfoPhotographer(this._photographer);
      /* COMPTABILISE LE NBR TOTAL DE LIKES */
      countOfLikes(this._medias);      
      /* LightBox */
      Lightbox.init(this._medias);
    };  
}
