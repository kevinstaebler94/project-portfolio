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

  if (!modalSkills || !projectList[projectKey]) return;

  modalSkills.innerHTML = "";

  projectList[projectKey].languages.forEach((language) => {
    modalSkills.innerHTML += `
      <div class="project-modal__skill">
        <img src="${language.icon}" alt="" />
        <p>${language.name}</p>
      </div>
    `;
  });
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
  const projects = document.querySelectorAll(".project[data-project]");
  const imageContainer = document.getElementById("projects-preview");
  const previewImage = document.getElementById("projects-preview-img");

  if (!projects.length || !imageContainer || !previewImage) {
    return;
  }

  addMouseOver(projects, imageContainer, previewImage);
  addMouseOut(projects, imageContainer, previewImage);
}

function addMouseOver(projects, imageContainer, previewImage) {
  projects.forEach((project) => {
    if (project.dataset.listener) return;

    project.dataset.listener = "true";

    project.addEventListener("mouseover", () => {
      const key = project.dataset.project;

      if (!projectList[key]) return;

      previewImage.src = projectList[key].image;
      imageContainer.classList.add("projects__preview--active");
    });
  });
}

function addMouseOut(projects, imageContainer, previewImage) {
  projects.forEach((project) => {
    if (project.dataset.listenerOut) return;

    project.dataset.listenerOut = "true";

    project.addEventListener("mouseout", () => {
      previewImage.src = "";

      imageContainer.classList.remove("projects__preview--active");
    });
  });
}

function renderReferences() {
  const refContent = document.getElementById("referencesContent");

  if (!refContent) return;

  refContent.innerHTML = "";

  references.forEach((ref, i) => {
    refContent.innerHTML += `
      <div id="ref-${i}" class="references__card">
        <p class="references__text">
          ${ref.text}
        </p>

        <p class="references__author">
          ${ref.author}
        </p>
      </div>
    `;
  });

  updateReferences();
  renderReferenceDots();
}

function updateReferences() {
  const translations = getTranslations();
  const refs = translations[currentLang].references;
  const cards = document.querySelectorAll(".references__card");

  if (!cards.length) return;

  cards.forEach((card, i) => {
    const index = (currentRefIndex + i) % references.length;
    const text = card.querySelector(".references__text");
    const author = card.querySelector(".references__author");
    text.innerText = refs.texts[index];
    author.innerText = refs.authors[index];
  });
}

function initReferenceButtons() {
  const prev = document.getElementById("previousRef");
  const next = document.getElementById("nextRef");

  if (!prev || !next) return;

  prev.onclick = () => {
    currentRefIndex = (currentRefIndex - 1 + references.length) % references.length;

    updateReferences();
    renderReferenceDots();
  };

  next.onclick = () => {
    currentRefIndex = (currentRefIndex + 1) % references.length;

    updateReferences();
    renderReferenceDots();
  };
}

function renderReferenceDots() {
  const container = document.getElementById("activeIndex");

  if (!container) return;

  container.innerHTML = "";

  for (let i = 0; i < references.length; i++) {
    container.innerHTML += `
      <div class="
        dot
        ${i === currentRefIndex ? "dot--active" : ""}
      "></div>
    `;
  }
}
