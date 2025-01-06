import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlidePanelProps {
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export default function SlidePanel({ isOpen, onToggle, children }: SlidePanelProps) {
  return (
    <div 
      className={`fixed top-0 right-0 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ width: '320px' }}
    >
      <button
        onClick={onToggle}
        className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white p-2 rounded-l-lg shadow-lg"
        aria-label={isOpen ? 'Close panel' : 'Open panel'}
      >
        {isOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>
      <div className="h-full overflow-y-auto p-4">
        {children}
      </div>
    </div>
  );
}