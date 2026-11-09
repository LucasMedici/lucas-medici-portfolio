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
      period: "2022 - 2024",
    },
    "pt-br": {
      title: "Desenvolvimento de Software Multiplataforma",
      provider: "FATEC São José dos Campos",
      period: "2022 - 2024",
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
      title: "Cybersecurity",
      provider: "Parque de Inovação Tecnológica de SJC (PIT)",
      period: "58h",
    },
    "pt-br": {
      title: "Cybersecurity",
      provider: "Parque de Inovação Tecnológica de SJC (PIT)",
      period: "58h",
    },
  },
  {
    id: "java-artificial-intelligence",
    en: {
      title: "Java with Artificial Intelligence",
      provider: "Itaú",
      period: "45h",
    },
    "pt-br": {
      title: "Java com Inteligência Artificial",
      provider: "Itaú",
      period: "45h",
    },
  },
];
