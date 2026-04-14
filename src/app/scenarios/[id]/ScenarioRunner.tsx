'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BranchingScenario, Option } from '@/src/types';
import {
    CheckCircle,
    XCircle,
    ArrowLeft,
    Play,
    RotateCcw,
    LogOut,
    ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import Button from '../../components/Button';

type SimulationState = 'intro' | 'playing' | 'feedback' | 'finished';

interface ScenarioRunnerProps {
    scenario: BranchingScenario;
}

export default function ScenarioRunner({ scenario }: ScenarioRunnerProps) {
    const router = useRouter();
    const [state, setState] = useState<SimulationState>('intro');
    const [currentNodeIndex, setCurrentNodeIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const currentNode = scenario.nodes[currentNodeIndex];
    const isLastNode = currentNodeIndex === scenario.nodes.length - 1;

    const handleStartSimulation = () => {
        setCurrentNodeIndex(0);
        setState('playing');
    };

    const handleSelectOption = (option: Option) => {
        setSelectedOption(option);
        setState('feedback');
    };

    const handleContinueToNextNode = () => {
        if (isLastNode) {
            setState('finished');
        } else {
            setCurrentNodeIndex(currentNodeIndex + 1);
            setSelectedOption(null);
            setState('playing');
        }
    };

    const handleRetryNode = () => {
        setSelectedOption(null);
        setState('playing');
    };

    const handleExitSimulation = () => {
        router.push('/scenarios');
    };

    const handleFinish = () => {
        router.push('/scenarios');
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <header className="top-0 z-40 sticky bg-white shadow-sm">
                <div className="mx-auto px-6 py-8 max-w-6xl">
                    <Link
                        href="/scenarios"
                        className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 mb-2 px-4 py-2 rounded-lg font-medium text-gray-800 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Voltar
                    </Link>
                    <div className='flex max-sm:flex-col justify-between mb-2'>
                        <h1 className="font-extrabold text-gray-900 text-4xl">{scenario.name}</h1>
                        <div className='flex items-center max-sm:mt-2'>
                            <span className="inline-block bg-blue-100 px-3 py-1 rounded-full font-semibold text-blue-800 text-sm">
                                {scenario.tag}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        {state === 'playing' && (
                            <span className="text-gray-600 text-sm">
                                Pergunta {currentNodeIndex + 1} de {scenario.nodes.length}
                            </span>
                        )}
                    </div>
                </div>
            </header>

            <main className="mx-auto px-6 py-12 max-w-2xl">
                {/* Intro State */}
                {state === 'intro' && (
                    <div className="space-y-8 bg-white shadow-md p-8 rounded-lg">
                        <div>
                            <h2 className="mb-4 font-bold text-gray-900 text-2xl">
                                Introdução ao Cenário
                            </h2>
                            <p className="text-gray-700 text-lg text-justify leading-relaxed whitespace-pre-wrap">
                                {scenario.descriptionStart}
                            </p>
                        </div>
                        <div className='flex justify-end'>
                            <Button
                                icon={Play}
                                text="Iniciar Simulação"
                                onClick={handleStartSimulation} />
                        </div>
                    </div>
                )}

                {/* Playing State */}
                {state === 'playing' && currentNode && (
                    <div className="space-y-6 bg-white shadow-md p-8 rounded-lg">
                        <div>
                            <h2 className="mb-4 font-bold text-gray-900 text-xl">
                                {currentNode.description}
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {currentNode.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSelectOption(option)}
                                    className="bg-white hover:bg-blue-50 p-4 border-2 border-gray-300 hover:border-blue-500 rounded-lg w-full text-left transition-all"
                                >
                                    <p className="text-gray-900">{option.description}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Feedback State */}
                {state === 'feedback' && selectedOption && (
                    <div className="space-y-6 bg-white shadow-md p-8 rounded-lg">
                        <div
                            className={`flex items-start gap-4 rounded-lg p-6 ${selectedOption.correct
                                ? 'bg-green-50'
                                : 'bg-red-50'
                                }`}
                        >
                            <div className="shrink-0">
                                {selectedOption.correct ? (
                                    <CheckCircle
                                        size={32}
                                        className="text-green-600"
                                    />
                                ) : (
                                    <XCircle
                                        size={32}
                                        className="text-red-600"
                                    />
                                )}
                            </div>
                            <div className="flex-1">
                                <h3
                                    className={`mb-2 text-lg font-bold ${selectedOption.correct
                                        ? 'text-green-900'
                                        : 'text-red-900'
                                        }`}
                                >
                                    {selectedOption.correct ? 'Acertou! ✓' : 'Errou! ✗'}
                                </h3>
                                <p
                                    className={`whitespace-pre-wrap ${selectedOption.correct
                                        ? 'text-green-800'
                                        : 'text-red-800'
                                        }`}
                                >
                                    {selectedOption.feedback}
                                </p>
                            </div>
                        </div>

                        <div className="flex sm:flex-row flex-col justify-end gap-3 pt-4">
                            {selectedOption.correct ? (
                                <Button
                                    onClick={handleContinueToNextNode}
                                    icon={ArrowRight} // Seta para a direita faz mais sentido para avançar!
                                    text={isLastNode ? 'Finalizar' : 'Próxima Pergunta'}
                                    variant="success"
                                />
                            ) : (
                                <>
                                    <Button
                                        onClick={handleRetryNode}
                                        icon={RotateCcw}
                                        text="Tentar Novamente"
                                        variant="warning"
                                    />
                                    <Button
                                        onClick={handleExitSimulation}
                                        icon={LogOut}
                                        text="Sair da Simulação"
                                        variant="secondary"
                                    />
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* Finished State */}
                {state === 'finished' && (
                    <div className="space-y-8 bg-white shadow-md p-8 rounded-lg">
                        <div>
                            <h2 className="flex items-center gap-3 mb-4 font-bold text-green-900 text-2xl">
                                <CheckCircle size={32} className="text-green-600" />
                                Simulação Concluída!
                            </h2>
                            <p className="text-gray-700 text-lg text-justify leading-relaxed whitespace-pre-wrap">
                                {scenario.descriptionEnd}
                            </p>
                        </div>
                        <div className='flex justify-end'>
                            <Button
                                onClick={handleFinish}
                                icon={ArrowRight}
                                text="Voltar para Simulações"
                                variant="primary"
                            />
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
