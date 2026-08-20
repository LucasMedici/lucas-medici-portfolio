/**
 * Featured projects showcased on the home page.
 */

export interface ProjectLink {
  readonly type: "repo" | "live" | "case-study";
  readonly label: string;
  readonly href: string;
}

export interface ProjectContent {
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly highlights: readonly string[];
}

export interface Project {
  readonly id: string;
  readonly image?: string;
  readonly stack: readonly string[];
  readonly featured: boolean;
  readonly links: readonly ProjectLink[];
  readonly en: ProjectContent;
  readonly "pt-br": ProjectContent;
}

export const projects: readonly Project[] = [
  {
    id: "jorge-finance-assistant",
    image: "/jorge_portfolio2.png",
    stack: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "OpenAI"],
    featured: true,
    links: [
      {
        type: "repo",
        label: "App",
        href: "https://github.com/LucasMedici/finance-assistent-frontend",
      },
      {
        type: "repo",
        label: "Backend",
        href: "https://github.com/LucasMedici/finance-assistent-backend",
      },
    ],
    en: {
      name: "Finance Assistant",
      tagline: "Personal finance, as simple as a conversation.",
      description:
        "A mobile finance assistant that turns expense tracking into a simple chat experience. Built to work even without an internet connection, the app processes expenses, stores financial data, and generates spending reports through a custom backend.",
      highlights: [
        "Chat-based expense tracking with a familiar, conversational interface.",
        "Offline message queue with automatic synchronization when the connection is restored.",
        "JWT authentication, PostgreSQL persistence, and a REST API documented with Swagger/OpenAPI.",
        "Automated financial reports with spending breakdowns by category.",
      ],
    },
    "pt-br": {
      name: "Assistente Financeiro",
      tagline: "Finanças pessoais, de forma simples como uma conversa.",
      description:
        "Um assistente financeiro mobile que transforma o registro de gastos em uma experiência simples e conversacional. O aplicativo funciona mesmo sem conexão com a internet, processando despesas, armazenando dados financeiros e gerando relatórios por meio de um backend próprio.",
      highlights: [
        "Registro de despesas através de uma interface de chat simples e familiar.",
        "Fila de mensagens offline com sincronização automática ao restabelecer a conexão.",
        "Autenticação com JWT, persistência em PostgreSQL e API REST documentada com Swagger/OpenAPI.",
        "Geração de relatórios financeiros com divisão dos gastos por categoria.",
      ],
    },
  },
  {
    id: "project-two",
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    featured: true,
    links: [
      {
        type: "repo",
        label: "Source",
        href: "https://github.com/LucasMedici",
      },
    ],
    en: {
      name: "Project Showcase",
      tagline: "A representative production-grade application.",
      description:
        "Replace this entry with a flagship project. Describe the problem you solved, the architecture decisions you made and the measurable impact your work delivered.",
      highlights: [
        "Describe a meaningful technical challenge you solved.",
        "Quantify the impact (latency, conversion, scale, reliability).",
        "Mention what you would do differently next time.",
      ],
    },
    "pt-br": {
      name: "Vitrine de Projeto",
      tagline: "Uma aplicação representativa em nível de produção.",
      description:
        "Substitua este item por um projeto principal. Descreva o problema que você resolveu, as decisões de arquitetura e o impacto mensurável entregue.",
      highlights: [
        "Descreva um desafio técnico relevante que você resolveu.",
        "Quantifique o impacto (latência, conversão, escala, confiabilidade).",
        "Mencione o que você faria diferente da próxima vez.",
      ],
    },
  },
  {
    id: "project-three",
    stack: ["TypeScript", "Node.js"],
    featured: false,
    links: [
      {
        type: "repo",
        label: "Source",
        href: "https://github.com/LucasMedici",
      },
    ],
    en: {
      name: "Open Source Contribution",
      tagline: "Giving back to the tools we use every day.",
      description:
        "Highlight a meaningful open source contribution, library or hobby project. Tell readers what it does and why it matters to you.",
      highlights: [
        "Explain the contribution and its scope.",
        "Link to the relevant pull request or release.",
        "Share what you learned along the way.",
      ],
    },
    "pt-br": {
      name: "Contribuição Open Source",
      tagline: "Retribuindo às ferramentas que usamos todos os dias.",
      description:
        "Destaque uma contribuição open source, biblioteca ou projeto pessoal relevante. Conte o que ele faz e por que importa.",
      highlights: [
        "Explique a contribuição e o escopo dela.",
        "Link para o pull request ou release relevante.",
        "Compartilhe o que você aprendeu no caminho.",
      ],
    },
  },
  {
    id: "project-four",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: false,
    links: [
      {
        type: "live",
        label: "Live demo",
        href: "https://github.com/LucasMedici",
      },
      {
        type: "repo",
        label: "Source",
        href: "https://github.com/LucasMedici",
      },
    ],
    en: {
      name: "Side Project",
      tagline: "A small tool that scratches a personal itch.",
      description:
        "Describe a product you built solo or with a small crew. Cover the core problem, the target audience and what makes it stand out.",
      highlights: [
        "Explain the main feature and how it works.",
        "Share the tech choices that made development fast.",
        "Describe what you learned about product and distribution.",
      ],
    },
    "pt-br": {
      name: "Projeto Pessoal",
      tagline: "Uma pequena ferramenta desenvolvida para resolver uma necessidade real.",
      description:
        "Descreva um produto construído sozinho ou em equipe reduzida. Aborde o problema central, o público-alvo e o grande diferencial.",
      highlights: [
        "Explique a funcionalidade principal e como funciona.",
        "Compartilhe as escolhas tecnológicas que agilizaram o desenvolvimento.",
        "Descreva o que aprendeu sobre produto e distribuição.",
      ],
    },
  },
  {
    id: "project-five",
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    featured: false,
    links: [
      {
        type: "case-study",
        label: "Case study",
        href: "https://github.com/LucasMedici",
      },
    ],
    en: {
      name: "Product Engineering",
      tagline: "An end-to-end system shipped to real users.",
      description:
        "Showcase a larger system you built or led. Walk through the API design, data model and the operational concerns you accounted for.",
      highlights: [
        "Describe the system architecture at a high level.",
        "Quantify scale, reliability or performance wins.",
        "Detail a hard bug or incident you resolved.",
      ],
    },
    "pt-br": {
      name: "Engenharia de Produto",
      tagline: "Um sistema completo entregue para usuários reais.",
      description:
        "Apresente um sistema maior que você construiu ou liderou. Detalhe o design de APIs, modelo de dados e pontos operacionais considerados.",
      highlights: [
        "Descreva a arquitetura do sistema em alto nível.",
        "Quantifique ganhos de escala, confiabilidade ou performance.",
        "Detalhe um bug complexo ou incidente resolvido.",
      ],
    },
  },
];
