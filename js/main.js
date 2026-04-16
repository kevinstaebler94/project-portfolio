function init() {
  initHoverImagePreview();
  renderReferences();
  switchLang();
  document.addEventListener("mousemove", moveCursor);
}

function moveCursor(event) {
  const cursor = document.getElementById("cursor");
  if (!cursor) return;

  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
}

document.addEventListener("DOMContentLoaded", init);
