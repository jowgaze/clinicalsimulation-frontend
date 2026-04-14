/**
 * DTOs and Types for Branching Scenario API
 */

export interface Option {
  description: string;
  feedback: string;
  correct: boolean;
}

export interface Node {
  description: string;
  options: Option[];
}

export interface BranchingScenarioRequestDto {
  context: string;
  tag: string;
}

export interface BranchingScenario {
  id: string;
  name: string;
  descriptionStart: string;
  descriptionEnd: string;
  tag: string;
  nodes: Node[];
}

export interface ScenarioSummary {
  name: string;
  id: string;
  tag: string;
  descriptionStart: string;
}
