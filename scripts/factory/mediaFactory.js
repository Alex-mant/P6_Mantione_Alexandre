import { Media } from "../controllers/Media.js";

export const mediaFactory = (medias, nameOfPhotographer) =>{
    medias.forEach(media => {
        if (media.image){
            media = new Media(media.title, media.likes, media.image, nameOfPhotographer);
            media.image()
        } else if (media.video){
            media = new Media (media.title, media.likes, media.video, nameOfPhotographer);
            media.video()
        }
    });
       
}
