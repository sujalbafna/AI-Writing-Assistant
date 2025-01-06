import React from 'react';
import { FilePlus } from 'lucide-react';

interface CreateDocumentButtonProps {
  onClick: () => void;
  className?: string;
}

export default function CreateDocumentButton({ onClick, className = '' }: CreateDocumentButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${className}`}
    >
      <FilePlus size={20} />
      <span>Create New</span>
    </button>
  );
}