function init() {
  initHoverImagePreview();
  renderReferences();
  document.getElementById("nextCard").addEventListener("click", () => {
    currentCardIndex = (currentCardIndex + 1) % references.length;
    showActiveReference(currentCardIndex);
  });
}

document.addEventListener("DOMContentLoaded", init);
