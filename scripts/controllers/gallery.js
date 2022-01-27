import { mediaFactory } from "../factory/mediaFactory.js";
import { filterBy } from "../utils/helpers/filterBy.js";
import { cardInfoPhotographer } from "../views/cardInfoPhotographer.js";
import { countOfLikes } from "../utils/helpers/CountOfLikes.js";
import { Lightbox } from "../views/Lightbox.js";

export class Gallery{
    constructor(data){
      this._data = data;
      this._medias = this._data.getMediaOfCurrentPhotographer();
      this._photographer = this._data.getPhotographersById();
      this._mediasFiltered = filterBy(this._medias);
    }
    
    refresh(){          
      this.display();
    }
    
    display(){     
      /* AFFICHE LA GALLERY*/
      mediaFactory(this._mediasFiltered, this._photographer);
      /*AFFiCHE LES INFOS PHOTOGRAPHE */
      cardInfoPhotographer(this._photographer);
      /* COMPTABILISE LE NBR TOTAL DE LIKES */
      countOfLikes(this._medias);      
      /* LightBox */
      Lightbox.init(this._mediasFiltered);
    };  
}
