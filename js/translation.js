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
 * Returns all German (de) UI strings.
 * @returns {object} Nested translation object for the German language.
 */
function getDe() {
  return {
    header: {
      about: "Über mich",
      skills: "Fähigkeiten",
      projects: "Projekte",
    },

    hero: {
      button_left: "Meine Projekte",
      button_right: "Kontakt",
    },

    banner: {
      remote: "Verfügbar für Remote-Arbeit",
      job: "Frontend Entwickler",
      location: "Standort Stolberg",
      status: "Offen für Angebote",
    },

    about: {
      subtitle: "Wer ich bin",
      title: "Über mich",
      description:
        "Ich bin Kevin, ein angehender Frontend-Entwickler aus Stolberg - Nordrhein-Westfalen. Meine Leidenschaft ist es, skalierbare Webanwendungen zu entwickeln und strukturierte Systeme von Grund auf aufzubauen. Besonders interessiert mich die logische und architektonische Seite der Softwareentwicklung, bei der sauberer Code und Wartbarkeit eine große Rolle für die langfristige Qualität spielen. Mir ist wichtig, die Dinge nicht nur umzusetzen, sondern sie auch wirklich zu verstehen. Deshalb arbeite ich kontinuierlich daran, mein Wissen zu erweitern und mich fachlich weiterzuentwickeln.",

      location: "Ansässig in Stolberg, Nordrhein-Westfalen, Deutschland. Offen für die Arbeit vor Ort, mit optionaler Remote-Flexibilität.",

      focus:
        "Starker Fokus auf kontinuierliche Verbesserung. Aktuell spezialisiert auf Angular und TypeScript. Praxisorientierter Lernansatz durch projektbasierte Entwicklung.",

      strengths:
        "Strukturiertes und analytisches Denken, mit Fokus auf saubere und skalierbare Architekturen. Ich arbeite zuverlässig, bleibe dran und lege großen Wert auf gute Zusammenarbeit im Team.",
    },

    skills: {
      subtitle: "Technologien",
      title: "Fähigkeiten",
      description:
        "In den letzten 1,5 Jahren habe ich mir durch intensives, projektbasiertes Lernen eine solide Grundlage in der Frontend-Entwicklung aufgebaut. Von Anfang an war es mir wichtig, Theorie direkt in die Praxis umzusetzen. Dabei habe ich unter anderem ein voll funktionsfähiges Drag-and-Drop-Task-Board mit Firebase-Anbindung sowie ein objektorientiertes Jump-and-Run-Spiel entwickelt. Durch die Arbeit an Teamprojekten konnte ich mein Verständnis für strukturierte Abläufe und saubere Code-Prinzipien weiter stärken. Aktuell vertiefe ich meine Kenntnisse in Angular und TypeScript und baue dabei auf einem starken Fundament in HTML, CSS, JavaScript und REST-APIs auf. Ich arbeite zuverlässig, bin motiviert und habe den Anspruch, mich kontinuierlich als Frontend-Entwickler weiterzuentwickeln.",
      cta_prefix: "Du brauchst ",
      cta_highlight: "noch eine Fähigkeit?",
      contact_text: "Nimm gerne Kontakt mit mir auf. Ich freue mich darauf, meine Kenntnisse weiter auszubauen.",
      button: "Lass uns sprechen",
    },

    projects: {
      subtitle: "Ausgewählte Projekte",
      description: "Hier findest du eine Auswahl meiner Projekte – probiere sie aus und sieh meine Fähigkeiten in der Praxis.",
      modal: {
        subtitle: "Worum geht es in diesem Projekt?",
        next: "Nächstes Projekt",
      },
    },

    references: {
      title: "Was meine Kollegen über mich sagen",
      texts: [
        "Kevin hat sich sowohl in seiner Arbeitsweise als auch persönlich enorm weiterentwickelt. Seine Zuverlässigkeit und Ehrlichkeit zeichnen ihn als Mensch aus. Er ist ein sehr geschätzter und wertvoller Kollege.",
        "Kevin ist äußerst zielstrebig, belastbar und übernimmt innerhalb des Teams eine unterstützende Rolle.",
        "Er arbeitet sehr strukturiert und kundenorientiert. Dabei ist er stets hilfsbereit und bewahrt eine positive Einstellung.",
      ],
      authors: ["M.Gregor - derzeitiger Manager", "M.Cremers - vorheriger Manager", "S.Hake - Team Partner"],
    },

    contact: {
      title: "Kontakt",
      subtitle: "Lass uns zusammenarbeiten",
      question: "Hast du ein Problem zu lösen?",
      description_1: "Melde dich gerne und lass mich wissen, woran ihr gerade arbeitet.",
      description_2: "Ich arbeite gerne im Team und freue mich darauf, mich in zukünftige Projekte einzubringen.",
      cta_prefix: "Du suchst einen Frontend Developer? ",
      cta_highlight: "Lass uns sprechen!",

      form: {
        name_label: "Wie heißt du?",
        name_placeholder: "Dein Name",

        email_label: "Wie lautet deine E-Mail?",
        email_placeholder: "deinemail@email.com",

        message_label: "Wie kann ich dir helfen?",
        message_placeholder: "Hallo Kevin, ich interessiere mich für...",

        privacy_prefix: "Ich habe die ",
        privacy_link: "Datenschutzerklärung",
        privacy_suffix: " gelesen und stimme der Verarbeitung meiner Daten zu.",
        privacy_validation: "Bitte stimmen Sie der Datenschutzerklärung zu.",

        submit: "Sag Hallo",

        name_error: "Oops! Bitte gib deinen Namen ein",
        email_error: "Oops! Bitte gib deine E-Mail ein",
        message_error: "Was möchtest du entwickeln?",
        approval_message: "Nachricht erfolgreich gesendet",
      },
    },

    modal: {
      subtitle: "Worum geht es in diesem Projekt?",
      description:
        "Ein Task Manager, inspiriert vom Kanban-System, ermöglicht es, Aufgaben effizient zu erstellen, zu organisieren und visuell darzustellen..",
      next: "Nächstes Projekt",
    },

    legal: {
      title: "Impressum",
      imprint_title: "Impressum",
      imprint_name: "Kevin Stäbler",
      imprint_address: "August-Prym-Straße 4",
      imprint_city: "52223 Stolberg",
      contact_title: "Kontakt",
      email: "E-Mail: kevinstaebler1994@outlook.de",
      terms_title: "Nutzungsbedingungen",
      terms_text:
        "Durch den Zugriff auf und die Nutzung von Portfolio (Produkt) erkennen Sie die folgenden Bedingungen und alle dazugehörigen Richtlinien an. Wir, die aufgeführten Studenten, können die Bedingungen jederzeit ohne vorherige Ankündigung aktualisieren.",
      scope_title: "Umfang und Eigentum des Produkts",
      scope_text_1:
        "Portfolio wurde im Rahmen eines studentischen Gruppenprojekts in einem Web-Development-Bootcamp bei der Developer Akademie GmbH entwickelt. Es dient ausschließlich Bildungszwecken und ist nicht für eine umfangreiche private oder geschäftliche Nutzung vorgesehen. Dementsprechend können wir keine konstante Verfügbarkeit, Zuverlässigkeit oder Genauigkeit des Produkts garantieren.",
      scope_text_2:
        "Das Design von Portfolio ist Eigentum der Developer Akademie GmbH. Unbefugte Nutzung, Vervielfältigung, Änderung, Verbreitung oder Nachahmung des Designs ist streng untersagt.",
      rights_title: "Eigentumsrechte",
      rights_text:
        "Abgesehen vom Design, das der Developer Akademie GmbH gehört, behalten wir, die aufgeführten Studenten, alle Eigentumsrechte an Portfolio, einschließlich des damit verbundenen urheberrechtlich geschützten Materials, Marken und sonstiger proprietärer Informationen.",
      usage_title: "Nutzung des Produkts",
      usage_text_1:
        "Portfolio darf ausschließlich für rechtmäßige Zwecke und im Einklang mit allen geltenden Gesetzen und Vorschriften genutzt werden. Jede Nutzung für illegale Aktivitäten oder zur Belästigung, Schädigung, Bedrohung oder Einschüchterung anderer Personen ist strengstens untersagt. Sie sind allein für Ihre Interaktionen mit anderen Nutzern von Portfolio verantwortlich.",
      usage_text_2:
        "In keinem Fall haften wir, die aufgeführten Studenten, oder die Developer Akademie für direkte, indirekte, zufällige, besondere, Folge- oder exemplarische Schäden, einschließlich entgangener Gewinne, Verlust von Goodwill, Daten oder anderer immaterieller Verluste.",
      disclaimer_title: "Haftungsausschluss",
      disclaimer_text:
        "Portfolio wird ohne jegliche ausdrückliche oder stillschweigende Gewährleistung bereitgestellt. In keinem Fall haften wir, die aufgeführten Studenten, oder die Developer Akademie GmbH für direkte, indirekte, zufällige, besondere, Folge- oder exemplarische Schäden, die aus der Nutzung oder dem Betrieb von Portfolio entstehen.",
      indemnity_title: "Freistellung",
      indemnity_text:
        "Sie erklären sich damit einverstanden, uns, die aufgeführten Studenten, die Developer Akademie und unsere verbundenen Unternehmen, Partner, Führungskräfte, Direktoren, Vertreter und Mitarbeiter von und gegen alle Ansprüche, Forderungen, Verluste, Schäden, Kosten oder Verbindlichkeiten freizustellen, die aus Ihrer Nutzung von Portfolio und/oder Ihrem Verstoß gegen dieses Impressum entstehen.",
      contact_info: "Bei Fragen oder Mitteilungen kontaktieren Sie uns bitte unter Kontakt-E-Mail.",
      date: "Datum: 26. Juli 2025",
    },

    footer: {
      legal: "Impressum",
      home: "Startseite",
    },

    privacy: {
      title: "Datenschutzerklärung",
      section1_title: "1. Datenschutz auf einen Blick",
      section1_sub1_title: "Allgemeine Hinweise",
      section1_sub1_text:
        "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.",
      section2_title: "2. Hosting",
      section2_sub1_title: "All-Inkl",
      section2_sub1_text1: "Anbieter ist die ALL-INKL.COM - Neue Medien Münnich, Inh. René Münnich, Hauptstraße 68, 02742 Friedersdorf.",
      section2_sub1_text2: "Details entnehmen Sie der Datenschutzerklärung von All-Inkl:",
      section3_title: "3. Allgemeine Hinweise und Pflichtinformationen",
      section3_sub1_title: "Hinweis zur verantwortlichen Stelle",
      section3_sub2_title: "SSL- bzw. TLS-Verschlüsselung",
      section3_sub2_text:
        "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.",
      section4_title: "4. Datenerfassung auf dieser Website",
      section4_sub1_title: "Kontaktformular",
      section4_sub1_text:
        "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage gespeichert.",
      section5_title: "5. Plugins und Tools",
      section5_sub1_title: "Google Fonts (lokales Hosting)",
      section5_sub1_text: "Diese Seite nutzt lokal installierte Google Fonts. Eine Verbindung zu Google-Servern findet dabei nicht statt.",
    },
  };
}

