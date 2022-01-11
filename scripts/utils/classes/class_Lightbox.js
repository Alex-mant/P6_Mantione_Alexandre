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
    this._mediaTitle;
    this._mediaUrl;
    medias.forEach((media) => {
      if (media.image === currentHref) {
        this._mediaTitle = media.title;
        this._mediaUrl = "./assets/albums/" + nameOfPhotographer + "/" + media.image;
      } else if (media.video === currentHref) {
        this._mediaTitle = media.title;
        this._mediaUrl = media.video;
      }
    });

    this._element = this.buildDOM(url);
    this._onKeyUp = this.onKeyUp.bind(this);
    this._images = images;
    document.body.append(this._element);
    document.addEventListener("keyup", this.onKeyUp);
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

    this._figure = document.createElement("figure");
    this._figure.classList.add("lightbox__figure");
    lightbox.append(btnPrev, btnNext, btnClose, this._figure);

    const figcaption = document.createElement("figcaption");
    figcaption.classList.add("lightbox__caption");
    figcaption.innerHTML = this._mediaTitle;
    this._figure.append(figcaption);

    if (url.match(".jpg")) {
      this._image = document.createElement("img");
      this._image.classList.add("lightbox__media");
      this._image.src = url;
      this._figure.append(this._image);
    } else if (url.match(".mp4")) {
      this._video = document.createElement("video");
      this._video.classList.add("lightbox__media");
      this._video.setAttribute("autoplay", "");
      this._video.setAttribute("controls", "");
      this._video.setAttribute("loop", "");
      this._video.setAttribute("mute", "");
      this._video.src = url;
      this._figure.append(this._video);
    }

    lightbox.querySelector(".lightbox__close").addEventListener("click", this.close.bind(this));
    lightbox.querySelector(".lightbox__next").addEventListener("click", this.next.bind(this));
    lightbox.querySelector(".lightbox__prev").addEventListener("click", this.prev.bind(this));
    return lightboxContainer;
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

  loadImage() {
    this._url = null;
    const image = new Image();
    console.log(image);/*LOG*/
    image.onload = () => {
      this._figure.appendChild(this._image);
      this._url = this._mediaUrl;
    };
    image.src = this._mediaUrl;
  }

  next(e) {
    e.preventDefault();
    let position = this._images.findIndex((image) => image === this._mediaUrl);
    if (position === this._images.length - 1) {
      position = -1;
    }
    this.loadImage(this._images[position + 1]);
  }

  prev(e) {
    e.preventDefault();
    let position = this._images.findIndex((image) => image === this._mediaUrl);
    if (position === 0) {
      position = this._images.length;
    }
    this.loadImage(this._images[position - 1]);
  }
}
