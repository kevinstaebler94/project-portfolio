let currentProjectIndex = 0;
let currentRefIndex = 0;
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
  currentProjectIndex = projectKeys.indexOf(projectKey);
  const modalData = getModalElements();

  modalData.number.innerText = projectList[projectKey].number;
  modalData.title.innerText = projectList[projectKey].title;
  modalData.description.innerText = projectList[projectKey].description;
  modalData.image.src = projectList[projectKey].image;

  renderModalSkills(projectKey);
  modalData.modal.classList.remove("dNone");
  modalData.overlay.classList.add("project-modal-overlay");
  document.body.style.overflow = "hidden";
}

function renderModalSkills(projectKey) {
  const modalSkills = document.getElementById("project-modal-skills");
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
  modal.classList.add("dNone");
  overlay.classList.remove("project-modal-overlay");
  document.body.style.overflow = "";
}

function showNextProject() {
  currentProjectIndex = (currentProjectIndex + 1) % projectKeys.length;
  openProjectModal(projectKeys[currentProjectIndex]);
}

function initHoverImagePreview() {
  let projects = document.querySelectorAll(".project[data-project]");
  let previewImage = document.getElementById("projects-preview-img");

  addMouseOver(projects, previewImage);
  addMouseOut(projects, previewImage);
}

function addMouseOver(projects, previewImage) {
  projects.forEach((project) => {
    project.addEventListener("mouseover", () => {
      const key = project.dataset.project;
      if (projectList[key]) {
        previewImage.src = projectList[key].image;
      }
    });
  });
}

function addMouseOut(projects, previewImage) {
  projects.forEach((project) => {
    project.addEventListener("mouseout", () => {
      previewImage.src = "";
    });
  });
}

function renderReferences() {
  const refContent = document.getElementById("referencesContent");
  references.forEach((ref, i) => {
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
  const isDE = document.getElementById("lang-switch-de").classList.contains("lang-switch__option--active");
  const lang = isDE ? "de" : "en";
  const refTranslations = getTranslations()[lang].references;

  const cards = document.querySelectorAll(".references__card");
  cards.forEach((card, i) => {
    const refIndex = (currentRefIndex + i) % references.length;
    card.querySelector(".references__text").innerText = refTranslations.texts[refIndex];
    card.querySelector(".references__author").innerText = refTranslations.authors[refIndex];
  });
}

function initReferenceButtons(ref) {
  document.getElementById("previousCard").addEventListener("click", () => {
    currentRefIndex = (currentRefIndex - 1 + references.length) % references.length;
    updateReferences();
    renderReferenceDots(ref);
  });

  document.getElementById("nextCard").addEventListener("click", () => {
    currentRefIndex = (currentRefIndex + 1) % references.length;
    updateReferences();
    renderReferenceDots(ref);
  });
}

function renderReferenceDots(ref) {
  const container = document.getElementById("activeIndex");
  container.innerHTML = "";

  for (let i = 0; i < ref.length; i++) {
    container.innerHTML += `
    <div class="dot ${i === currentRefIndex ? "dot--active" : "dot"}"></div>
    `;
  }
}
