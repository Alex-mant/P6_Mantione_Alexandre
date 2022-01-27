export const refreshGallery = (Gallery) => {
    const options = document.querySelectorAll(".option");
    options.forEach(opt =>{
        opt.addEventListener("click", () => {
            document.querySelector(".mediaGallery").innerHTML = "";
            Gallery.display();
        })
    });
}
