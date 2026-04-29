function init() {
  initHoverImagePreview();
  renderReferences();
  switchLang();
  initBurgerMenu();
  document.addEventListener("mousemove", moveCursor);
}

function moveCursor(event) {
  const cursor = document.getElementById("cursor");
  if (!cursor) return;

  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
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
  button.addEventListener("click", toggleBurgerMenu);
}

document.addEventListener("DOMContentLoaded", init);
