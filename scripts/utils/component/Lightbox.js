export class Lightbox {
  static init(medias) {
    const links = Array.from(document.querySelectorAll('a[href$=".png"], a[href$=".jpg"],a[href$=".mp4"]'));
    const images = links.map((link) => link.getAttribute("href"));
    const titles = Array.from(document.querySelectorAll(".media-title"));

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
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
    this._titles = titles;
    this._position = this._images.findIndex((image) => image === this._mediaUrl);
    document.body.append(this._element);
    document.addEventListener("keyup", this.onKeyUp);
  }

  buildDOM() {
    this._dom = document.createElement("div");
    this._dom.classList.add("lightbox__container");
    
    if (this._media.video){
      this._typeOfMedia = `<video class="lightbox__media" src="${this._mediaUrl}" loop autoplay controls mute </video>`
    }else if (this._media.image){
      this._typeOfMedia = `<img class="lightbox__media" src="${this._mediaUrl}" alt="${this._media.title}">`
    }
    
    this._dom.innerHTML = 
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
    
    this._dom.querySelector(".lightbox__close").addEventListener("click", this.close.bind(this));
    this._dom.querySelector(".lightbox__next").addEventListener("click", this.next.bind(this));
    this._dom.querySelector(".lightbox__prev").addEventListener("click", this.prev.bind(this));
    return this._dom;
  }
  
  
  close(e) {
    e.preventDefault();
    this._element.classList.add("fadeOut");
    window.setTimeout(() => {
      this._element.parentElement.removeChild(this._element);
    }, 500);
    document.removeEventListener("keyup", this._onKeyUp);
  }
  
  
  loadMedia() {
    const myMedia = document.querySelector(".lightbox__media");
  
    if(this._images[this._position].includes(".jpg")){
      myMedia.src = this._images[this._position];
    }
    else if(this._images[this._position].includes(".mp4")){
     const video = document.createElement("video");
     video.classList.add("lightbox__media");
     video.src = this._images[this._position];
     document.querySelector("figure.lightbox__figure").appendChild(video);
     document.body.removeChild("img.lightbox__media");
    }

    document.querySelector(".lightbox__caption").innerHTML = this._titles[this._position].innerText;
  }

  
  next(e) {
    e.preventDefault();
    
    if (this._position === this._images.length - 1) {
      this._position -= 1;
    } else {
      this.loadMedia(this._images[this._position += 1]);
    }
  }
  
  prev(e) {
    e.preventDefault();
    if (this._position === 0) {
      this._position = 0
    } else {
      this.loadMedia(this._images[this._position -= 1]);
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
  
  
}
