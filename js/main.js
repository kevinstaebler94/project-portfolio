/**
 * Initializes the application by calling all setup functions.
 * Runs once the DOM is fully loaded.
 */
function init() {
  initHoverImagePreview();
  initBurgerMenu();
  initReferenceButtons();
  renderReferences();
  switchLang();
}

/**
 * Toggles the burger menu open/closed by adding or removing
 * the `burger-menu--open` class on the body element.
 */
function toggleBurgerMenu() {
  const body = document.body;

  if (body.classList.contains("burger-menu--open")) {
    body.classList.remove("burger-menu--open");
  } else {
    body.classList.add("burger-menu--open");
  }
}

/**
 * Finds the burger button and attaches a click handler
 * that calls {@link toggleBurgerMenu}.
 */
function initBurgerMenu() {
  const button = document.getElementById("burger-button");

  if (!button) return;
  button.addEventListener("click", toggleBurgerMenu);
}

document.addEventListener("DOMContentLoaded", init);
