import { Mydata } from "../entity/MyData.js";

// Création dynamique des cartes de photographes
export const photographeDisplay = async () => {
  const data = new Mydata();
  await data.initData();
  const photographer = data.getAllPhotographers();

  // Création d'une boucle afin de creer du contenu HTML pour chaque itération des objets contenu dans les données récuperés
  document.querySelector(".photographer_section").innerHTML = photographer.map((allPhotograph) =>
        `
        <article class="index_card">
                <!-- envoi l'id dans l'url -->
            <a href="book.html?id=${allPhotograph.id}">
                <img class="index_profile" alt="photographe" src="${allPhotograph.portrait}"></img>
                <h2>${allPhotograph.name}</h2>
            </a>
            <p class="index_description">
                <span class="index_location">${allPhotograph.city}, ${allPhotograph.country}</span>
                <span class="index_tagline">${allPhotograph.tagline}</span>
                <span class="index_price">${Math.round(allPhotograph.price / 7)}€/heure</span>
            <p>
        </article>    
    `
    ).join("") // Supression des virgules présent sur l'écran
};
