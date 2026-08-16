import type { Locale } from "@/lib/useLocale";

const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      learning: "Learning",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm Lucas.",
      tagline: "Designing systems. Building solutions. Shipping software.",
      summary:
        "I'm a Software Engineer who builds end-to-end software systems and digital " +
        "products, from understanding requirements and defining architecture to " +
        "implementing, integrating, and delivering software to production.",
      availability: "Welcome",
      viewProjects: "View projects",
      contactMe: "Contact me",
    },
    about: {
      title: "About Me",
    },
    experience: {
      title: "Experience",
    },
    skills: {
      title: "Technologies & Tools",
    },
    projects: {
      title: "Projects",
    },
    learning: {
      title: "Learning",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's connect",
      description: "Feel free to reach out if you'd like to collaborate or just chat.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  "pt-br": {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      skills: "Habilidades",
      projects: "Projetos",
      learning: "Aprendizado",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, sou Lucas.",
      tagline: "Projeto sistemas. Construo soluções. Entrego software.",
      summary:
        "Sou Engenheiro de Software e construo sistemas e produtos digitais de ponta " +
        "a ponta, desde o entendimento de requisitos e definição da arquitetura até a " +
        "implementação, integração e entrega em produção.",
      availability: "Bem-vindo",
      viewProjects: "Ver projetos",
      contactMe: "Entrar em contato",
    },
    about: {
      title: "Sobre Mim",
    },
    experience: {
      title: "Experiência",
    },
    skills: {
      title: "Tecnologias & Ferramentas",
    },
    projects: {
      title: "Projetos",
    },
    learning: {
      title: "Aprendizado",
    },
    contact: {
      title: "Contato",
      subtitle: "Vamos conversar",
      description: "Fique à vontade para entrar em contato se quiser colaborar ou apenas conversar.",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
} as const;

export type Translations = (typeof translations)["en"];

export function t(locale: Locale): Translations {
  return translations[locale] as unknown as Translations;
}
