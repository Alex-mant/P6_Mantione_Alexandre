/**
 * @property {HTMLElement} element
 */

export class Lightbox{  

    static init(){
        const links = document.querySelectorAll('a[href$=".png"], a[href$=".jpg"],a[href$=".mp4"]')
        .forEach(link =>{
            link.addEventListener("click", (e) => {
                e.preventDefault();
                new Lightbox(e.currentTarget.getAttribute("href"));
            })            
        })
    }
    
    /**
     * URL de l'image
     * @param {string} url 
     */
    
    constructor (url) {
        this.element = this.buildDOM(url);
        this.onKeyUp = this.onKeyUp.bind(this);
        document.body.appendChild(this.element);
        document.addEventListener("keyup",this.onKeyUp);
        
    }   
    
    onKeyUp(e){
        if(e.key === 'escape'){
            this.close(e);
        }
    }    
    
    /**
     * FERME la Lightbox
     * @param {MouseEvent} e
     */
    close (e) {
        e.preventDefault();
        this.element.classList.add('fadeOut');
        window.setTimeout(()=>{
            this.element.parentElement.removeChild(this.element)
        },500);
        document.removeEventListener("keyup",this.onKeyUp);
    }
    
    /**
     * URL de l'image
     * @param {string} url 
     */
    /**
     * @return {HTMLElement}
     */
    
    buildDOM (url) {
        const dom = document.createElement("div");
        dom.classList.add("lightbox");
        
        const btnClose = document.createElement("button");
        btnClose.classList.add("lightbox__close");
        btnClose.innerHTML = "Fermer"
        
        const btnNext = document.createElement("button");
        btnNext.classList.add("lightbox__next");
        btnNext.innerHTML = "Suivant"
        
        const btnPrev = document.createElement("button");
        btnPrev.classList.add("lightbox__prev");
        btnPrev.innerHTML = "Précédent"
        
        const figure = document.createElement("figure");
        figure.classList.add("lightbox__figure");
        
        const figcaption = document.createElement("figcaption");
        figcaption.classList.add("lightbox__caption");
      
        const divMediaContainer = document.createElement("div");
        divMediaContainer.classList.add("lightbox__container");
        dom.append(btnClose,btnNext, btnPrev, divMediaContainer);
        
        if (url.match(".jpg")) {
            const img = document.createElement("img");
            img.classList.add("lightbox__media")
            img.src = url;
            divMediaContainer.append(img);
        }else if (url.match(".mp4")) {
            const video = document.createElement("video");
            video.classList.add("lightbox__media");
            video.setAttribute("autoplay", "");
            video.setAttribute("controls", "");
            video.setAttribute("loop", "");
            video.setAttribute("mute", "");
            video.src = url;
            divMediaContainer.append(video);
        }
        
        dom.querySelector(".lightbox__close").addEventListener("click", this.close.bind(this));
        return dom;
        
    };
};
