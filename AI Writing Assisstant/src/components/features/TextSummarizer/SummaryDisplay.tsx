import React from 'react';
import type { SummaryResult } from '../../../utils/summarizer/types';

interface SummaryDisplayProps {
  result: SummaryResult;
}

export default function SummaryDisplay({ result }: SummaryDisplayProps) {
  return (
    <div className="space-y-4">
      <div className="prose dark:prose-invert">
        <p className="text-gray-700 dark:text-gray-300">{result.summary}</p>
      </div>
      
      {result.keyPoints.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Key Points
          </h3>
          <ul className="list-disc list-inside space-y-1">
            {result.keyPoints.map((point, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="text-xs text-gray-500 dark:text-gray-400">
        Summarized from {result.originalLength} words to {result.wordCount} words
      </div>
    </div>
  );
}