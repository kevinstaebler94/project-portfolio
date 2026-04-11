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
      description: "Hey, ich bin Kevin – ein angehender Frontend Developer aus Nordrhein-Westfalen...",
      location: "📍 Standort Nordrhein-Westfalen, Deutschland. Offen für Vor-Ort-Zusammenarbeit mit optionaler Remote-Möglichkeit.",
      focus: "🧠 Starker Fokus auf kontinuierliche Weiterentwicklung. Aktuell spezialisiere ich mich auf Angular und TypeScript.",
      strengths: "✔ Strukturierte und analytische Problemlösung ✔ Saubere Architektur ✔ Teamorientiert",
    },

    skills: {
      subtitle: "Technologien",
      title: "Fähigkeiten",
      description:
        "Über die letzten 1,5 Jahre habe ich mir durch intensives, projektbasiertes Lernen eine solide Grundlage in der Frontend-Entwicklung aufgebaut. Von Anfang an lag mein Fokus darauf, theoretisches Wissen direkt praktisch anzuwenden. Dabei habe ich unter anderem ein vollständig funktionsfähiges Drag-and-Drop-Task-Board mit Firebase-Integration sowie ein objektorientiertes Jump-and-Run-Spiel entwickelt. Die Arbeit an Teamprojekten hat mein Verständnis für strukturierte Arbeitsabläufe und Clean-Code-Prinzipien deutlich gestärkt. Aktuell vertiefe ich meine Kenntnisse in Angular und TypeScript und baue dabei auf fundierten Fähigkeiten in HTML, CSS, JavaScript und REST-APIs auf.Ich bin motiviert, zuverlässig und habe den Anspruch, mich kontinuierlich als Frontend-Entwickler weiterzuentwickeln.",
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
      description_1: "Melde dich gerne bei mir und beschreibe dein Projekt.",
      description_2: "Ich liefere saubere, skalierbare und wartbare Frontend-Lösungen.",
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
        "Hey there, I'm Kevin — a frontend developer in transition based in North Rhine-Westphalia, Germany. I'm passionate about building scalable web applications and creating structured systems from scratch. I'm especially drawn to the logical and architectural side of development, where clean code and maintainability define long-term quality. Continuous learning and deep understanding drive my growth every day.",
      location: "📍 Based in North Rhine-Westphalia, Germany. Open to on-site collaboration, with optional remote flexibility.",
      focus:
        "🧠 Strong focus on continuous improvement. Currently specializing in Angular and TypeScript. Practice-driven learning approach (project-based development).",
      strengths:
        "✔ Structured and analytical problem-solving ✔ Clean, scalable architecture mindset ✔ Persistent, reliable and team-oriented",
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
      description_1: "Feel free to reach out and let me know what kind of role or project you have in mind.",
      description_2: "I’m confident I can add value to your team through clean, scalable and maintainable frontend solutions.",
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

  en.addEventListener("click", () => {
    de.classList.remove("lang-switch__option--active");
    en.classList.add("lang-switch__option--active");
    setLanguage("en");
  });

  de.addEventListener("click", () => {
    en.classList.remove("lang-switch__option--active");
    de.classList.add("lang-switch__option--active");
    setLanguage("de");
  });
}
