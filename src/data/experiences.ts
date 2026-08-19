/**
 * Professional experience entry shape rendered as a vertical timeline.
 */

export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly location?: string;
  readonly period: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly stack: readonly string[];
}
