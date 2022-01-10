export const countOfLikes = (medias) => {
    let myCountOfLikes = medias.map(item => item.likes).reduce((prev, curr) => prev + curr, 0);
    const totalCounter = document.querySelector(".likes-count");
    let setCounterOfLikes = totalCounter.innerHTML = myCountOfLikes;
    let allButtons = document.querySelectorAll(".media-likes button");

    /* incrementation et décrémentation des compteurs au click sur bouton like */
    allButtons.forEach(button => {
        button.addEventListener("click",() => {
            if(button.classList.contains("unliked")){
                button.classList.replace("unliked", "liked");
                setCounterOfLikes += 1   //incrémentation du compteur total
                totalCounter.innerHTML = setCounterOfLikes; // refresh du compteur total
                button.parentNode.children[0].textContent++;  //incrémentation du compteur local
            } else {
                button.classList.replace("liked", "unliked");
                setCounterOfLikes -= 1   //décrémentation du compteur total
                totalCounter.innerHTML = setCounterOfLikes; // refresh du compteur total
                button.parentNode.children[0].textContent--; //décrémentation du compteur local
            }
        })
    });
};
