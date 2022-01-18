export const refresh = (navList, myGallery) => {
    navList.addEventListener("change", () => {
        const resetGallery = document.querySelector(".mediaGallery").innerHTML = "";
        myGallery.mediaDisplay();
    });
}
