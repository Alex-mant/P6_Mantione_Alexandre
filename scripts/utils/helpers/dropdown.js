const filterContainer = document.querySelector(".filter-container");
const optContainer = document.querySelector(".options-container");
const dropDownArrow = document.querySelector(".arrow");

let currentOpt = document.querySelector(".currentOpt");
let opt2 = document.querySelector(".opt2");
let opt3 = document.querySelector(".opt3");
const options = [currentOpt, opt2, opt3];

optContainer.addEventListener("click", () => {
    optContainer.classList.toggle("dropdown");
    dropDownArrow.classList.toggle("reverseArrow");
    filterContainer.classList.toggle("position-fix");
    if (optContainer.classList.contains("dropdown")){
        opt2.setAttribute("tabindex",0);
        opt3.setAttribute("tabindex",0);
    } else {
        opt2.setAttribute("tabindex",-1);
        opt3.setAttribute("tabindex",-1);
    }
});


options.forEach((opt) => {
    opt.addEventListener("click", () => {
        let switchOpt;
        let switchCurrent = currentOpt.innerHTML

        switchOpt = opt.innerText;        
        opt.innerText = switchCurrent;
        opt.name = switchCurrent;

        currentOpt.innerText = switchOpt;
        currentOpt.name = switchOpt;
        
    })
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
