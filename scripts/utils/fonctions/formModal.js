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
let userLogs = {
  name: " ",
  surname: " ",
  email: " ",
  message: " ",
};

export const openForm = () => {
  const btnOpenForm = document.querySelector(".contact_button");

  btnOpenForm.addEventListener("click", (event) => {
    event.preventDefault();
    createFormModal();
  });
  
  /*enregistrement des entrées utilisateur*/
  document.querySelectorAll("form label input").forEach((input) => {
    input.addEventListener("change", () => {
      if (input.id === "name"){
        userLogs.name = input.value;
      } else if (input.id === "surname"){
        userLogs.surname = input.value;
      } else if (input.id === "email")
        userLogs.email = input.value ;
    });
  });

  /*enregristrement du message utilisateur*/
  const userMessage = document.querySelector("form label textarea")
  userMessage.addEventListener("change", () => {
    userLogs.message = userMessage.value;
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
    console.log(userLogs);    
  });
};
