const form = document.getElementById("contactForm");

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
