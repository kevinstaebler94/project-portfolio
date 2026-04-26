let currentProjectIndex = 0;
let currentRefIndex = 0;
let currentLang = "en";
const projectKeys = Object.keys(projectList);

function getModalElements() {
  return {
    modal: document.getElementById("project-modal"),
    number: document.getElementById("project-modal-number"),
    title: document.getElementById("project-modal-title"),
    description: document.getElementById("project-modal-description"),
    image: document.getElementById("project-modal-img"),
    overlay: document.getElementById("project-modal-overlay"),
  };
}

function openProjectModal(projectKey) {
  if (!projectList || !projectList[projectKey]) return;

  currentProjectIndex = projectKeys.indexOf(projectKey);
  const modalData = getModalElements();

  if (!modalData.modal || !modalData.overlay) return;

  modalData.number.innerText = projectList[projectKey].number;
  modalData.title.innerText = projectList[projectKey].title;
  modalData.description.innerText = projectList[projectKey].description[currentLang];
  modalData.image.src = projectList[projectKey].image;

  renderModalSkills(projectKey);
  modalData.modal.classList.remove("dNone");
  modalData.overlay.classList.remove("dNone");
  document.body.style.overflow = "hidden";
}

function renderModalSkills(projectKey) {
  const modalSkills = document.getElementById("project-modal-skills");
  if (!modalSkills || !projectList || !projectList[projectKey]) return;

  modalSkills.innerHTML = "";

  for (let i = 0; i < projectList[projectKey].languages.length; i++) {
    modalSkills.innerHTML += `
    <div class="project-modal__skill">
      <img src="${projectList[projectKey].languages[i].icon}" alt="" />
      <p>${projectList[projectKey].languages[i].name}</p>
    </div>
    `;
  }
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  const overlay = document.getElementById("project-modal-overlay");

  if (!modal || !overlay) return;

  modal.classList.add("dNone");
  overlay.classList.add("dNone");
  document.body.style.overflow = "";
}

function showNextProject() {
  currentProjectIndex = (currentProjectIndex + 1) % projectKeys.length;
  openProjectModal(projectKeys[currentProjectIndex]);
}

function initHoverImagePreview() {
  let projects = document.querySelectorAll(".project[data-project]");
  let ImageContainer = document.getElementById("projects-preview");
  let previewImage = document.getElementById("projects-preview-img");

  if (projects.length === 0 || !ImageContainer || !previewImage) return;

  addMouseOver(projects, ImageContainer, previewImage);
  addMouseOut(projects, ImageContainer, previewImage);
}

function addMouseOver(projects, ImageContainer, previewImage) {
  projects.forEach(function (project) {
    if (project.dataset.listener) return;
    project.dataset.listener = "true";

    project.addEventListener("mouseover", function () {
      const key = project.dataset.project;

      if (projectList[key]) {
        previewImage.src = projectList[key].image;
        ImageContainer.classList.add("projects__preview--active");
      }
    });
  });
}

function addMouseOut(projects, ImageContainer, previewImage) {
  projects.forEach(function (project) {
    if (project.dataset.listenerOut) return;
    project.dataset.listenerOut = "true";

    project.addEventListener("mouseout", function () {
      previewImage.src = "";
      ImageContainer.classList.remove("projects__preview--active");
    });
  });
}

function renderReferences() {
  const refContent = document.getElementById("referencesContent");
  if (!refContent) return;

  refContent.innerHTML = "";

  references.forEach(function (ref, i) {
    refContent.innerHTML += `
      <div id="ref-${i}" class="references__card">
        <p data-i18n="references.texts.${i}" class="references__text">${ref.text}</p>
        <p data-i18n="references.authors.${i}" class="references__author">${ref.author}</p>
      </div>
    `;
  });

  initReferenceButtons(references);
}

function updateReferences() {
  const langBtn = document.getElementById("lang-switch-de");
  if (!langBtn) return;

  const isDE = langBtn.classList.contains("lang-switch__option--active");
  const lang = isDE ? "de" : "en";

  const translations = getTranslations();
  if (!translations[lang]) return;

  const refTranslations = translations[lang].references;
  const cards = document.querySelectorAll(".references__card");

  if (cards.length === 0) return;

  cards.forEach(function (card, i) {
    const refIndex = (currentRefIndex + i) % references.length;

    const text = card.querySelector(".references__text");
    const author = card.querySelector(".references__author");

    if (text) text.innerText = refTranslations.texts[refIndex];
    if (author) author.innerText = refTranslations.authors[refIndex];
  });
}

function initReferenceButtons(ref) {
  const prev = document.getElementById("previousCard");
  const next = document.getElementById("nextCard");

  if (!prev || !next) return;

  prev.onclick = function () {
    currentRefIndex = (currentRefIndex - 1 + references.length) % references.length;
    updateReferences();
    renderReferenceDots(ref);
  };

  next.onclick = function () {
    currentRefIndex = (currentRefIndex + 1) % references.length;
    updateReferences();
    renderReferenceDots(ref);
  };
}

function renderReferenceDots(ref) {
  const container = document.getElementById("activeIndex");
  if (!container) return;

  container.innerHTML = "";

  for (let i = 0; i < ref.length; i++) {
    container.innerHTML += `
    <div class="dot ${i === currentRefIndex ? "dot--active" : "dot"}"></div>
    `;
  }
}
