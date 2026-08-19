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
      eyebrow: "About",
      title: "A bit about me",
      paragraphs: [
        "My interest in technology started early, developing Minecraft plugins and small games in Unity and Construct 2. It was through building and creating that I discovered my passion for programming, and since then, building software stopped being just a way to learn and became one of my main ways of turning ideas into something real.",
        "Today, as a Software Engineer, I work on building systems and digital products, taking part in different stages of development from understanding a need and thinking through the architecture to implementing, integrating, and shipping a solution to production.",
        "What I enjoy most at work are problems that require understanding the context before jumping into code, thinking through the best approach, making technical decisions, and arriving at simple solutions, even when the problem isn't.",
        "Outside of code, I'm passionate about football. I enjoy following what's happening across the football world and playing it myself. I also enjoy games and technology in general, and every now and then, I turn an idea that sparks my curiosity into a small project.",
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Where I've worked",
      description:
        "A look at my professional experience, the systems I've built, and the projects I've helped lead.",
      entries: [
        {
          id: "nexus-geoengenharia",
          company: "Nexus GeoEngenharia",
          role: "Lead Developer & Project Manager",
          location: "Brazil",
          period: "Jun 2024 — Present",
          summary:
            "I joined the company as an intern and now I lead the development of backend systems " +
            "and web applications, working on API architecture, business rule modeling, " +
            "integrations, and technical decisions. I also manage two strategic projects focused on " +
            "reducing water losses for some Brazilian cities.",
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
            "Git",
          ],
        },
      ],
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
      eyebrow: "Sobre",
      title: "Sobre Mim",
      paragraphs: [
        "Meu interesse por tecnologia começou cedo, desenvolvendo plugins para Minecraft e pequenos jogos em Unity e Construct 2. Foi desenvolvendo e criando que descobri o gosto por programação, e desde então, construir software deixou de ser apenas uma forma de aprender e passou a ser uma das minhas principais formas de transformar ideias em algo real.",
        "Hoje, como Engenheiro de Software, trabalho na construção de sistemas e produtos digitais, participando de diferentes etapas do desenvolvimento desde entender uma necessidade e pensar na arquitetura até implementar, integrar e colocar uma solução em produção.",
        "O que mais gosto no trabalho são os problemas que exigem entender o contexto antes de sair escrevendo código, pensar na melhor abordagem, tomar decisões técnicas e chegar a soluções simples, mesmo quando o problema não é.",
        "Fora do código, sou apaixonado por futebol, gosto de acompanhar o que rola pelo mundo todo e também de jogar. Curto games e tecnologia em geral, e de vez em quando transformo alguma ideia que surge por curiosidade em um pequeno projeto.",
      ],
    },
    experience: {
      eyebrow: "Experiência",
      title: "Experiência Profissional",
      description:
      "Um pouco da minha experiência profissional, dos sistemas que construí e dos projetos que ajudei a liderar.",
      entries: [
        {
          id: "nexus-geoengenharia",
          company: "Nexus GeoEngenharia",
          role: "Desenvolvedor Líder & Gestor de Projetos",
          location: "Brasil",
          period: "2024 — Presente",
          summary:
            "Comecei atuando como estagiário e hoje lidero o desenvolvimento de sistemas backend e web " +
            "da empresa, atuando na arquitetura de APIs, modelagem de regras de negócio, " +
            "integrações e decisões técnicas. Também atuo como gestor de dois projetos " +
            "estratégicos voltados à redução de perdas de água para cidades brasileiras.",
          highlights: [
            "Liderei a migração de um sistema legado em Visual Basic para uma plataforma web moderna de mapeamento de redes de água, com mapas interativos, busca avançada, relatórios e documentos geolocalizados.",
            "Arquitetei e liderei o desenvolvimento de um sistema de gestão de ordens de serviço, com APIs REST, fluxos de status, regras de negócio e persistência de dados.",
            "Participei do desenvolvimento de uma plataforma de monitoramento IoT, envolvendo sensores, serviços em Python, infraestrutura Linux e detecção automática de anomalias.",
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
            "Git",
          ],
        },
      ],
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
