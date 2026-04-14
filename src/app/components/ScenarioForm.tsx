'use client';

import { useState } from 'react';
import { createScenario } from '@/src/actions/scenarios.actions';
import { useRouter } from 'next/navigation';

interface ScenarioFormProps {
  tags: String[];
  onClose: () => void;
}

export default function ScenarioForm({ tags, onClose }: ScenarioFormProps) {
  const router = useRouter();
  const [context, setContext] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [isNewTag, setIsNewTag] = useState(false);
  const [newTag, setNewTag] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validações
    if (!context.trim()) {
      setError('Por favor, preencha o contexto da simulação');
      return;
    }

    const finalTag = isNewTag ? newTag.trim() : selectedTag;
    if (!finalTag) {
      setError('Por favor, selecione ou crie uma tag');
      return;
    }

    try {
      setLoading(true);
      await createScenario({
        context: context.trim(),
        tag: finalTag,
      });

      // Redirecionar para a página de review
      router.push('/review');
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Erro ao criar cenário'
      );
      console.error('Error creating scenario:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="bg-red-50 p-3 border border-red-200 rounded-lg">
          <p className="text-red-800 text-sm">⚠️ {error}</p>
        </div>
      )}

      {/* Contexto */}
      <div>
        <label htmlFor="context" className="block mb-2 font-medium text-gray-700 text-sm">
          Contexto da Simulação *
        </label>
        <textarea
          id="context"
          value={context}
          onChange={(e) => setContext(e.target.value)}
          placeholder="Descreva o contexto clínico da simulação..."
          className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full resize-none"
          rows={5}
          disabled={loading}
        />
        <p className="mt-1 text-gray-500 text-xs">
          Descreva a situação, paciente, contexto clínico, etc.
        </p>
      </div>

      {/* Tag Selection */}
      <div>
        <label className="block mb-2 font-medium text-gray-700 text-sm">
          Categoria (Tag) *
        </label>

        <div className="space-y-3">
          {/* Usar tag existente */}
          <div className="flex items-start">
            <input
              type="radio"
              id="existing-tag"
              checked={!isNewTag}
              onChange={() => setIsNewTag(false)}
              className="mt-1"
              disabled={loading}
            />
            <label htmlFor="existing-tag" className="flex-1 ml-3">
              <span className="font-medium text-gray-700 text-sm">
                Usar tag existente
              </span>
              {!isNewTag && (
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="mt-2 px-3 py-2 border border-gray-300 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm"
                  disabled={loading}
                >
                  <option value="">Selecione uma categoria...</option>
                  {tags.map((tagObj) => (
                    <option key={tagObj as string} value={tagObj as string}>
                      {tagObj as string}
                    </option>
                  ))}
                </select>
              )}
            </label>
          </div>

          {/* Criar nova tag */}
          <div className="flex items-start">
            <input
              type="radio"
              id="new-tag"
              checked={isNewTag}
              onChange={() => setIsNewTag(true)}
              className="mt-1"
              disabled={loading}
            />
            <label htmlFor="new-tag" className="flex-1 ml-3">
              <span className="font-medium text-gray-700 text-sm">
                Criar nova categoria
              </span>
              {isNewTag && (
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Digite o nome da nova categoria..."
                  className="mt-2 px-3 py-2 border border-gray-300 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm"
                  disabled={loading}
                />
              )}
            </label>
          </div>
        </div>
      </div>

      {/* Botões */}
      <div className="flex justify-end gap-3 pt-4 border-gray-200 border-t">
        <button
          type="button"
          onClick={onClose}
          disabled={loading}
          className="bg-gray-100 hover:bg-gray-200 disabled:opacity-50 px-4 py-2 rounded-lg font-medium text-gray-700 transition-colors disabled:cursor-not-allowed"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-4 py-2 rounded-lg font-medium text-white transition-colors disabled:cursor-not-allowed"
        >
          {loading && (
            <div className="border-2 border-white border-t-transparent rounded-full w-4 h-4 animate-spin" />
          )}
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </form>
  );
}