/**
 * Returns all English (en) UI strings.
 * @returns {object} Nested translation object for the English language.
 */
function getEn() {
  return {
    header: {
      about: "About me",
      skills: "Skills",
      projects: "Projects",
    },

    hero: {
      button_left: "Check my work",
      button_right: "Contact me",
    },

    banner: {
      remote: "Available for remote work",
      job: "Frontend Developer",
      location: "Based in Stolberg",
      status: "Open to work",
    },

    about: {
      subtitle: "Who I Am",
      title: "About me",
      description:
        "Hey there, I'm Kevin — a frontend developer in transition based in Stolberg - North Rhine-Westphalia, Germany. I'm passionate about building scalable web applications and creating structured systems from scratch. I'm especially drawn to the logical and architectural side of development, where clean code and maintainability define long-term quality. Continuous learning and deep understanding drive my growth every day.",

      location: "Based in Stolberg - North Rhine-Westphalia, Germany Open to on-site collaboration, with optional remote flexibility.",

      focus:
        "Strong focus on continuous improvement Currently specializing in Angular and TypeScript Practice-driven learning approach (project-based development).",

      strengths: "Structured and analytical problem-solving, clean, scalable architecture mindset, persistent, reliable, and team-oriented",
    },

    skills: {
      subtitle: "Technologies",
      title: "Skill Set",
      description:
        "Over the past 1.5 years, I have built a solid foundation in front-end development through intensive, project-based training. From the beginning, I focused on applying theory directly in practice. I have developed a fully functional drag-and-drop task board with Firebase integration and an object-oriented jump-and-run game. Working on team projects has strengthened my understanding of structured workflows and clean code principles. Currently, I am deepening my knowledge in Angular and TypeScript, building on strong skills in HTML, CSS, JavaScript, and REST APIs. I am motivated, reliable, and committed to continuously growing as a Frontend Developer.",
      cta_prefix: "You need ",
      cta_highlight: "another skill?",
      contact_text: "Feel free to contact me. I look forward to expanding on my previous knowledge.",
      button: "Let's talk",
    },

    projects: {
      subtitle: "Featured Projects",
      description: "Explore a selection of my work here – interact with each project to see my skills in action.",
      modal: {
        subtitle: "What is this project about?",
        next: "Next project",
      },
    },

    references: {
      title: "What my colleagues say about me",
      texts: [
        "Kevin has grown tremendously, both in his work ethic and personal skills. His reliability and honesty define him as a person. He is a highly valued and appreciated colleague.",
        "Kevin is highly driven, resilient, and acts as a supporter within the team.",
        "He works in a very structured and customer-oriented manner. He is always helpful and maintains a positive attitude.",
      ],
      authors: ["M.Gregor - current Manager", "M.Cremers - previous Manager", "S.Hake - Team Partner"],
    },

    contact: {
      title: "Contact me",
      subtitle: "Let's work together",
      question: "Got a problem to solve?",
      description_1: "Feel free to reach out and share what kind of role or project you’re working on.",
      description_2: "I’m a team player who would love to support your team on future projects.",
      cta_prefix: "Need a Frontend developer? ",
      cta_highlight: "Let's talk!",

      form: {
        name_label: "What's your name?",
        name_placeholder: "Your name goes here",

        email_label: "What's your email?",
        email_placeholder: "youremail@email.com",

        message_label: "How can I help you?",
        message_placeholder: "Hello Kevin, I am interested in...",

        privacy_prefix: "I've read the ",
        privacy_link: "privacy policy",
        privacy_suffix: " and agree to the processing of my data as outlined.",
        privacy_validation: "Please accept the privacy policy",

        submit: "Say Hello",

        name_error: "Oops! It seems your name is missing",
        email_error: "Oops! Your email is required",
        message_error: "What do you need to develop?",
        approval_message: "Message sent successfully",
      },
    },

    modal: {
      subtitle: "What is this project about?",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and",
      next: "Next project",
    },

    legal: {
      title: "Legal Notice",
      imprint_title: "Imprint",
      imprint_name: "Kevin Stäbler",
      imprint_address: "August-Prym-Straße 4",
      imprint_city: "52223 Stolberg",
      contact_title: "Exploring the Board",
      email: "Email: kevinstaebler1994@outlook.de",
      terms_title: "Acceptance of terms",
      terms_text:
        "By accessing and using Portfolio (Product), you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments thereto that may be presented to you from time to time. We, the listed students, may update or change the terms and conditions from time to time without notice.",
      scope_title: "Scope and ownership of the product",
      scope_text_1:
        "Portfolio has been developed as part of a student group project in a web development bootcamp at the Developer Akademie GmbH. It has an educational purpose and is not intended for extensive personal & business usage. As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product.",
      scope_text_2:
        "The design of Portfolio is owned by the Developer Akademie GmbH. Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited.",
      rights_title: "Proprietary rights",
      rights_text:
        "Aside from the design owned by Developer Akademie GmbH, we, the listed students, retain all proprietary rights in Portfolio, including any associated copyrighted material, trademarks, and other proprietary information.",
      usage_title: "Use of the product",
      usage_text_1:
        "Portfolio is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations. Any use of Portfolio for illegal activities, or to harass, harm, threaten, or intimidate another person, is strictly prohibited. You are solely responsible for your interactions with other users of Portfolio.",
      usage_text_2:
        "In no event will we, the listed students, or the Developer Akademie, be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages, arising out of or in connection with the use or performance of Portfolio.",
      disclaimer_title: "Disclaimer of warranties and limitation of liability",
      disclaimer_text:
        "Portfolio is provided as is without warranty of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event will we, the listed students, or the Developer Akademie GmbH, be liable for any direct, indirect, incidental, special, consequential or exemplary damages arising out of or in connection with the use or performance of Portfolio.",
      indemnity_title: "Indemnity",
      indemnity_text:
        "You agree to indemnify, defend and hold harmless us, the listed students, the Developer Akademie, and our affiliates, partners, officers, directors, agents, and employees, from and against any claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out of or relating to your use of Portfolio and/or your breach of this Legal Notice.",
      contact_info: "For any questions or notices, please contact us at Contact Email.",
      date: "Date: July 26, 2025",
    },

    footer: {
      legal: "Legal Notice",
      home: "Home",
    },

    privacy: {
      title: "Privacy Policy",
      section1_title: "1. Privacy at a Glance",
      section1_sub1_title: "General Information",
      section1_sub1_text:
        "The following notes provide a simple overview of what happens to your personal data when you visit this website.",
      section2_title: "2. Hosting",
      section2_sub1_title: "All-Inkl",
      section2_sub1_text1: "The provider is ALL-INKL.COM - Neue Medien Münnich, owner René Münnich, Hauptstraße 68, 02742 Friedersdorf.",
      section2_sub1_text2: "For details, please refer to All-Inkl's privacy policy:",
      section3_title: "3. General Information and Mandatory Details",
      section3_sub1_title: "Note on the Responsible Party",
      section3_sub2_title: "SSL/TLS Encryption",
      section3_sub2_text:
        "This site uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content.",
      section4_title: "4. Data Collection on This Website",
      section4_sub1_title: "Contact Form",
      section4_sub1_text:
        "If you submit inquiries via the contact form, your details will be stored for the purpose of processing your request.",
      section5_title: "5. Plugins and Tools",
      section5_sub1_title: "Google Fonts (Local Hosting)",
      section5_sub1_text: "This site uses locally installed Google Fonts. No connection to Google servers is established.",
    },
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
 * Registers click handlers on all `[data-lang]` buttons.
 * On click, marks the selected language as active across all matching buttons
 * and calls {@link setLanguage} with the chosen language code.
 */
function switchLang(lang) {
  const btns = document.querySelectorAll("[data-lang]");
  const skillsBtn = document.getElementById("skills-button");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      lang = btn.dataset.lang;

      btns.forEach((b) => {
        b.classList.remove("lang-switch__option--active");
      });

      document.querySelectorAll(`[data-lang='${lang}']`).forEach((b) => {
        b.classList.add("lang-switch__option--active");
      });

      updateSkillsButton(skillsBtn, lang);
      setLanguage(lang);
    });
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
