import { notWithTab, withTab } from "../utils/helpers/notWithTab.js";

export class Lightbox {
  static init(medias) {
    const links = Array.from(document.querySelectorAll('a[href$=".png"], a[href$=".jpg"],a[href$=".mp4"]'));
    const images = links.map((link) => link.getAttribute("href"));
    const titles = Array.from(document.querySelectorAll(".media-titles"));

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        notWithTab();
        new Lightbox(e.currentTarget.getAttribute("href"), medias, images, titles);
      });
    });
  }

  constructor(url, medias, images, titles) {
    const currentHref = url.split("/")[4];
    const nameOfPhotographer = document.querySelector("h2").innerText.split(" ")[0];
    medias.forEach((media) => {
      if (media.image === currentHref) {
        this._mediaUrl = "./assets/albums/" + nameOfPhotographer + "/" + media.image;
        this._tag = "img";
        this._media = media;
      } else if (media.video === currentHref) {
        this._mediaUrl = "./assets/albums/" + nameOfPhotographer + "/" + media.video;
        this._tag = "video";
        this._media = media;
      }
    });

    this._element = this.buildDOM();
    this._gallery = images;
    this._titles = titles;
    this._position = this._gallery.findIndex((image) => image === this._mediaUrl);
    this.onKeyUp = this.onKeyUp.bind(this);
    document.body.append(this._element);
    document.addEventListener("keyup", this.onKeyUp);
  }

  close(e) {
    e.preventDefault();
    withTab();
    this._element.classList.add("fadeOut");
    window.setTimeout(() => {
      this._element.parentElement.removeChild(this._element);
    }, 500);
    document.removeEventListener("keyup", this.onKeyUp);
  }

  next(e) {
    e.preventDefault();
    if (this._position === this._gallery.length - 1) {
      this._position -= this._gallery.length;
    } else{
      this.loadMedia(this._gallery[(this._position += 1)]);
    }
  }

  prev(e) {
    e.preventDefault();
    if (this._position === 0) {
      this._position += this._gallery.length;
    } else {
      this.loadMedia(this._gallery[(this._position -= 1)]);
    }
  }

  onKeyUp(e) {
    if (e.key === "Escape") {
      this.close(e);
    } else if (e.key === "ArrowLeft") {
      this.prev(e);
    } else if (e.key === "ArrowRight") {
      this.next(e);
    }
  }

  buildDOM() {
    this._dom = document.createElement("div");
    this._dom.classList.add("lightbox__container");

    if (this._media.video) {
      this._typeOfMedia = `<video  tabindex="0" class="lightbox__media" alt=" " src="${this._mediaUrl}"  loop autoplay controls mute </video>`;
    } else if (this._media.image) {
      this._typeOfMedia = `<img tabindex="0" class="lightbox__media" alt=" " src="${this._mediaUrl}" >`;
    }
  
    this._dom.innerHTML = `     
    <div class="lightbox">
      <button tabindex="0" class="lightbox__close">Fermer</button>
      <button tabindex="0" class="lightbox__next">Suivant</button>
      <button tabindex="0" class="lightbox__prev">Précedent</button>
    <figure tabindex="0" class="lightbox__figure">
      <figcaption class="lightbox__caption">${this._media.title}</figcaption>
      ${this._typeOfMedia}
    </figure>
    </div>      
    `;

    this._dom.querySelector(".lightbox__close").addEventListener("click", this.close.bind(this));
    this._dom.querySelector(".lightbox__next").addEventListener("click", this.next.bind(this));
    this._dom.querySelector(".lightbox__prev").addEventListener("click", this.prev.bind(this));
    return this._dom;
  }
  
  loadMedia() {
    if (this._gallery[this._position].includes(".jpg")) {
      this._toRemove = document.querySelector("figure .lightbox__media");
      this._nextOrPrevMedia = document.createElement("img");
      this._nextOrPrevMedia.classList.add("lightbox__media");
      this._nextOrPrevMedia.setAttribute("alt", "");
    } else if (this._gallery[this._position].includes(".mp4")) {
      this._nextOrPrevMedia = document.createElement("video");
      this._nextOrPrevMedia.classList.add("lightbox__media");
      this._nextOrPrevMedia.setAttribute("autoplay", "");
      this._nextOrPrevMedia.setAttribute("loop", "");
      this._nextOrPrevMedia.setAttribute("controls", "");
      this._nextOrPrevMedia.setAttribute("alt", "");
      this._toRemove = document.querySelector("figure .lightbox__media");
    }

    this._nextOrPrevMedia.src = this._gallery[this._position];
    document.querySelector(".lightbox__figure").replaceChild(this._nextOrPrevMedia, this._toRemove);
    document.querySelector(".lightbox__caption").innerHTML = this._titles[this._position].innerText;
  }
}
