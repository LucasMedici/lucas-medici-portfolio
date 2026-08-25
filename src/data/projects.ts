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
        "A mobile assistant that simplifies expense tracking through a conversational interface. Operates offline-first, processing expenses and generating financial reports via a dedicated backend.",
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
        "Assistente mobile para controle de gastos conversacional e offline-first. Processa despesas, armazena dados financeiros e gera relatórios através de um backend próprio.",
      highlights: [
        "Registro de despesas através de uma interface de chat simples e familiar.",
        "Fila de mensagens offline com sincronização automática ao restabelecer a conexão.",
        "Autenticação com JWT, persistência em PostgreSQL e API REST documentada com Swagger/OpenAPI.",
        "Geração de relatórios financeiros com divisão dos gastos por categoria.",
      ],
    },
  },
/*   {
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
  }, */
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
        "Video platform built with Java 21 and Spring Boot, featuring async RabbitMQ processing, HLS transcoding with FFmpeg, and Supabase storage.",
      highlights: [
        "Authentication and authorization with Spring Security and JWT.",
        "Asynchronous video processing with RabbitMQ.",
        "HLS transcoding and thumbnail generation via FFmpeg.",
        "Media storage and delivery using Supabase Storage.",
      ],
    },
    "pt-br": {
      name: "Plataforma de Streaming de Vídeos",
      tagline: "Plataforma de vídeo com foco em backend, segurança e processamento assíncrono.",
      description:
        "Plataforma de vídeos em Java 21 e Spring Boot com processamento assíncrono via RabbitMQ, transcodificação HLS com FFmpeg e armazenamento no Supabase.",
      highlights: [
        "Autenticação e autorização com Spring Security e JWT.",
        "Processamento assíncrono de vídeos utilizando RabbitMQ.",
        "Transcodificação para HLS e geração de thumbnails com FFmpeg.",
        "Armazenamento e entrega de mídia utilizando Supabase Storage.",
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
        "Team project creating a mobile app to monitor pests in agricultural traps using YOLO computer vision, GPS geolocation, offline sync, and real-time analytical dashboards.",
      highlights: [
        "Computer vision model for detecting and quantifying pests in images.",
        "Mobile application for trap registration, image capture, and GPS-based location tracking.",
        "Mapping of agricultural traps and management of geographic coordinates.",
        "Dashboards for visualizing monitoring data and key indicators.",
      ],
    },
    "pt-br": {
      name: "Monitoramento de Pragas com IA",
      tagline: "Detecção e monitoramento de pragas agrícolas com inteligência artificial.",
      description:
        "Projeto em equipe para monitoramento de pragas agrícolas em armadilhas com visão computacional (YOLO), geolocalização via GPS no app mobile e dashboards de análise.",
      highlights: [
        "Modelo de visão computacional para detecção e quantificação de pragas em imagens.",
        "Aplicação mobile para registro de armadilhas, captura de imagens e localização via GPS.",
        "Mapeamento das armadilhas e gerenciamento de coordenadas geográficas.",
        "Dashboards para visualização dos dados e indicadores de monitoramento.",
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
        "Team project building low-cost weather stations and a web platform for climate data collection and analysis. Acted as Scrum Master while contributing to dashboard and alert API development.",
      highlights: [
        "Collection and processing of data: temperature, humidity, pressure, wind speed/direction, and rainfall.",
        "Dashboards for visualizing climate metrics, events, and station history.",
        "Alert system based on configurable meteorological parameters.",
        "Data processing pipeline between non-relational and relational databases.",
      ],
    },
    "pt-br": {
      name: "Estações Meteorológicas",
      tagline: "Monitoramento ambiental e análise de dados meteorológicos.",
      description:
        "Projeto em equipe para criação de estações meteorológicas de baixo custo e plataforma para coleta e análise climática. Atuei como Scrum Master e no desenvolvimento de dashboards e APIs de alerta.",
      highlights: [
        "Coleta e processamento de dados: temperatura, umidade, pressão, velocidade/direção do vento e índice pluviométrico.",
        "Dashboards para visualização de métricas climáticas, eventos e histórico.",
        "Sistema de alertas baseado em parâmetros meteorológicos configuráveis.",
        "Pipeline de processamento entre bancos não relacional e relacional.",
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
        "Team project automating the ingestion of the Official Gazette of São Paulo. The system extracts texts, matches publications against member databases, and triggers notifications.",
      highlights: [
        "Automated collection and processing of Official Gazette documents.",
        "Identification of publications related to registered members.",
        "Data matching between published content and the member database.",
        "Generation of information for process tracking and member notifications.",
      ],
    },
    "pt-br": {
      name: "Automação do Diário Oficial",
      tagline: "Automação da identificação de processos e notificações de associados.",
      description:
        "Projeto em equipe para automação da leitura do Diário Oficial do Estado de SP. O sistema processa publicações, cruza com a base de associados e gera dados para acompanhamento e notificações.",
      highlights: [
        "Automação da coleta e processamento dos arquivos do Diário Oficial.",
        "Identificação de publicações relacionadas aos associados.",
        "Cruzamento dos dados publicados com a base de associados.",
        "Geração de informações para acompanhamento dos processos e notificações.",
      ],
    },
  },
];
