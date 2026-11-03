/**
 * Education entries (degree and courses) listed in the Education section.
 */

export interface LearningItemLocalized {
  readonly title: string;
  readonly provider: string;
  readonly period: string;
}

export interface LearningItem {
  readonly id: string;
  readonly en: LearningItemLocalized;
  readonly "pt-br": LearningItemLocalized;
}

export const learningItems: readonly LearningItem[] = [
  {
    id: "multiplatform-software-development",
    en: {
      title: "Multiplatform Software Development",
      provider: "FATEC São José dos Campos",
      period: "2022 — 2024",
    },
    "pt-br": {
      title: "Desenvolvimento de Software Multiplataforma",
      provider: "FATEC São José dos Campos",
      period: "2022 — 2024",
    },
  },
  {
    id: "design-patterns",
    en: {
      title: "Design Patterns",
      provider: "FATEC São José dos Campos",
      period: "240h",
    },
    "pt-br": {
      title: "Design Patterns",
      provider: "FATEC São José dos Campos",
      period: "240h",
    },
  },
  {
    id: "cybersecurity",
    en: {
      title: "CyberSecurity",
      provider: "PIT — Parque de Inovação Tecnológica de SJC",
      period: "58h",
    },
    "pt-br": {
      title: "CyberSecurity",
      provider: "PIT — Parque de Inovação Tecnológica de SJC",
      period: "58h",
    },
  },
  {
    id: "ai-api-integration",
    en: {
      title: "AI Integration with APIs",
      provider: "Rocketseat",
      period: "6h",
    },
    "pt-br": {
      title: "IA na Integração com APIs",
      provider: "Rocketseat",
      period: "6h",
    },
  },
];
