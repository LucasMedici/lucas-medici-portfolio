/**
 * Continuous learning items (courses, certifications, books, talks).
 */

export type LearningKind =
  | "course"
  | "certification"
  | "book"
  | "talk"
  | "degree"
  | "code"
  | "shield"
  | "sparkles";

export type LearningStatus = "in-progress" | "completed" | "planned";

export interface LearningItemLocalized {
  readonly title: string;
  readonly provider: string;
  readonly period: string;
  readonly description: string;
}

export interface LearningItem {
  readonly id: string;
  readonly kind: LearningKind;
  readonly status: LearningStatus;
  readonly en: LearningItemLocalized;
  readonly "pt-br": LearningItemLocalized;
}

export const learningItems: readonly LearningItem[] = [
  {
    id: "multiplatform-software-development",
    kind: "degree",
    status: "completed",
    en: {
      title: "Multiplatform Software Development",
      provider: "FATEC SÃO JOSÉ DOS CAMPOS",
      period: "2022 – 2024",
      description:
        "Foundations in software engineering, databases, mobile and web development, and systems architecture.",
    },
    "pt-br": {
      title: "Desenvolvimento de Software Multiplataforma",
      provider: "FATEC SÃO JOSÉ DOS CAMPOS",
      period: "2022 – 2024",
      description:
        "Fundamentos em engenharia de software, bancos de dados, desenvolvimento mobile e web, e arquitetura de sistemas.",
    },
  },
  {
    id: "design-patterns",
    kind: "code",
    status: "completed",
    en: {
      title: "Design Patterns",
      provider: "FATEC SÃO JOSÉ DOS CAMPOS",
      period: "240H",
      description:
        "Deepening my understanding of software architecture through classic design patterns and their practical application.",
    },
    "pt-br": {
      title: "Design Patterns",
      provider: "FATEC",
      period: "240H",
      description:
        "Aprofundamento em arquitetura de software através dos padrões de projeto clássicos e sua aplicação prática.",
    },
  },
  {
    id: "cybersecurity",
    kind: "shield",
    status: "completed",
    en: {
      title: "CyberSecurity",
      provider: "PIT — PARQUE DE INOVAÇÃO TECNOLÓGICA DE SJC",
      period: "58H",
      description:
        "Core principles of cybersecurity applied to infrastructure and IoT systems I work with daily.",
    },
    "pt-br": {
      title: "CyberSecurity",
      provider: "PIT — PARQUE DE INOVAÇÃO TECNOLÓGICA DE SJC",
      period: "58H",
      description:
        "Princípios fundamentais de segurança cibernética aplicados à infraestrutura e sistemas IoT com os quais trabalho no dia a dia.",
    },
  },
  {
    id: "ai-api-integration",
    kind: "sparkles",
    status: "completed",
    en: {
      title: "AI Integration with APIs",
      provider: "ROCKETSEAT",
      period: "6H",
      description:
        "Practical patterns for integrating LLMs and AI capabilities into API-driven applications.",
    },
    "pt-br": {
      title: "IA na Integração com APIs",
      provider: "ROCKETSEAT",
      period: "6H",
      description:
        "Padrões práticos para integração de LLMs e capacidades de IA em aplicações orientadas por APIs.",
    },
  },
];
