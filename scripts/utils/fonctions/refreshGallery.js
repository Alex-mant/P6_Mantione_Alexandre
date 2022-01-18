export const refresh = (navList, myGallery) => {
    navList.addEventListener("change", () => {
        myGallery.mediaDisplay();
    });
}
