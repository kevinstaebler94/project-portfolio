const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const approval = document.getElementById("approvalMessage");
const checkbox = document.getElementById("privacy");
const errorMessage = document.getElementById("errorMessage");
const submitBtn = document.getElementById("submitBtn");

const pattern = {
  name: /^[a-zA-ZÀ-ž\s]{2,50}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: /^[\s\S]{10,500}$/,
};

function getCurrentTexts() {
  return getTranslations()[currentLang];
}

function updatePlaceholders() {
  const texts = getCurrentTexts();

  name.placeholder = texts.contact.form.name_placeholder;
  email.placeholder = texts.contact.form.email_placeholder;
  message.placeholder = texts.contact.form.message_placeholder;
}

function isNameValid() {
  return pattern.name.test(name.value);
}

function isEmailValid() {
  return pattern.email.test(email.value);
}

function isMessageValid() {
  return pattern.message.test(message.value);
}

function isCheckboxChecked() {
  return checkbox.checked;
}

function showInputError(input, text) {
  input.classList.add("error");
  input.placeholder = text;
  input.value = "";

  setTimeout(() => {
    input.classList.remove("error");
    updatePlaceholders();
  }, 3000);
}

function showNameError() {
  const texts = getCurrentTexts();
  showInputError(name, texts.contact.form.name_error);
}

function showEmailError() {
  const texts = getCurrentTexts();
  showInputError(email, texts.contact.form.email_error);
}

function showMessageError() {
  const texts = getCurrentTexts();
  showInputError(message, texts.contact.form.message_error);
}

function showCheckboxError() {
  errorMessage.style.color = "#b86363";

  setTimeout(() => {
    errorMessage.style.color = "transparent";
  }, 3000);
}

function showApprovalMessage() {
  const texts = getCurrentTexts();

  approval.innerText = texts.contact.form.approval_message;

  approval.classList.remove("approval__message--hide");
  approval.classList.add("approval__message--show");

  setTimeout(() => {
    approval.classList.remove("approval__message--show");
    approval.classList.add("approval__message--hide");
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

  if (!isCheckboxChecked()) {
    showCheckboxError();
    valid = false;
  }

  return valid;
}

function toggleButton() {
  submitBtn.disabled = !checkbox.checked;
}

form.addEventListener("change", toggleButton);

name.addEventListener("blur", () => {
  if (!isNameValid()) {
    showNameError();
  }
});

email.addEventListener("blur", () => {
  if (!isEmailValid()) {
    showEmailError();
  }
});

message.addEventListener("blur", () => {
  if (!isMessageValid()) {
    showMessageError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateForm()) {
    checkbox.checked = false;
    toggleButton();
    return;
  }

  showApprovalMessage();
  form.reset();
  updatePlaceholders();

  emailjs.sendForm("service_urv966s", "template_6ro37zj", form).then(
    function () {
      alert("Nachricht erfolgreich gesendet!");
      form.reset();
    },
    function (error) {
      alert("Etwas ist schiefgelaufen: " + error.text);
    }
  );
});
