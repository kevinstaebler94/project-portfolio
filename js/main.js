/**
 * Initializes the application by calling all setup functions.
 * Runs once the DOM is fully loaded.
 */
function init() {
  setLanguage(currentLang);
  initHoverImagePreview();
  initBurgerMenu();
  switchLang(currentLang);
  renderReferences();
  initiateCarouselSlider();
  renderReferenceDots();
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

/**
 * Closes the burger menu when the viewport width exceeds 969 px.
 * Called on every `resize` event.
 */
function checkWindowSize() {
  const body = document.body;

  if (window.innerWidth > 969 && body.classList.contains("burger-menu--open")) {
    body.classList.remove("burger-menu--open");
  }
}

document.addEventListener("DOMContentLoaded", init);

window.addEventListener("resize", checkWindowSize);
