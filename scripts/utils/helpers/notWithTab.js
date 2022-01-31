const notWithTab1 = (array) => {
    array.forEach((x) => {
        x.setAttribute("tabindex",-1);
    })   
}

const notWithTab2 = (element) => {
    element.setAttribute("tabindex", -1);
}

export const unindex = () => {
    const medias = document.querySelectorAll(".myMedia");
    notWithTab1(medias);

    const coeur = document.querySelectorAll(".media-likes button");
    notWithTab1(coeur);

    const titre = document.querySelector("header a");
    notWithTab2(titre);

    const contact = document.querySelector(".contact_button");
    notWithTab2(contact);

    const filtre = document.querySelector(".options-container label");
    notWithTab2(filtre);
}