export const refreshGallery = (triggersTheGalleryRefreshment, Gallery) => {
    triggersTheGalleryRefreshment.addEventListener("change", () => {
        const resetGallery = document.querySelector(".mediaGallery").innerHTML = "";
        Gallery.mediaDisplay();
    });
}
