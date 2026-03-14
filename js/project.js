let currentProjectIndex = 0;
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
    <div class="project-modal-skill">
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
