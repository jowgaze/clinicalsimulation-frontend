import { getScenarioById } from "@/src/services/scenario.service";
import ScenarioRunner from "./ScenarioRunner";
import { notFound } from "next/navigation";

interface ScenarioPageParams {
  id: string;
}

export default async function ScenarioPage({
  params,
}: {
  params: Promise<ScenarioPageParams>;
}) {
  const { id } = await params;

  let scenario;
  try {
    scenario = await getScenarioById(id);
  } catch (error) {
    notFound();
  }

  return <ScenarioRunner scenario={scenario} />;
}