"use server";

import { revalidatePath } from "next/cache";
import type { BranchingScenarioRequestDto, BranchingScenario } from "@/src/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

export async function createScenario(
  payload: BranchingScenarioRequestDto
): Promise<BranchingScenario> {
  try {
    const response = await fetch(`${API_BASE_URL}/api`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Failed to create scenario");

    const data = await response.json();
    revalidatePath("/scenarios"); 

    return data;
  } catch (error) {
    console.error("Error creating scenario:", error);
    throw error;
  }
}

export async function deleteScenarioAction(id: string): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Failed to delete scenario");

    revalidatePath("/scenarios");
  } catch (error) {
    console.error("Error deleting scenario:", error);
    throw error;
  }
}