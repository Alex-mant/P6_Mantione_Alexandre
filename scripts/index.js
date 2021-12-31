// Variable de stockage des données
let fisheyeData = [];

// Récuperation des données via le fichier JSON avec la méthode 'fetch'
const fetchPhotographe = async () => {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    // Stockage des données dans la variable créée au préalable 'fisheyeData'
    .then((promise) => {
      fisheyeData = promise.photographers;
    });
};

// Création dynamique des cartes de photographes avec les données récuperées ci dessus
const photographeDisplay = async () => {
  await fetchPhotographe();

  // Création d'une boucle afin de creer du contenu HTML pour chaque itération des objets contenu dans les données récuperés
  document.querySelector(".photographer_section").innerHTML = fisheyeData
    .map((photographer) =>
        `
    <article class="index_card">
        <a href="book.html?id=${photographer.id}">
            <img class="index_profile" alt="${photographer.name}" src="${photographer.portrait}"></img>
            <h2>${photographer.name}</h2>
        </a>
        <p class="index_description">
            <span class="index_location">${photographer.city}, ${photographer.country}</span>
            <span class="index_tagline">${photographer.tagline}</span>
            <span class="index_price">${Math.round(photographer.price / 8)}€/heure</span>
        <p>
    </article>    
    `
    )
    .join(""); // Supression des virgules présent sur l'écran
};

photographeDisplay();
