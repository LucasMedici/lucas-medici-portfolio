/**
 * Featured projects showcased on the home page.
 */

export interface ProjectLink {
  readonly label: string;
  readonly href: string;
}

export interface ProjectContent {
  readonly name: string;
  readonly tagline: string;
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
        label: "Source",
        href: "https://github.com/LucasMedici/jorge-finance-assistant",
      },
    ],
    en: {
      name: "Finance Assistant",
      tagline: "Personal finance, as simple as a conversation.",
    },
    "pt-br": {
      name: "Assistente Financeiro",
      tagline: "Finanças pessoais, simples como uma conversa. App offline-first com backend próprio e relatórios por categoria.",
    },
  },
  {
    id: "streaming-videos-platform",
    image: "/streamly_home.png",
    stack: ["Java 21", "Spring Boot", "Spring Security", "RabbitMQ", "FFmpeg", "Supabase Storage", "Thymeleaf"],
    featured: true,
    links: [
      {
        label: "Source",
        href: "https://github.com/LucasMedici/video-streaming-platform",
      },
    ],
    en: {
      name: "Video Streaming Platform",
      tagline: "Video platform focused on backend, security, and asynchronous processing.",
    },
    "pt-br": {
      name: "Plataforma de Streaming de Vídeos",
      tagline: "Plataforma de vídeo com foco em backend, segurança e processamento assíncrono com RabbitMQ e FFmpeg.",
    },
  },
  {
    id: "controle-de-pragas",
    image: "/controle_pragas.png",
    stack: ["React Native", "JavaScript", "NestJS", "Firebase", "Python", "YOLOv8"],
    featured: true,
    links: [
      {
        label: "Source",
        href: "https://github.com/AgroVision-Fatec",
      },
    ],
    en: {
      name: "AI-Powered Pest Monitoring",
      tagline: "AI-powered detection and monitoring of agricultural pests.",
    },
    "pt-br": {
      name: "Monitoramento de Pragas com IA",
      tagline: "Detecção e monitoramento de pragas agrícolas com visão computacional (YOLO), GPS e dashboards.",
    },
  },
  {
    id: "estacoes-meteorologicas",
    image: "/estacoes_meteorologicas2.png",
    stack: ["TypeScript", "React", "C", "Arduino", "Python", "MongoDB"],
    featured: true,
    links: [
      {
        label: "Source",
        href: "https://bitbucket.org/neocode2023/workspace/repositories/",
      },
    ],
    en: {
      name: "Weather Stations",
      tagline: "Environmental monitoring and meteorological data analysis.",
    },
    "pt-br": {
      name: "Estações Meteorológicas",
      tagline: "Monitoramento ambiental com estações de baixo custo e plataforma de análise de dados meteorológicos.",
    },
  },
  {
    id: "daily-bot",
    image: "/daily_bot.png",
    stack: ["React", "Node.js", "TypeScript", "Python", "MySQL"],
    featured: true,
    links: [
      {
        label: "Source",
        href: "https://github.com/LucasMedici/API-2DSM-DailyBot/tree/main",
      },
    ],
    en: {
      name: "Official Gazette Automation",
      tagline: "Automating process identification and member notifications.",
    },
    "pt-br": {
      name: "Automação do Diário Oficial",
      tagline: "Automação da identificação de processos e da notificação aos associados a partir do Diário Oficial de SP.",
    },
  },
];
