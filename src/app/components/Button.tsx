import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  icon?: LucideIcon;
  href?: string;
  variant?: 'primary' | 'secondary' | 'text' | 'success' | 'warning';
  className?: string;
}

export default function Button({
  text,
  href,
  icon: Icon, // 1. Renomeamos para letra maiúscula para o React entender como Componente
  onClick,
  variant = 'primary',
  className = '',
}: ButtonProps) {

  // 2. Trocamos inline-block por inline-flex com gap-2 para alinhar ícone e texto perfeitamente
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400',
    text: 'bg-transparent text-blue-600 hover:bg-blue-50 hover:text-blue-700 active:bg-blue-100',
    success: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800',
    warning: 'bg-yellow-600 text-white hover:bg-yellow-700 active:bg-yellow-800',
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {/* 3. Ícone adicionado na versão de Link */}
        {Icon && <Icon size={20} />}
        {text}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* 4. Usando sintaxe JSX padrão */}
      {Icon && <Icon size={20} />}
      {text}
    </button>
  );
}