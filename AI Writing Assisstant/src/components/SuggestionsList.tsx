import React from 'react';
import { Wand2 } from 'lucide-react';

interface SuggestionsListProps {
  suggestions: string[];
}

export default function SuggestionsList({ suggestions }: SuggestionsListProps) {
  // Only show top 3 suggestions
  const topSuggestions = suggestions.slice(0, 3);
  
  if (topSuggestions.length === 0) return null;

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Wand2 className="mr-2 text-blue-500" size={20} />
        Writing Suggestions
      </h2>
      <ul className="space-y-3">
        {topSuggestions.map((suggestion, index) => (
          <li
            key={index}
            className="flex items-start space-x-2 text-gray-700 p-2 hover:bg-gray-50 rounded-md transition-colors"
          >
            <span>• {suggestion}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}