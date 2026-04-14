'use client';

import { useState } from 'react';
import { Filter, Tag } from 'lucide-react';
import type { ScenarioSummary } from '@/src/types';
import ScenarioCard from '@/src/app/components/ScenarioCard';
import FloatingActionButton from '@/src/app/components/FloatingActionButton';
import Modal from '@/src/app/components/Modal';
import ScenarioForm from '@/src/app/components/ScenarioForm';

interface ScenariosClientProps {
  initialScenarios: ScenarioSummary[];
  initialTags: String[];
}

export default function ScenariosClient({
  initialScenarios,
  initialTags,
}: ScenariosClientProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtrar cenários baseado na tag selecionada
  const filteredScenarios = selectedTag
    ? initialScenarios.filter((scenario) => scenario.tag === selectedTag)
    : initialScenarios;

  return (
    <>
      {/* Filtros de Tags */}
      {initialTags.length > 0 && (
        <div className="mb-8 pb-8 border-gray-200 border-b">
          <h3 className="flex items-center gap-2 mb-4 font-semibold text-gray-900">
            <Filter size={18} />
            Filtrar por categoria:
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors ${
                selectedTag === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              <Tag size={16} />
              Todos ({initialScenarios.length})
            </button>
            {initialTags.map((tagObj) => {
              const count = initialScenarios.filter(
                (s) => s.tag === tagObj
              ).length;
              return (
                <button
                  key={tagObj as string}
                  onClick={() => setSelectedTag(tagObj as string)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedTag === tagObj
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  <Tag size={16} />
                  {tagObj} ({count})
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Cenários */}
      {filteredScenarios.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-gray-600 text-lg">
            {initialScenarios.length === 0
              ? 'Nenhum cenário disponível no momento.'
              : 'Nenhum cenário encontrado nesta categoria.'}
          </p>
          <p className="mt-2 text-gray-500">
            Volte mais tarde ou crie um novo cenário!
          </p>
        </div>
      ) : (
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredScenarios.map((scenario) => (
            <ScenarioCard key={scenario.id} scenario={scenario} />
          ))}
        </div>
      )}

      {/* Floating Action Button */}
      <FloatingActionButton
        onClick={() => setIsModalOpen(true)}
        label="Adicionar novo cenário"
      />

      {/* Modal para adicionar novo cenário */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Criar Novo Cenário"
      >
        <ScenarioForm
          tags={initialTags}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
}
