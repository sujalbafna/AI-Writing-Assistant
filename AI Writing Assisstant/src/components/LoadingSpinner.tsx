import React from 'react';
import { Wand2 } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center space-x-2 text-blue-500">
      <Wand2 className="animate-spin" size={20} />
      <span>Analyzing your text...</span>
    </div>
  );
}