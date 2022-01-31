import { getRuleWithSelector } from "./getRulesWithSelector.js";

const filterContainer = document.querySelector(".filter-container");
const optContainer = document.querySelector(".options-container");
const dropDownArrow = document.querySelector(".arrow");
const currentOption = document.querySelector(".current-option");
const opt2 = document.querySelector(".opt2");
const opt3 =document.querySelector(".opt3");


currentOption.addEventListener("click", () => {
    optContainer.classList.toggle("dropdown");
    dropDownArrow.classList.toggle("reverseArrow");
    filterContainer.classList.toggle("position-fix");
});








































































































// const selected = document.querySelector(".selected");
// const optionsContainer = document.querySelector(".options-container");
// const selectedAfterStyle = getRuleWithSelector(".selected::after");
// const optionsList = document.querySelectorAll(".option");

// selected.addEventListener("click", () => {
//     optionsContainer.classList.toggle("opt-active");
//     selected.classList.toggle("sel-radius");
//     selectedAfterStyle.style.transform = "rotate(270deg)"
// });

// optionsList.forEach((o) => {
//     o.addEventListener("click", () => {
//         let options = Array.from(o.parentElement.children);
//         options.map(option => {
//             if(option.classList.contains("disNone")){
//                 option.classList.remove("disNone");
//             }
//         });
                        
//         selected.innerHTML = o.querySelector("label").innerHTML;
//         optionsContainer.classList.remove("opt-active");
//         selected.classList.toggle("sel-radius");
//         o.classList.add("disNone");
//         selectedAfterStyle.style.transform = "rotate(90deg)"      
//     });
// });
