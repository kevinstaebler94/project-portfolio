const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const checkbox = document.getElementById("privacy");
const errorMessage = document.getElementById("errorMessage");
const submitBtn = document.getElementById("submitBtn");

const pattern = {
  name: /^[a-zA-ZÀ-ž\s]{2,50}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: /^[\s\S]{10,500}$/,
};

const defaultPlaceholders = {
  name: name.getAttribute("data-default"),
  email: email.getAttribute("data-default"),
  message: message.getAttribute("data-default"),
};

const errorMessages = {
  name: "Oops! It seems your name is missing",
  email: "Hoppla! Your email is required",
  message: "What do you need to develop?",
};

function nameValidation() {
  if (!pattern.name.test(name.value)) {
    name.classList.add("error");
    name.placeholder = errorMessages.name;
    name.value = "";
    setTimeout(() => {
      name.classList.remove("error");
      name.placeholder = defaultPlaceholders.name;
    }, 3000);
    return false;
  } else {
    name.classList.remove("error");
    name.placeholder = defaultPlaceholders.name;
    return true;
  }
}

function emailValidation() {
  if (!pattern.email.test(email.value)) {
    email.classList.add("error");
    email.placeholder = errorMessages.email;
    email.value = "";
    setTimeout(() => {
      email.classList.remove("error");
      email.placeholder = defaultPlaceholders.email;
    }, 3000);
    return false;
  } else {
    email.classList.remove("error");
    email.placeholder = defaultPlaceholders.email;
    return true;
  }
}

function messageValidation() {
  if (!pattern.message.test(message.value)) {
    message.classList.add("error");
    message.placeholder = errorMessages.message;
    message.value = "";
    setTimeout(() => {
      message.classList.remove("error");
      message.placeholder = defaultPlaceholders.message;
    }, 3000);
    return false;
  } else {
    message.classList.remove("error");
    message.placeholder = defaultPlaceholders.message;
    return true;
  }
}

function inputValidation() {
  const isNameValid = nameValidation();
  const isEmailValid = emailValidation();
  const isMessageValid = messageValidation();
  return isNameValid && isEmailValid && isMessageValid && checkbox.checked;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!inputValidation()) {
    errorMessage.style.color = "#b86363";
    setTimeout(() => {
      errorMessage.style.color = "transparent";
    }, 3000);

    return;
  }
  console.log("Mail gesendet");
  form.reset();
  // emailjs.sendForm("service_urv966s", "template_6ro37zj", form).then(
  //   function () {
  //     alert("Nachricht erfolgreich gesendet!");
  //     form.reset();
  //   },
  //   function (error) {
  //     alert("Etwas ist schiefgelaufen: " + error.text);
  //   }
  // );
});
