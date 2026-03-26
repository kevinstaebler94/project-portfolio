const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const checkbox = document.getElementById("privacy");
const submitBtn = document.getElementById("submitBtn");

const pattern = {
  name: /^[a-zA-ZÀ-ž\s]{2,50}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: /^[\s\S]{10,500}$/,
};

const errorMessages = {
  name: "Oops! It seems your name is missing",
  email: "Hoppla! Your email is required",
  message: "What do you need to develop?",
};

function isValid() {
  return pattern.name.test(name.value) && pattern.email.test(email.value) && pattern.message.test(message.value) && checkbox.checked;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!isValid()) return;
  console.log("Mail gesendet");

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
