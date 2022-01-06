/*AFFiCHE LES INFOS PHOTOGRAPHE */
export const cardInfoPhotographer = (photographer) => {
    document.querySelector(".photograph-book_portrait").src = `${photographer.portrait}`;
    document.querySelector(".photograph-book_name").innerHTML = `${photographer.name}`;
    document.querySelector(".photograph-book_location").innerHTML = `${photographer.city}, ${photographer.country}`;
    document.querySelector(".photograph-book_tagline").innerHTML = `${photographer.tagline}`;
    document.querySelector(".pricePerHour").innerHTML = `${Math.round(photographer.price / 8)}€/heure`;
}