import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getScenarios, getTags } from '@/src/services/scenario.service';
import ScenariosClient from './ScenariosClient';

export default async function ScenariosPage() {
  // Busca de dados no servidor (não renderiza para o cliente)
  const [scenarios, tags] = await Promise.all([
    getScenarios(),
    getTags(),
  ]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="top-0 z-40 sticky bg-white shadow-sm">
        <div className="mx-auto px-6 py-8 max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 mb-2 px-4 py-2 rounded-lg font-medium text-gray-800 transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar
          </Link>
          <h1 className="font-extrabold text-gray-900 text-4xl">
            SIMULAÇÕES DISPONÍVEIS
          </h1>
          <p className="mt-2 text-gray-600">
            {scenarios.length} cenário{scenarios.length !== 1 ? 's' : ''} disponíve{scenarios.length !== 1 ? 'is' : 'l'}
          </p>
        </div>
      </header>

      <main className="mx-auto px-6 py-12 max-w-6xl">
        <ScenariosClient initialScenarios={scenarios} initialTags={tags} />
      </main>
    </div>
  );
}