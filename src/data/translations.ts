import type { SkillCategory } from "@/data/skills";
import type { Locale } from "@/lib/useLocale";

/**
 * UI copy per locale.
 *
 * pt-br is the source of truth; en is its translation, reviewed in issue #2.
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
      summary:
        "I build systems end to end — from gathering requirements and designing the architecture to shipping to production.",
      currentRolePrefix: "I currently lead backend and web development at",
      photoAlt: "Photo of Lucas Medici",
    },
    about: {
      title: "About",
      paragraphs: [
        "I got into technology early, writing Minecraft plugins and making small games in Unity and Construct 2. That's how I found out I enjoyed programming — and since then, building software has gone from just a way to learn to one of the main ways I turn ideas into something real.",
        "What I enjoy most at work are the problems that make you understand the context before jumping into code: figuring out the best approach, making technical decisions, and landing on simple solutions, even when the problem isn't.",
        "Outside of code, I'm passionate about football — I follow it around the world and play it too. I'm into games and tech in general, and every now and then I turn an idea that comes from pure curiosity into a small project.",
      ],
    },
    experience: {
      title: "Experience",
      entries: [
        {
          id: "nexus-geoengenharia",
          company: "Nexus GeoEngenharia",
          role: "Lead Developer & Project Manager",
          period: "2024 — Present",
          summary:
            "From intern to tech lead: I'm responsible for API architecture, business rules, and " +
            "integrations across the backend and web systems, and I manage two projects focused on " +
            "reducing water loss in Brazilian cities.",
          highlights: [
            "Led the migration of a legacy Visual Basic system to a web platform for mapping water networks.",
            "Designed the architecture of the work order system: REST APIs, status workflows, and business rules.",
            "Contributed to the IoT monitoring platform, with Python services and anomaly detection.",
            "Work directly with stakeholders to gather requirements.",
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
        "Some of the projects I've built to explore ideas, solve problems, and put things into practice.",
    },
    learning: {
      title: "Education",
    },
    skills: {
      title: "Stack",
      groups: {
        LANGUAGES: "Languages",
        "BACKEND & APIs": "Backend",
        "FRONTEND & MOBILE": "Frontend & mobile",
        "DATABASES & ORM": "Data",
        "AI & MACHINE LEARNING": "AI",
        "CLOUD & INFRASTRUCTURE": "Infra",
        "MESSAGING & MEDIA PROCESSING": "Messaging & media",
      } satisfies Record<SkillCategory, string>,
    },
    contact: {
      title: "Want to build something?",
      description:
        "The fastest ways to reach me. I'm always up for a chat — whether it's about a project, a role, or an idea that's still on the drawing board.",
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
        "Meu interesse por tecnologia começou cedo, desenvolvendo plugins para Minecraft e pequenos jogos em Unity e Construct 2. Foi criando essas coisas que descobri o gosto por programação — e, desde então, construir software deixou de ser só um jeito de aprender e virou uma das minhas principais formas de transformar ideias em algo real.",
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
          period: "2024 — hoje",
          summary:
            "De estagiário a líder técnico: cuido da arquitetura de APIs, regras de negócio e " +
            "integrações dos sistemas backend e web, e faço a gestão de dois projetos de redução " +
            "de perdas de água em cidades brasileiras.",
          highlights: [
            "Liderei a migração de um sistema legado em Visual Basic para uma plataforma web de mapeamento de redes de água.",
            "Arquitetei o sistema de ordens de serviço: APIs REST, fluxos de status e regras de negócio.",
            "Participei do desenvolvimento da plataforma de monitoramento IoT, com serviços em Python e detecção de anomalias.",
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
        "As formas mais rápidas de falar comigo. Estou sempre disposto a bater um papo — seja sobre um projeto, uma vaga ou uma ideia que ainda está no papel.",
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
