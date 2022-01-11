export class Lightbox {
    static init(medias){
        const links = document.querySelectorAll('a[href$=".png"], a[href$=".jpg"],a[href$=".mp4"]')
        .forEach(link =>{
            link.addEventListener("click", (e) => {
                e.preventDefault();
                new Lightbox(e.currentTarget.getAttribute("href"), medias);
            })            
        })
    }

  constructor(url, medias) {
    const currentHref = url.split("/")[4];
    this.mediaTitle;

    medias.forEach((media) => {
        if (media.image === currentHref) {
        this.mediaTitle = media.title;
        } else if (media.video === currentHref) {
        this.mediaTitle = media.title;
        }
    });

    this.element = this.buildDOM(url);
    this.onKeyUp = this.onKeyUp.bind(this);
    document.body.append(this.element);
    document.addEventListener("keyup", this.onKeyUp);
  }

  onKeyUp(e) {
    if (e.key === "escape") {
      this.close(e);
    }
  }

  close(e) {
    e.preventDefault();
    this.element.classList.add("fadeOut");
    window.setTimeout(() => {
      this.element.parentElement.removeChild(this.element);
    }, 500);
    document.removeEventListener("keyup", this.onKeyUp);
  }

 
  buildDOM(url) {
    const lightboxContainer = document.createElement("div");
    lightboxContainer.classList.add("lightbox__container");
    
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightboxContainer.append(lightbox);
    
    const btnClose = document.createElement("button");
    btnClose.classList.add("lightbox__close");
    btnClose.innerHTML = "Fermer";
    
    const btnNext = document.createElement("button");
    btnNext.classList.add("lightbox__next");
    btnNext.innerHTML = "Suivant";
    
    const btnPrev = document.createElement("button");
    btnPrev.classList.add("lightbox__prev");
    btnPrev.innerHTML = "Précédent";
    
    const figure = document.createElement("figure");
    figure.classList.add("lightbox__figure");
    lightbox.append(btnPrev, btnNext, btnClose, figure);
    
    const figcaption = document.createElement("figcaption");
    figcaption.classList.add("lightbox__caption");
    figcaption.innerHTML = this.mediaTitle;
    figure.append(figcaption);


    if (url.match(".jpg")) {
      const img = document.createElement("img");
      img.classList.add("lightbox__media");
      img.src = url;
      figure.append(img);
    } else if (url.match(".mp4")) {
      const video = document.createElement("video");
      video.classList.add("lightbox__media");
      video.setAttribute("autoplay", "");
      video.setAttribute("controls", "");
      video.setAttribute("loop", "");
      video.setAttribute("mute", "");
      video.src = url;
      figure.append(video);
    }

    lightbox.querySelector(".lightbox__close").addEventListener("click", this.close.bind(this));
    return lightboxContainer;
  }
}
