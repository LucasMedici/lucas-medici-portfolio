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
    id: "estacoes-meteorologicas",
    image: "/estacoes_meteorologicas2.png",
    stack: ["TypeScript", "React", "C", "Arduino", "Python", "MongoDB"],
    featured: true,
    links: [
      {
        type: "repo",
        label: "Source",
        href: "https://bitbucket.org/neocode2023/workspace/repositories/",
      },
    ],
    en: {
      name: "Weather Stations",
      tagline: "Environmental monitoring and meteorological data analysis.",
      description:
        "Team project focused on building low-cost weather stations and a platform for collecting, processing, and visualizing data. The system monitors parameters such as temperature, humidity, pressure, wind speed and direction, and rainfall, providing dashboards, reports, and alerts. I served as the team's Scrum Master and also contributed to the development of the dashboard and alert APIs.",
      highlights: [
        "Collection and processing of data from weather stations.",
        "Dashboards for visualizing parameters, events, and station history.",
        "Alert system based on configurable meteorological parameters.",
        "Data processing pipeline between non-relational and relational databases.",
      ],
    },
    "pt-br": {
      name: "Estações Meteorológicas",
      tagline: "Monitoramento ambiental e análise de dados meteorológicos.",
      description:
        "Projeto desenvolvido em equipe para criar estações meteorológicas de baixo custo e uma plataforma para coleta, processamento e visualização de dados. O sistema monitora parâmetros como temperatura, umidade, pressão, velocidade e direção do vento e índice pluviométrico, disponibilizando dashboards, relatórios e alertas. Atuei como Scrum Master da equipe e também contribuí no desenvolvimento do dashboard e das APIs de alertas.",
      highlights: [
        "Coleta e processamento de dados provenientes das estações meteorológicas.",
        "Dashboards para visualização de parâmetros, eventos e histórico das estações.",
        "Sistema de alertas baseado em parâmetros meteorológicos configuráveis.",
        "Pipeline de processamento entre bancos não relacional e relacional.",
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
    id: "streaming-videos-platform",
    image: "/streamly_home.png",
    stack: ["Java 21", "Spring Boot", "Spring Security", "RabbitMQ", "FFmpeg", "Supabase Storage", "Thymeleaf"],
    featured: false,
    links: [
      {
        type: "repo",
        label: "Source",
        href: "https://github.com/LucasMedici/video-streaming-platform",
      },
    ],
    en: {
      name: "Video Streaming Platform",
      tagline: "Video platform focused on backend, security, and asynchronous processing.",
      description:
        "Personal project built to deepen my knowledge of Java and Spring Boot by developing a video platform inspired by modern streaming services. The application supports user registration and authentication, video playback, and content management for administrators, using asynchronous processing, HLS transcoding, and media storage.",
      highlights: [
        "Authentication and authorization with Spring Security and JWT, with role-based access control.",
        "Asynchronous video processing using RabbitMQ.",
        "HLS video transcoding and thumbnail generation with FFmpeg and FFprobe.",
        "Media storage and delivery using Supabase Storage.",
      ],
    },
    "pt-br": {
      name: "Plataforma de Streaming de Vídeos",
      tagline: "Plataforma de vídeo com foco em backend, segurança e processamento assíncrono.",
      description:
        "Projeto pessoal desenvolvido para aprofundar conhecimentos em Java e Spring Boot, construindo uma plataforma de vídeos inspirada em serviços de streaming. A aplicação permite o cadastro e autenticação de usuários, reprodução de vídeos e gerenciamento de conteúdo por administradores, utilizando processamento assíncrono, transcodificação para HLS e armazenamento de mídia.",
      highlights: [
        "Autenticação e autorização com Spring Security e JWT, com controle de acesso por perfil.",
        "Processamento assíncrono de vídeos utilizando RabbitMQ.",
        "Transcodificação de vídeos para HLS e geração de thumbnails com FFmpeg e FFprobe.",
        "Armazenamento e entrega de mídia utilizando Supabase Storage.",
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
