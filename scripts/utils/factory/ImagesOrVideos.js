export const factoryGallery = (medias, photographer) => {
  const createMediaEnvironnement = (media) => {
    const name = photographer.name.split(" ")[0];
    /*Création des élements*/
    const figure = document.createElement("figure");
    let image;
    let video;
    if (media.image) {
      image = document.createElement("img");
    } else if (media.video) {
      video = document.createElement("video");
    }
    const MediaLink = document.createElement("a");
    const figCaption = document.createElement("figcaption");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    /*Assignation des attributs*/
    if (media.image) {
      image.setAttribute("src", `./assets/albums/${name}/${media.image}`);
    } else if (media.video) {
        video.setAttribute("src", `./assets/albums/${name}/${media.video}`);
    }
    MediaLink.setAttribute("href", `./assets/albums/${name}/${media.image}`);

    /*Assignation de classes css*/
    figure.classList.add("gallery-cards");
    if (media.image) {
      image.classList.add("media-imgnvideo");
    } else if (media.video) {
      video.classList.add("media-imgnvideo");
    }
    figCaption.classList.add("media-titlesnlikes");
    span1.classList.add("media-title");
    span2.classList.add("media-likes");
    /* Ajout dans l'HTML */
    span1.innerHTML = media.title;
    span2.innerHTML = `${media.likes} <button role="button" aria-label="likes" class="btn--work"><i aria-hidden="true" class="fas fa-heart"></i></button>`;
    /*RATTACHEMENT des elements*/
    document.querySelector(".mediaGallery").append(figure);
    figure.append(figCaption, MediaLink);
    figCaption.append(span1, span2);
    if (media.image) {
      MediaLink.append(image);
    } else if (media.video) {
      MediaLink.append(video);
    }
  };
 
  const createImage = (media) => {
    createMediaEnvironnement(media);
  };
  const createVideo = (media) => {
    createMediaEnvironnement(media);
  };

  medias.forEach((media) => {
    if (media.video) {
      createVideo(media);
    } else if (media.image) {
      createImage(media);
    }
  });
};
