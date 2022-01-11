export const factoryGallery = (medias, photographer) => {
  const createMediaEnvironnement = (media) => {
    const name = photographer.name.split(" ")[0];

    /*Création des élements*/
    let image;
    let video;
    const figure = document.createElement("figure");
    const MediaLink = document.createElement("a");
    const figCaption = document.createElement("figcaption");
    const likeButton = document.createElement("button")
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
  
    /*Condition de création en fonction du type de média*/
    if (media.image) {
      /*Création des élements*/
      image = document.createElement("img");
      /*Assignation des attributs*/
      image.setAttribute("src", `./assets/albums/${name}/${media.image}`);
      MediaLink.setAttribute("href", `./assets/albums/${name}/${media.image}`);
      /*Assignation de classes css*/
      image.classList.add("media-imgnvideo");
      /*RATTACHEMENT des elements*/
      MediaLink.append(image);
    } else if (media.video) {
      /*Création des élements*/
      video = document.createElement("video");
      /*Assignation des attributs*/
      video.setAttribute("src", `./assets/albums/${name}/${media.video}`);
      MediaLink.setAttribute("href", `./assets/albums/${name}/${media.video}`);
      /*Assignation de classes css*/
      video.classList.add("media-imgnvideo");
      /*RATTACHEMENT des elements*/
      MediaLink.append(video);
    }

    /*Assignation de classes css*/
    figure.classList.add("gallery-cards");
    figCaption.classList.add("media-titlesnlikes");
    likeButton.classList.add("unliked")
    span1.classList.add("media-title");
    span2.classList.add("media-likes");
    /* Ajout dans l'HTML */
    likeButton.innerHTML = `<i aria-hidden="true" class="fas fa-heart"></i>`
    span1.innerHTML = media.title;
    span2.innerHTML = `<span class= "counter">${media.likes}</span>`
    /*RATTACHEMENT des elements*/
    document.querySelector(".mediaGallery").append(figure);
    figure.append(figCaption, MediaLink);
    figCaption.append(span1, span2);
    span2.append(likeButton);

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
