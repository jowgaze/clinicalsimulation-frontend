'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="right-8 bottom-8 z-50 fixed flex justify-center items-center bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-lg hover:shadow-xl rounded-full w-16 h-16 font-bold text-white transition-colors"
      title="Voltar ao Topo"
      aria-label="Voltar ao Topo"
    >
      <ArrowUp size={24} />
    </button>
  );
}