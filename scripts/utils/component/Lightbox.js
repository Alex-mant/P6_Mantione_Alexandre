export class Lightbox {
  static init(medias) {
    const links = Array.from(document.querySelectorAll('a[href$=".png"], a[href$=".jpg"],a[href$=".mp4"]'));
    const images = links.map((link) => link.getAttribute("href"));

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        new Lightbox(e.currentTarget.getAttribute("href"), medias, images);
      });
    });
  }

  constructor(url, medias, images) {
    const currentHref = url.split("/")[4];
    const nameOfPhotographer = document.querySelector("h2").innerText.split(" ")[0];
    medias.forEach((media) => {
      if (media.image === currentHref) {
        this._mediaUrl = "./assets/albums/" + nameOfPhotographer + "/" + media.image;
        this._tag = "img"
        this._media = media
      } else if (media.video === currentHref) {
        this._mediaUrl = "./assets/albums/" + nameOfPhotographer + "/" + media.video;
        this._tag = "video"
        this._media = media
      }
    });

    this._element = this.buildDOM();
    this._onKeyUp = this.onKeyUp.bind(this);
    this._images = images;
    document.body.append(this._element);
    document.addEventListener("keyup", this.onKeyUp);
  }

  buildDOM() {
    const dom = document.createElement("div");
    dom.classList.add("lightbox__container");
    
    if (this._media.video){
      this._typeOfMedia = `<video class="lightbox__media" src="${this._mediaUrl}" loop autoplay controls mute </video>`
    }else if (this._media.image){
      this._typeOfMedia = `<img class="lightbox__media" src="${this._mediaUrl}" alt="${this._media.title}">`
    }

    dom.innerHTML = 
    `     
      <div class="lightbox">
        <button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précedent</button>
        <figure class="lightbox__figure">
            <figcaption class="lightbox__caption">${this._media.title}</figcaption>
            ${this._typeOfMedia}
        </figure>
      </div>      
    `

    dom.querySelector(".lightbox__close").addEventListener("click", this.close.bind(this));
    dom.querySelector(".lightbox__next").addEventListener("click", this.next.bind(this));
    dom.querySelector(".lightbox__prev").addEventListener("click", this.prev.bind(this));
    return dom;
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

  close(e) {
    e.preventDefault();
    this._element.classList.add("fadeOut");
    window.setTimeout(() => {
      this._element.parentElement.removeChild(this._element);
    }, 500);
    document.removeEventListener("keyup", this._onKeyUp);
  }

  /*----------------------------PB ICI---------------------------------*/
  loadMedia() {
    this._url = null;
      const myMedia = new Image();
      myMedia.onload = () => {
        document.querySelector(".lightbox__figure").append(this._image);
        this._url = this._mediaUrl;
      };
      myMedia.src = this._mediaUrl;
    
  }
/*------------------------------------------------------------------*/
  next(e) {
    e.preventDefault();
    let position = this._images.findIndex((image) => image === this._mediaUrl);
    if (position === this._images.length - 1) {
      position = -1;
    }
    this.loadMedia(this._images[position + 1]);
  }

  prev(e) {
    e.preventDefault();
    let position = this._images.findIndex((image) => image === this._mediaUrl);
    if (position === 0) {
      position = this._images.length;
    }
    this.loadMedia(this._images[position - 1]);
  }
}
