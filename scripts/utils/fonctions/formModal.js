import { Mydata } from "../entity/MyData.js";

/* APPARITION FORMULAIRE ET ASSIGNATION DU PHOTOGRAPHE */

export const createFormModal = async () => {
  const data = new Mydata();
  await data.initData();
  const photographer = data.getPhotographersById();

  document.querySelector(".modal").style.display = "block";
  document.querySelector(".form_title").innerHTML = `    
        Contactez-moi </br>${photographer.name}          
    `;
};

/* OUVERTURE ET FERMETURE DU FORMULAIRE */
export const openForm = () => {
  const btnOpenForm = document.querySelector(".contact_button");

  btnOpenForm.addEventListener("click", (event) => {
    event.preventDefault();
    createFormModal();
  });
};

export const closeForm = () => {
  const btnCloseForm = document.querySelector(".form_closeBtn");
  btnCloseForm.addEventListener("click", () => {
    document.querySelector(".modal").style.display = "none";
  });
};

/* SUBMITBUTTON */

export const submitForm = () => {
  const btnSubmitForm = document.querySelector(".form_submitBtn");
  btnSubmitForm.addEventListener("click", (event) => {
    event.preventDefault();
  });
};
