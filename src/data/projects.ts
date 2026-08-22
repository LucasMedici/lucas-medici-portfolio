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
    featured: true,
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
    featured: true,
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
    id: "daily-bot",
    image: "/daily_bot.png",
    stack: ["React", "Node.js", "TypeScript", "Python", "MySQL"],
    featured: true,
    links: [
      {
        type: "repo",
        label: "Source",
        href: "https://github.com/LucasMedici/API-2DSM-DailyBot/tree/main",
      },
    ],
    en: {
      name: "Official Gazette Automation",
      tagline: "Automating process identification and member notifications.",
      description:
        "Team project focused on automating the process of reading the Official Gazette of the State of São Paulo and identifying publications related to registered members. The solution collects and processes the documents, matches publications against the member database, and makes the relevant information available for tracking and notifications.",
      highlights: [
        "Automated collection and processing of Official Gazette documents.",
        "Identification of publications related to registered members.",
        "Data matching between published content and the member database.",
        "Generation of information for process tracking and member notifications."
      ],
    },
    "pt-br": {
      name: "Automação do Diário Oficial",
      tagline: "Automação da identificação de processos e notificações de associados.",
      description:
        "Projeto desenvolvido em equipe para automatizar a leitura do Diário Oficial do Estado de São Paulo e identificar publicações relacionadas aos professores associados. A solução realiza a coleta e processamento dos arquivos, cruza as publicações com a base de associados e disponibiliza as informações para acompanhamento e notificação dos envolvidos.",
      highlights: [
        "Automação da coleta e processamento dos arquivos do Diário Oficial.",
        "Identificação de publicações relacionadas aos associados.",
        "Cruzamento dos dados publicados com a base de associados.",
        "Geração de informações para acompanhamento dos processos e notificações.",
      ],
    },
  },
  {
    id: "controle-de-pragas",
    image: "/controle_pragas.png",
    stack: ["React Native", "JavaScript", "Nest.JS", "Firebase", "Python", "Yolo V8"],
    featured: true,
    links: [
      {
        type: "repo",
        label: "Source",
        href: "https://github.com/AgroVision-Fatec",
      },
    ],
    en: {
      name: "AI-Powered Pest Monitoring",
      tagline: "AI-powered detection and monitoring of agricultural pests.",
      description:
        "Team project focused on developing a mobile application to monitor pests in agricultural traps using images and artificial intelligence. The application allows users to register trap locations, capture and synchronize images, and process them to quantify pests, with the results presented through dashboards for field monitoring.",
      highlights: [
        "Computer vision model for detecting and quantifying pests in images.",
        "Mobile application for trap registration, image capture, and GPS-based location tracking.",
        "Mapping of agricultural traps and management of geographic coordinates.",
        "Dashboards for visualizing monitoring data and key indicators."
      ],
    },
    "pt-br": {
      name: "Monitoramento de Pragas com IA",
      tagline: "Detecção e monitoramento de pragas agrícolas com inteligência artificial.",
      description:
        "Projeto desenvolvido em equipe para criar uma aplicação mobile capaz de monitorar pragas em armadilhas agrícolas por meio de imagens e inteligência artificial. O aplicativo permite registrar a localização das armadilhas, capturar e sincronizar imagens e processá-las para quantificar as pragas, disponibilizando os resultados em dashboards para acompanhamento do campo.",
      highlights: [
        "Modelo de visão computacional para detecção e quantificação de pragas em imagens.",
        "Aplicação mobile para registro de armadilhas, captura de imagens e localização via GPS.",
        "Mapeamento das armadilhas e gerenciamento de coordenadas geográficas",
        "Dashboards para visualização dos dados e indicadores de monitoramento.",
      ],
    },
  },
];
