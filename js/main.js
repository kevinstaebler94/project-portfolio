function init() {
  initHoverImagePreview();
  renderReferences();
  initBurgerMenu();
  switchLang();
  initReferenceButtons(ref);
}

function toggleBurgerMenu() {
  const body = document.body;

  if (body.classList.contains("burger-menu--open")) {
    body.classList.remove("burger-menu--open");
  } else {
    body.classList.add("burger-menu--open");
  }
}

function initBurgerMenu() {
  const button = document.getElementById("burger-button");

  if (!button) return;
  button.addEventListener("click", toggleBurgerMenu);
}

document.addEventListener("DOMContentLoaded", init);
