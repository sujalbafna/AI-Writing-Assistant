import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface GrammarErrorsProps {
  errors: string[];
}

export default function GrammarErrors({ errors }: GrammarErrorsProps) {
  if (errors.length === 0) return null;

  return (
    <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-900 dark:text-gray-100">
        <AlertTriangle className="mr-2 text-yellow-500" size={20} />
        Grammar Check
      </h2>
      
      <div className="space-y-2">
        {errors.map((error, index) => (
          <div
            key={index}
            className="flex items-start space-x-2 p-2 rounded-md bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200"
          >
            <AlertTriangle size={16} className="mt-1 flex-shrink-0" />
            <span>{error}</span>
          </div>
        ))}
      </div>
    </div>
  );
}