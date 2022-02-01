import { Mydata } from "../../entity/MyData.js";
import { regExpEmail, regExpName } from "../constants/regexp-handler.js";
import { notWithTab, withTab } from "./notWithTab.js";

/* APPARITION FORMULAIRE ET ASSIGNATION DU PHOTOGRAPHE */

export const createFormModal = async () => {
  const data = new Mydata();
  await data.initData();
  const photographer = data.getPhotographersById();
  notWithTab();

  document.querySelector(".modal").style.display = "block";
  document.querySelector(".form_title").innerHTML = `    
        Contactez-moi </br>${photographer.name}          
    `;
  document.addEventListener("keyup", onKeyUp);
};

/* OUVERTURE ET FERMETURE DU FORMULAIRE */
/*stockage des données utilisateurs */
let userLogs = {
  name: " ",
  surname: " ",
  email: " ",
  message: " ",
};

const saveUserMessage = () => {
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
}

export const openForm = () => {
  const btnOpenForm = document.querySelector(".contact_button");

  btnOpenForm.addEventListener("click", (event) => {
    event.preventDefault();
    createFormModal();
  });
  saveUserMessage();
};

export const closeForm = () => {
  const btnCloseForm = document.querySelector(".form_closeBtn button");
  btnCloseForm.addEventListener("click", () => {
    close();
  });
};

const onKeyUp = (e) => {
  if (e.key === "Escape") {
    close(e);
  }
}

const close = () => {
  window.setTimeout(() => {
    document.querySelector(".modal").style.display ="none"
  }, 325);
  withTab();
  document.removeEventListener("keyup", onKeyUp);
}

const validInputs = {
  name: false,
  surname: false,
  email: false,
  message : false
};


const isValidFormFields = (element, regExp, errorElement, keyName) => {
  element.addEventListener("input", () => {
    if (regExp.test(element.value)) {
      validInputs[keyName] = true;
      element.classList.remove("border_error");
      element.classList.add("border_sucess");
      errorElement.style.display = "none";
    } else {
      validInputs[keyName] = false;
      element.classList.remove("border_sucess");
      element.classList.add("border_error");
      errorElement.style.display = "block";
    }
    updateSubmitBtn();
  });
};

const everyInputIsValid = () => Object.values(validInputs).every((input) => input === true);

/* SUBMITBUTTON */
const updateSubmitBtn = () => {
  if (everyInputIsValid() === true){
    document.querySelector(".form_submitBtn").enabled = true
    document.querySelector(".form_submitBtn").classList.replace("submit_disabled","submit_enabled");
  } else {
    /*disabled*/
    document.querySelector(".form_submitBtn").disabled = true
    document.querySelector(".form_submitBtn").classList.replace("submit_enabled","submit_disabled");
  }  
}

export const submitForm = () => {
  const btnSubmitForm = document.querySelector(".form_submitBtn");
  btnSubmitForm.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(userLogs);
    close();  
  });
};


const name = document.querySelector("input#name");
const errorName = document.querySelector(".error-fName");

const surname = document.querySelector("input#surname");
const errorSurname = document.querySelector(".error-lName");

const email = document.querySelector("input#email");
const errorEmail = document.querySelector(".error-eMail");

isValidFormFields(name, regExpName, errorName, name);
isValidFormFields(surname, regExpName, errorSurname, surname);
isValidFormFields(email, regExpEmail, errorEmail, email);
