import type { SkillCategory } from "@/data/skills";
import type { Locale } from "@/lib/useLocale";

/**
 * UI copy per locale.
 *
 * pt-br is the source of truth for the redesign. Strings marked
 * `TODO(i18n)` still carry the previous English copy (or a rough draft) and
 * need a proper translation of the new Portuguese text.
 */
const translations = {
  en: {
    nav: {
      experience: "Experience",
      projects: "Projects",
      learning: "Education",
      skills: "Stack",
      about: "About",
      contact: "Contact",
    },
    language: {
      groupLabel: "Language",
    },
    theme: {
      toDark: "Switch to dark theme",
      toLight: "Switch to light theme",
    },
    menu: {
      label: "Menu",
    },
    hero: {
      role: "Software Engineer",
      location: "Brazil",
      // TODO(i18n)
      summary:
        "I build software systems end to end — from requirements and architecture to delivery in production.",
      // TODO(i18n)
      currentRolePrefix: "Today I lead backend and web development at",
      photoAlt: "Photo of Lucas Medici",
    },
    about: {
      title: "About",
      // TODO(i18n): previous English copy, paragraph 2 dropped like in pt-br.
      paragraphs: [
        "My interest in technology started early, developing Minecraft plugins and small games in Unity and Construct 2. It was through building and creating that I discovered my passion for programming, and since then, building software stopped being just a way to learn and became one of my main ways of turning ideas into something real.",
        "What I enjoy most at work are problems that require understanding the context before jumping into code, thinking through the best approach, making technical decisions, and arriving at simple solutions, even when the problem isn't.",
        "Outside of code, I'm passionate about football. I enjoy following what's happening across the football world and playing it myself. I also enjoy games and technology in general, and every now and then, I turn an idea that sparks my curiosity into a small project.",
      ],
    },
    experience: {
      title: "Experience",
      entries: [
        {
          id: "nexus-geoengenharia",
          company: "Nexus GeoEngenharia",
          role: "Lead Developer & Project Manager",
          location: "Brazil",
          period: "2024 — Present",
          // TODO(i18n): previous English copy, pt-br was shortened.
          summary:
            "I joined the company as an intern and now I lead the development of backend systems " +
            "and web applications, working on API architecture, business rule modeling, " +
            "integrations, and technical decisions. I also manage two strategic projects focused on " +
            "reducing water losses for some Brazilian cities.",
          // TODO(i18n): previous English copy, pt-br was shortened.
          highlights: [
            "Led the migration of a legacy Visual Basic system to a modern web platform for water network mapping, with interactive maps, advanced search, reports, and geolocated documents.",
            "Architected and led development of a work order management system with REST APIs, status flows, business rules, and data persistence.",
            "Contributed to an IoT monitoring platform involving sensors, Python services, Linux infrastructure, and automatic anomaly detection.",
            "Work directly with stakeholders on requirements gathering.",
          ],
          stack: [
            "Next.js",
            "Node.js",
            "Java",
            "Spring Boot",
            "Python",
            "TypeScript",
            "PostgreSQL",
            "AWS",
            "Linux",
            "Docker",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      description:
        "Some of the projects I've built to explore ideas, solve problems, and put software into practice.",
    },
    learning: {
      title: "Education",
    },
    skills: {
      title: "Stack",
      groups: {
        LANGUAGES: "Languages",
        "BACKEND & APIs": "Backend",
        "FRONTEND & MOBILE": "Front-end & mobile",
        "DATABASES & ORM": "Data",
        "AI & MACHINE LEARNING": "AI",
        "CLOUD & INFRASTRUCTURE": "Infra",
        "MESSAGING & MEDIA PROCESSING": "Messaging & media",
      } satisfies Record<SkillCategory, string>,
    },
    contact: {
      title: "Let's build something",
      // TODO(i18n): pt-br gained "— seja sobre um projeto, uma vaga ou uma ideia…".
      description:
        "The fastest ways to reach me. I'm always glad to discuss interesting problems.",
      cardTitle: "Have a project in mind?",
      cardDescriptionPrefix: "Drop me a line at ",
      cardDescriptionSuffix: " and I'll get back to you as soon as possible.",
      sendEmail: "Send an email",
      emailLabel: "Email",
    },
    footer: {
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },
  },
  "pt-br": {
    nav: {
      experience: "Experiência",
      projects: "Projetos",
      learning: "Formação",
      skills: "Stack",
      about: "Sobre",
      contact: "Contato",
    },
    language: {
      groupLabel: "Idioma",
    },
    theme: {
      toDark: "Mudar para o tema escuro",
      toLight: "Mudar para o tema claro",
    },
    menu: {
      label: "Menu",
    },
    hero: {
      role: "Engenheiro de Software",
      location: "Brasil",
      summary:
        "Construo sistemas de ponta a ponta — do levantamento de requisitos e da arquitetura até a entrega em produção.",
      currentRolePrefix: "Hoje lidero o desenvolvimento backend e web na",
      photoAlt: "Foto de Lucas Medici",
    },
    about: {
      title: "Sobre",
      paragraphs: [
        "Meu interesse por tecnologia começou cedo, desenvolvendo plugins para Minecraft e pequenos jogos em Unity e Construct 2. Foi desenvolvendo e criando que descobri o gosto por programação — e, desde então, construir software deixou de ser só uma forma de aprender e virou uma das minhas principais formas de transformar ideias em algo real.",
        "O que mais gosto no trabalho são os problemas que exigem entender o contexto antes de sair escrevendo código: pensar na melhor abordagem, tomar decisões técnicas e chegar a soluções simples, mesmo quando o problema não é.",
        "Fora do código, sou apaixonado por futebol — acompanho o que rola pelo mundo todo e também jogo. Curto games e tecnologia em geral, e de vez em quando transformo alguma ideia que surge por curiosidade em um pequeno projeto.",
      ],
    },
    experience: {
      title: "Experiência",
      entries: [
        {
          id: "nexus-geoengenharia",
          company: "Nexus GeoEngenharia",
          role: "Desenvolvedor Líder & Gestor de Projetos",
          location: "Brasil",
          period: "2024 — hoje",
          summary:
            "De estagiário a líder técnico: cuido da arquitetura de APIs, regras de negócio e " +
            "integrações dos sistemas backend e web, e faço a gestão de dois projetos de redução " +
            "de perdas de água em cidades brasileiras.",
          highlights: [
            "Liderei a migração de um legado em Visual Basic para uma plataforma web de mapeamento de redes de água.",
            "Arquitetei o sistema de ordens de serviço: APIs REST, fluxos de status e regras de negócio.",
            "Participei da plataforma de monitoramento IoT, com serviços em Python e detecção de anomalias.",
            "Atuo diretamente com stakeholders no levantamento de requisitos.",
          ],
          stack: [
            "Next.js",
            "Node.js",
            "Java",
            "Spring Boot",
            "Python",
            "TypeScript",
            "PostgreSQL",
            "AWS",
            "Linux",
            "Docker",
          ],
        },
      ],
    },
    projects: {
      title: "Projetos",
      description:
        "Alguns dos projetos que construí para explorar ideias, resolver problemas e colocar coisas em prática.",
    },
    learning: {
      title: "Formação",
    },
    skills: {
      title: "Stack",
      groups: {
        LANGUAGES: "Linguagens",
        "BACKEND & APIs": "Backend",
        "FRONTEND & MOBILE": "Front & mobile",
        "DATABASES & ORM": "Dados",
        "AI & MACHINE LEARNING": "IA",
        "CLOUD & INFRASTRUCTURE": "Infra",
        "MESSAGING & MEDIA PROCESSING": "Mensageria & mídia",
      } satisfies Record<SkillCategory, string>,
    },
    contact: {
      title: "Quer construir algo?",
      description:
        "As formas mais rápidas de me encontrar. Estou sempre disposto a bater um papo — seja sobre um projeto, uma vaga ou uma ideia que ainda está no papel.",
      cardTitle: "Tem um projeto em mente?",
      cardDescriptionPrefix: "Me manda uma mensagem em ",
      cardDescriptionSuffix: " e eu retorno o mais rápido possível.",
      sendEmail: "Enviar um e-mail",
      emailLabel: "E-mail",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      backToTop: "Voltar ao topo",
    },
  },
} as const;

export type Translations = (typeof translations)["en"];

export function t(locale: Locale): Translations {
  return translations[locale] as unknown as Translations;
}
