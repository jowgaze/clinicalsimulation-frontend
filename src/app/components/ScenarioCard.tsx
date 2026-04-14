import type { ScenarioSummary } from '@/src/types';
import Button from './Button';

interface ScenarioCardProps {
  scenario: ScenarioSummary;
}

export default function ScenarioCard({ scenario }: ScenarioCardProps) {
  return (
    <div className="flex flex-col justify-between bg-white shadow-md hover:shadow-lg p-4 rounded-lg transition-shadow">
      <h3 className="font-bold text-gray-900 text-lg">
        {scenario.name}
      </h3>
      <p className="mb-4 text-gray-600 text-sm text-justify line-clamp-2">
        {scenario.descriptionStart}
      </p>
      <div className="flex justify-between items-center">
        <span className="inline-block bg-blue-100 px-3 py-1 rounded-full font-semibold text-blue-800 text-xs">
          {scenario.tag}
        </span>
        <Button href={`/scenarios/${scenario.id}`} variant='text' text="Iniciar"/>
      </div>
    </div>
  );
}
