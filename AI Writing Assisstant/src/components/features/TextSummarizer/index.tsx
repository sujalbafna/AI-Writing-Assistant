import React, { useState } from 'react';
import { FileText, ChevronDown } from 'lucide-react';
import { summarizeText } from '../../../utils/summarizer';
import SummaryDisplay from './SummaryDisplay';
import type { SummaryOptions } from '../../../utils/summarizer/types';

interface TextSummarizerProps {
  text: string;
}

export default function TextSummarizer({ text }: TextSummarizerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState<'concise' | 'detailed'>('concise');
  
  const summaryResult = summarizeText(text, { style });

  return (
    <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-lg">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          <FileText className="text-indigo-500" size={20} />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Summary</h2>
        </div>
        <ChevronDown 
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          size={20} 
        />
      </div>
      
      {isOpen && (
        <div className="mt-4 space-y-4">
          <div className="flex justify-end">
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value as 'concise' | 'detailed')}
              className="text-sm border rounded-md px-2 py-1 bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-dark-600"
            >
              <option value="concise">Concise</option>
              <option value="detailed">Detailed</option>
            </select>
          </div>
          <SummaryDisplay result={summaryResult} />
        </div>
      )}
    </div>
  );
}