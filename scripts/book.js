const openModal = () => {
    const btnOpenModal = document.querySelector(".contact_button");
    
    btnOpenModal.addEventListener("click", (event) => {
        event.preventDefault();
        createModal();
    });
}

const closeModal = () => {
    const btnCloseModal = document.querySelector(".form_closeBtn");    
    btnCloseModal.addEventListener("click", () => {
        document.querySelector(".modal").style.display = "none";        
    });
}

openModal();
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

createModal = async () => {
    await fetchPhotographe();   
    
    /* getCurrentName :
    Récupère l'id envoyé dans l'url,
    traite les caractères inutiles
    et établi une recherche basé sur cette dernière
    afin de renvoyé la valeur d'une clé voisine contenue dans ce même objet.
    */
   const getCurrentName = () =>{
       myId = window.location.search.split("?id=").join("");
       return fisheyeData.find(x => x.id == myId).name
    }    
    
    document.querySelector(".modal").style.display = "block";
    document.querySelector(".modal").innerHTML =

    `
    <div class="form_container">
        <span class="form_closeBtn">
            <img src="./assets/icons/close.svg" alt="">
        </span>
        <form action="">
            <h2>Contactez-moi </br>${getCurrentName()}</h2>
            <label for="">
                <p class="form_text">Prénom</p>
                <input class="form_input" type="text">
            </label>
            <label for="">
                <p class="form_text">Nom</p>
                <input class="form_input" type="text">
            </label>
            <label for="">
                <p class="form_text">Email</p>
                <input class="form_input" type="text">
            </label>
            <label for="">
                <p class="form_text ">Votre message</p>
                <textarea class="form_input message" type="text"></textarea>
            </label>
            </br></br>
            <button class="form_submitBtn"type="submit">Envoyer</button>
        </form>
    </div>
    `

    closeModal();
};


