const form = document.getElementById("contactForm");

const pattern = {
  name: /^[a-zA-ZÀ-ž\s]{2,50}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: /^[\s\S]{10,500}$/,
};

form.addEventListener("submit", function (event) {
  event.preventDefault();

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
