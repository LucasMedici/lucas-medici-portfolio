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
      headline: "Software Engineer",
      tagline: "Building reliable products with thoughtful engineering.",
      summary:
        "I am a software engineer focused on crafting performant web applications, " +
        "scalable backends, and developer experiences that feel polished. I enjoy " +
        "translating ambiguous problems into clean, well-typed code and shipping " +
        "iteratively with the people around me.",
      availability: "Welcome",
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
      headline: "Engenheiro de Software",
      tagline: "Construindo produtos confiáveis com engenharia cuidadosa.",
      summary:
        "Sou um engenheiro de software focado em criar aplicações web performáticas, " +
        "backends escaláveis e experiências de desenvolvedor polidas. Gosto de " +
        "transformar problemas ambíguos em código limpo e bem tipado, entregando " +
        "iterativamente com as pessoas ao meu redor.",
      availability: "Aberto a novas oportunidades",
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
