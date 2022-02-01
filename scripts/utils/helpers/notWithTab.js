const notWithTabModule1 = (array) => {
    array.forEach((x) => {
        x.setAttribute("tabindex",-1);
    })   
}

const notWithTabModule2 = (element) => {
    element.setAttribute("tabindex", -1);
}

export const notWithTab = () => {
    const filtre = document.querySelector(".options-container button");
    const contact = document.querySelector(".contact_button");
    const titre = document.querySelector("header a");
    const medias = document.querySelectorAll(".myMedia");
    const coeur = document.querySelectorAll(".media-likes button");
    notWithTabModule1(medias);
    notWithTabModule1(coeur);
    notWithTabModule2(titre);
    notWithTabModule2(contact);
    notWithTabModule2(filtre);
}

const withTabModule1 = (array) => {
    array.forEach((el) => {
        el.removeAttribute("tabindex")
    })   
}

const withTabModule2 = (element) => {
    element.removeAttribute("tabindex");
}

export const withTab = () => {
    const filtre = document.querySelector(".options-container button");
    const contact = document.querySelector(".contact_button");
    const titre = document.querySelector("header a");
    const medias = document.querySelectorAll(".myMedia");
    const coeur = document.querySelectorAll(".media-likes button");
    withTabModule1(medias);
    withTabModule1(coeur);
    withTabModule2(titre);
    withTabModule2(contact);
    withTabModule2(filtre);
    filtre.setAttribute("tabindex", 0)
}