import React, { useState } from 'react';
import { FileText, ChevronDown } from 'lucide-react';
import { summarizeText, SummaryOptions } from '../../utils/summarizer';

interface TextSummarizerProps {
  text: string;
}

export default function TextSummarizer({ text }: TextSummarizerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState<'concise' | 'detailed'>('concise');
  
  const summary = summarizeText(text, { style });

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          <FileText className="text-indigo-500" size={20} />
          <h2 className="text-xl font-semibold">Summary</h2>
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
              className="text-sm border rounded-md px-2 py-1"
            >
              <option value="concise">Concise</option>
              <option value="detailed">Detailed</option>
            </select>
          </div>
          <p className="text-gray-700">{summary}</p>
        </div>
      )}
    </div>
  );
}