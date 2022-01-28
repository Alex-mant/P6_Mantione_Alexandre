import { getRuleWithSelector } from "./getRulesWithSelector.js";

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const selectBox = document.querySelector("select-box");
const selectedAfterStyle = getRuleWithSelector(".selected::after");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("opt-active");
    selected.classList.toggle("sel-radius");
    selectedAfterStyle.style.transform = "rotate(270deg)"

    
});

optionsList.forEach((o) => {
    o.addEventListener("click", () => {
        let options = Array.from(o.parentElement.children);
        options.map(option => {
            if(option.classList.contains("disNone")){
                option.classList.remove("disNone");
            }
        });
                        
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("opt-active");
        selected.classList.toggle("sel-radius");
        o.classList.add("disNone");
        selectedAfterStyle.style.transform = "rotate(90deg)"      
    });
});
