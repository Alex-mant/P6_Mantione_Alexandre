export class Media {
    constructor(title, likes, url, photographer){
        this._title = title;
        this._likes = likes;
        this._url = url; /* media.image || media.video */
        this._nameOfPhotographer = photographer.name.split(" ")[0];
        this._link = document.querySelector("figure a");
    }
    
    init(media){
        this._figure = document.createElement("figure");
        this._figure.classList.add("gallery-cards")
        document.querySelector(".mediaGallery").append(this._figure);
        this._figure.innerHTML =
        `
        <figcaption class="media-titlesnlikes">
            <span class="media-titles">${this._title}</span>
            <span class="media-likes">
            <span class="counter">${this._likes}</span>
                <button class="unliked">
                    <i aria-hidden="true" class="fas fa-heart"></i>
                </button>
            </span>
        </figcaption>
        <a class="myMedia" href="./assets/albums/${this._nameOfPhotographer}/${this._url}">${media}</a> 
        `
    }

    image(){
        this._image = `        
            <img src="./assets/albums/${this._nameOfPhotographer}/${this._url}" class="media-imgnvideo">        
        `     
        this.init(this._image);
    }

    video(){
        this._video = `            
            <video src="./assets/albums/${this._nameOfPhotographer}/${this._url}" class="media-imgnvideo">            
        `     
        this.init(this._video);
    }
}
