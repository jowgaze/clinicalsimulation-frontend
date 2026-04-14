import { Plus } from 'lucide-react';

interface FloatingActionButtonProps {
  onClick: () => void;
  label?: string;
}

export default function FloatingActionButton({
  onClick,
  label = 'Adicionar',
}: FloatingActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="right-8 bottom-8 z-50 fixed flex justify-center items-center bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-lg hover:shadow-xl rounded-full w-16 h-16 font-bold text-white text-3xl transition-colors"
      title={label}
      aria-label={label}
    >
      <Plus size={24} />
    </button>
  );
}
