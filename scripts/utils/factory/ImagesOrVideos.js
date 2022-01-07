export const factoryGallery = async (medias, photographer) => {
  const video = () => {
        const mediaFiltered = medias.filter((media) => (media.video));        
        const name = photographer.name.split(" ")[0];
        
        console.log(mediaFiltered[0].title);
        /*Création des élements*/
        const figure = document.createElement("figure");
        const MediaLink = document.createElement("a");
        const video = document.createElement("video");
        const figCaption = document.createElement("figcaption");
        const span1 = document.createElement("span");
        const span2 = document.createElement("span");
        /*Assignation des attributs*/
        MediaLink.setAttribute('href', `./assets/albums/${name}/${mediaFiltered[0].video}`);
        video.setAttribute('src', `./assets/albums/${name}/${mediaFiltered[0].video}`)
        /*Assignation de classes css*/
        figure.classList.add('gallery-cards');
        video.classList.add('media-img');
        figCaption.classList.add('media-titlesnlikes');
        span1.classList.add('media-title');
        span2.classList.add('media-likes');
        /* Ajout dans l'HTML */
        span1.innerHTML = `${mediaFiltered[0].title}`
        span2.innerHTML = ` ${mediaFiltered[0].likes}<button role="button" aria-label="likes" class="btn--work"><i aria-hidden="true" class="fas fa-heart"></i></button>`
        /*RATTACHEMENT des elements*/
        document.querySelector(".mediaGallery").append(figure);
        figure.append(figCaption,MediaLink);
        figCaption.append(span1, span2);
        MediaLink.append(video);
    };
    
    const image = (media) => {
        const name = photographer.name.split(" ")[0];

        /*Création des élements*/
        const figure = document.createElement("figure");
        const MediaLink = document.createElement("a");
        const image = document.createElement("img");
        const figCaption = document.createElement("figcaption");
        const span1 = document.createElement("span");
        const span2 = document.createElement("span");
        /*Assignation des attributs*/
        MediaLink.setAttribute('href', `./assets/albums/${name}/${media.image}`);
        image.setAttribute('src', `./assets/albums/${name}/${media.image}`)
        /*Assignation de classes css*/
        figure.classList.add('gallery-cards');
        image.classList.add('media-img');
        figCaption.classList.add('media-titlesnlikes');
        span1.classList.add('media-title');
        span2.classList.add('media-likes');
        /* Ajout dans l'HTML */
        span1.innerHTML = media.title;
        span2.innerHTML = `${media.likes} <button role="button" aria-label="likes" class="btn--work"><i aria-hidden="true" class="fas fa-heart"></i></button>`
        /*RATTACHEMENT des elements*/
        document.querySelector(".mediaGallery").append(figure);
        figure.append(figCaption,MediaLink);
        figCaption.append(span1, span2);
        MediaLink.append(image);
    };

    medias.forEach((media) => {
        if (media.video) {
            video();
        } else if (media.image)  {             
            image(media);
        }
    });
    
    
};



