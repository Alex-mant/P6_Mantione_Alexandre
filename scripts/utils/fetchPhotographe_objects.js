// Variable de stockage des données
export let fisheyeData = [];

// Récuperation des données via le fichier JSON avec la méthode 'fetch'
export const fetchPhotographe = async () => {
    await fetch("./data/photographers.json")
    .then((res) => res.json())
    // Stockage des données dans la variable créée au préalable 'fisheyeData'
    .then((promise) => {
        fisheyeData = promise.photographers;
    });
};