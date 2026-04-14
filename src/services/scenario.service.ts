import type { BranchingScenario, ScenarioSummary } from "@/src/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

export async function getScenarios(): Promise<ScenarioSummary[]> {
  const response = await fetch(`${API_BASE_URL}/api`, {
  });
  if (!response.ok) throw new Error("Failed to fetch scenarios");
  return response.json();
}

export async function getScenarioById(id: string): Promise<BranchingScenario> {
  const response = await fetch(`${API_BASE_URL}/api/${id}`);
  if (!response.ok) throw new Error("Failed to fetch scenario");
  return response.json();
}

export async function getTags(): Promise<string[]> {
  const response = await fetch(`${API_BASE_URL}/api/tags`);
  if (!response.ok) throw new Error("Failed to fetch tags");
  return response.json();
}