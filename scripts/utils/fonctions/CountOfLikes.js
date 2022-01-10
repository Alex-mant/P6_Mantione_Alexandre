export const countOfLikes = (medias) => {

    let myCountOfLikes = medias.map(item => item.likes).reduce((prev, curr) => prev + curr, 0);
    document.querySelector(".likes-count").innerHTML = `${myCountOfLikes} `;

    let allButtons = document.querySelectorAll(".media-likes button");

    allButtons.forEach(button => {
        if (button.classList.contains("unliked")){
            button.addEventListener("click", ()=>{
                button.classList.remove("unliked");
                button.classList.add("liked");
                console.log("++");                
                if (button.classList.contains("liked")){
                    button.addEventListener("click", ()=>{
                        button.classList.add("unliked");
                        button.classList.remove("liked");
                        console.log("--");
                    });
                }      
            });
        }   
      
    });
}

// if (button
// myCountOfLikes += 1;
// document.querySelector(".likes-count").innerHTML = `${myCountOfLikes}`;         
/*

si unliked
ecoute click

    si click
    add class like
    remove class unliked

    sinon rien

si liked
ecoute click

    si click
    removeclass like
    add class unliked

    sinon rien
*/