import React from 'react';
import { AlertTriangle } from 'lucide-react';
import type { HighlightRange } from '../utils/highlightText';
import { highlightConfig } from '../utils/highlightTypes';

interface HighlightsListProps {
  text: string;
  highlights: HighlightRange[];
}

export default function HighlightsList({ text, highlights }: HighlightsListProps) {
  const spellingHighlights = highlights.filter(h => h.type === 'spelling');
  const otherHighlights = highlights.filter(h => h.type !== 'spelling');

  return (
    <div className="space-y-6">
      {/* Spelling Section - Always shown */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <AlertTriangle className="mr-2 text-red-500" size={20} />
          Spelling Check
        </h2>
        
        <div className="space-y-3">
          {spellingHighlights.length > 0 ? (
            spellingHighlights.map((highlight, index) => {
              const highlightedText = text.slice(highlight.start, highlight.end);
              const config = highlightConfig[highlight.type];
              
              return (
                <div 
                  key={`spelling-${index}`}
                  className="p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-start space-x-2">
                    <div className={`w-2 h-2 mt-2 rounded-full ${config.color}`} />
                    <div className="flex-1">
                      <p className="text-gray-700">
                        <span className="font-medium">"{highlightedText}"</span>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {highlight.suggestion}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center text-gray-500 py-4">
              No spelling errors found. Great job!
            </div>
          )}
        </div>
      </div>

      {/* Other Highlights */}
      {otherHighlights.length > 0 && (
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <AlertTriangle className="mr-2 text-yellow-500" size={20} />
            Text Highlights
          </h2>
          
          <div className="space-y-3">
            {otherHighlights.map((highlight, index) => {
              const highlightedText = text.slice(highlight.start, highlight.end);
              const config = highlightConfig[highlight.type];
              
              return (
                <div 
                  key={`highlight-${index}`}
                  className="p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-start space-x-2">
                    <div className={`w-2 h-2 mt-2 rounded-full ${config.color}`} />
                    <div className="flex-1">
                      <p className="text-gray-700">
                        <span className="font-medium">"{highlightedText}"</span>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {highlight.suggestion}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {config.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}