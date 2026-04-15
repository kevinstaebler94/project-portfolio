function getTranslations() {
  return {
    de: getDe(),
    en: getEn(),
  };
}

function getDe() {
  return {
    header: {
      about: "Über mich",
      skills: "Skills",
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
      },
    },
  };
}

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
      },
    },
  };
}

function setLanguage(lang) {
  const obj = getTranslations();
  const texts = obj[lang];
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = getValue(texts, key);

    if (value !== undefined) {
      element.textContent = value;
    }
  });
}

function getValue(obj, path) {
  const keys = path.split(".");
  let result = obj;

  for (let i = 0; i < keys.length; i++) {
    if (result == null) return undefined;
    result = result[keys[i]];
  }
  return result;
}

function switchLang() {
  const en = document.getElementById("lang-switch-en");
  const de = document.getElementById("lang-switch-de");
  const skillsBtn = document.getElementById("skills-button");

  en.addEventListener("click", () => {
    de.classList.remove("lang-switch__option--active");
    en.classList.add("lang-switch__option--active");
    skillsBtn.classList.remove("skills__button--de");
    skillsBtn.classList.add("skills__button--en");
    setLanguage("en");
  });

  de.addEventListener("click", () => {
    en.classList.remove("lang-switch__option--active");
    de.classList.add("lang-switch__option--active");
    skillsBtn.classList.remove("skills__button--en");
    skillsBtn.classList.add("skills__button--de");
    setLanguage("de");
  });
}
