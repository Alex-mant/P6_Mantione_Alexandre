export const refreshGallery = (Gallery) => {
    const currentOpt = document.querySelector(".currentOpt");
    const opt2 = document.querySelector(".opt2");
    const opt3 = document.querySelector(".opt3");
    const options = [currentOpt, opt2, opt3];
    options.forEach(opt =>{
        opt.addEventListener("click", () => {
            document.querySelector(".mediaGallery").innerHTML = "";
            Gallery.display();
        })
    });
}
