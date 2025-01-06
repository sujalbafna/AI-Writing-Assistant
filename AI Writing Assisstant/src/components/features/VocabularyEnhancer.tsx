import React from 'react';
import { BookOpen } from 'lucide-react';
import { enhanceVocabulary } from '../../utils/vocabulary';

interface VocabularyEnhancerProps {
  text: string;
}

export default function VocabularyEnhancer({ text }: VocabularyEnhancerProps) {
  const suggestions = enhanceVocabulary(text);

  if (suggestions.length === 0) return null;

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center space-x-2 mb-4">
        <BookOpen className="text-emerald-500" size={20} />
        <h2 className="text-xl font-semibold">Vocabulary Suggestions</h2>
      </div>
      
      <div className="space-y-3">
        {suggestions.map((suggestion, index) => (
          <div 
            key={`${suggestion.word}-${index}`}
            className="p-3 bg-emerald-50 rounded-lg"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-emerald-700">{suggestion.word}</span>
              <span className="text-xs text-emerald-600 px-2 py-1 bg-emerald-100 rounded-full">
                {suggestion.complexity}
              </span>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {suggestion.synonyms.map((synonym, i) => (
                <span 
                  key={i}
                  className="text-sm px-2 py-1 bg-white rounded-md text-emerald-600"
                >
                  {synonym}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}