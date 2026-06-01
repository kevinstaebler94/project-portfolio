/**
 * Returns the full translations object containing all languages.
 * @returns {{ de: object, en: object }} Translation map keyed by language code.
 */
function getTranslations() {
  return {
    de: getDe(),
    en: getEn(),
  };
}

/**
 * Applies the given language to all translatable DOM elements
 * and updates the `lang` attribute on the html element.
 * @param {'de'|'en'} lang - The language code to activate.
 */
function setLanguage(lang) {
  currentLang = lang;
  const texts = getTranslations()[lang];

  localStorage.setItem("lang", lang);

  if (!texts) return;

  updateElements("[data-i18n]", texts, "textContent");
  updateElements("[data-i18n-placeholder]", texts, "placeholder");

  document.documentElement.lang = lang;
  updateProjectModal();

  document.querySelectorAll("[data-lang]").forEach((b) => {
    b.classList.toggle("lang-switch__option--active", b.dataset.lang === lang);
  });

  updateSkillsButton(document.getElementById("skills-button"), lang);
}

/**
 * Updates a DOM property (e.g. `textContent` or `placeholder`) on all
 * elements matching the given selector using the provided translations.
 * @param {string} selector - CSS selector for target elements.
 * @param {object} texts - Flat or nested translation object.
 * @param {string} property - The DOM element property to set (e.g. `'textContent'`).
 */
function updateElements(selector, texts, property) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    const key = element.dataset.i18n || element.dataset.i18nPlaceholder;
    const value = getValue(texts, key);

    if (value !== undefined) {
      element[property] = value;
    }
  });
}

/**
 * Re-renders the title and description of the currently open project modal
 * in the active language. Does nothing if the modal is hidden.
 */
function updateProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal || modal.classList.contains("dNone")) return;

  const key = projectKeys[currentProjectIndex];
  const project = projectList[key];

  document.getElementById("project-modal-title").innerText = project.title[currentLang];
  document.getElementById("project-modal-description").innerText = project.description[currentLang];
}

/**
 * Retrieves a deeply nested value from an object using dot-notation.
 * @param {object} obj - The object to traverse.
 * @param {string} path - Dot-separated key path (e.g. `'contact.form.submit'`).
 * @returns {*} The resolved value, or `undefined` if the path doesn't exist.
 */
function getValue(obj, path) {
  const keys = path.split(".");
  let result = obj;

  for (let i = 0; i < keys.length; i++) {
    if (result == null) return undefined;
    result = result[keys[i]];
  }
  return result;
}

/**
 * Registers click handlers on all `[data-lang]` buttons so that
 * clicking one activates the selected language across the entire page.
 * @param {string} lang - The initially active language code (unused after setup).
 */
function switchLang(lang) {
  const btns = document.querySelectorAll("[data-lang]");
  const skillsBtn = document.getElementById("skills-button");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => handleLanguageChange(btn, btns, skillsBtn));
  });
}

/**
 * Handles a language-button click: updates the active-button styling,
 * updates the skills button modifier class, and applies the new language.
 * @param {HTMLElement} btn - The clicked language button.
 * @param {NodeList} btns - All language buttons.
 * @param {HTMLElement|null} skillsBtn - The skills CTA button.
 */
function handleLanguageChange(btn, btns, skillsBtn) {
  const lang = btn.dataset.lang;

  updateActiveButtons(btns, lang);
  updateSkillsButton(skillsBtn, lang);
  setLanguage(lang);
}

/**
 * Removes the active class from all language buttons and re-applies it
 * to every button whose `data-lang` value matches `lang`.
 * @param {NodeList} btns - All language buttons.
 * @param {string} lang - The language code to mark as active.
 */
function updateActiveButtons(btns, lang) {
  btns.forEach((btn) => {
    btn.classList.remove("lang-switch__option--active");
  });

  document.querySelectorAll(`[data-lang='${lang}']`).forEach((btn) => {
    btn.classList.add("lang-switch__option--active");
  });
}

/**
 * Swaps the language-specific modifier class on the skills CTA button.
 * @param {HTMLElement|null} button - The skills button element.
 * @param {'de'|'en'} lang - The currently active language code.
 */
function updateSkillsButton(button, lang) {
  if (!button) return;

  button.classList.remove("skills__button--de");
  button.classList.remove("skills__button--en");
  button.classList.add(`skills__button--${lang}`);
}
