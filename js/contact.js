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

function isNameValid() {
  return pattern.name.test(name.value);
}

function showNameError() {
  name.classList.add("error");
  name.placeholder = errorMessages.name;
  name.value = "";

  setTimeout(() => {
    name.classList.remove("error");
    name.placeholder = defaultPlaceholders.name;
  }, 3000);
}

function isEmailValid() {
  return pattern.email.test(email.value);
}

function showEmailError() {
  email.classList.add("error");
  email.placeholder = errorMessages.email;
  email.value = "";

  setTimeout(() => {
    email.classList.remove("error");
    email.placeholder = defaultPlaceholders.email;
  }, 3000);
}

function isMessageValid() {
  return pattern.message.test(message.value);
}

function showMessageError() {
  message.classList.add("error");
  message.placeholder = errorMessages.message;
  message.value = "";

  setTimeout(() => {
    message.classList.remove("error");
    message.placeholder = defaultPlaceholders.message;
  }, 3000);
}

function isCheckboxChecked() {
  return checkbox.checked;
}

function showCheckboxError() {
  errorMessage.style.color = "#b86363";

  setTimeout(() => {
    errorMessage.style.color = "transparent";
  }, 3000);
}

function validateForm() {
  let valid = true;

  if (!isNameValid()) {
    showNameError();
    valid = false;
  }

  if (!isEmailValid()) {
    showEmailError();
    valid = false;
  }

  if (!isMessageValid()) {
    showMessageError();
    valid = false;
  }

  // if (!isCheckboxChecked()) {
  //   showCheckboxError();
  //   valid = false;
  // }

  return valid;
}

addEventListener("change", () => {
  submitBtn.disabled = !submitBtn.disabled;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateForm()) return;
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
