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

/**
 * Returns the translation strings for the currently active language.
 * @returns {object} Nested translation object for the active language.
 */
function getCurrentTexts() {
  return getTranslations()[currentLang];
}

/**
 * Updates all form input placeholders to match the currently active language.
 */
function updatePlaceholders() {
  const texts = getCurrentTexts();

  name.placeholder = texts.contact.form.name_placeholder;
  email.placeholder = texts.contact.form.email_placeholder;
  message.placeholder = texts.contact.form.message_placeholder;
}

/**
 * Checks whether the name input matches the required pattern.
 * @returns {boolean} `true` if the name is valid.
 */
function isNameValid() {
  return pattern.name.test(name.value);
}

/**
 * Checks whether the email input matches the required pattern.
 * @returns {boolean} `true` if the email is valid.
 */
function isEmailValid() {
  return pattern.email.test(email.value);
}

/**
 * Checks whether the message input matches the required pattern.
 * @returns {boolean} `true` if the message is valid.
 */
function isMessageValid() {
  return pattern.message.test(message.value);
}

/**
 * Checks whether the privacy policy checkbox is checked.
 * @returns {boolean} `true` if the checkbox is checked.
 */
function isCheckboxChecked() {
  return checkbox.checked;
}

/**
 * Puts an input field into an error state: adds the `error` CSS class,
 * sets the placeholder to the error text, clears the value,
 * and resets the field after 3 seconds.
 * @param {HTMLInputElement} input - The input element to mark as invalid.
 * @param {string} text - The error message to show as placeholder.
 */
function showInputError(input, text) {
  input.classList.add("error");
  input.placeholder = text;
  input.value = "";

  setTimeout(() => {
    input.classList.remove("error");
    updatePlaceholders();
  }, 3000);
}

/**
 * Shows a validation error on the name input field.
 */
function showNameError() {
  const texts = getCurrentTexts();
  showInputError(name, texts.contact.form.name_error);
}

/**
 * Shows a validation error on the email input field.
 */
function showEmailError() {
  const texts = getCurrentTexts();
  showInputError(email, texts.contact.form.email_error);
}

/**
 * Shows a validation error on the message textarea.
 */
function showMessageError() {
  const texts = getCurrentTexts();
  showInputError(message, texts.contact.form.message_error);
}

/**
 * Highlights the privacy checkbox error message in red for 3 seconds.
 */
function showCheckboxError() {
  errorMessage.style.color = "#b86363";

  setTimeout(() => {
    errorMessage.style.color = "transparent";
  }, 3000);
}

/**
 * Shows the success confirmation message after a form submission,
 * then hides it again after 3 seconds.
 */
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

/**
 * Validates all form fields.
 * Shows individual error feedback for each invalid field.
 * @returns {boolean} `true` if all fields are valid, `false` otherwise.
 */
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

/**
 * Enables or disables the submit button depending on
 * whether the privacy checkbox is checked.
 */
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

  console.log("Name:", form.from_name.value);
  console.log("Email:", form.from_email.value);
  console.log("Message:", form.message.value);

  emailjs.sendForm("service_urv966s", "template_6ro37zj", form).then(
    function () {
      showApprovalMessage();
      form.reset();
      updatePlaceholders();
    },
    function (error) {
      alert("Etwas ist schiefgelaufen: " + error.text);
    }
  );
});
