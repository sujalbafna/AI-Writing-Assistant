import React from 'react';
import { Info } from 'lucide-react';
import { highlightConfig } from '../utils/highlightTypes';

export default function HighlightLegend() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <div className="flex items-center space-x-2 mb-3">
        <Info size={18} className="text-gray-600" />
        <h3 className="font-semibold text-gray-700">Highlight Guide</h3>
      </div>
      <div className="space-y-2">
        {Object.values(highlightConfig).map((highlight) => (
          <div key={highlight.type} className="flex items-center space-x-2">
            <div className={`w-4 h-4 rounded ${highlight.color}`} />
            <span className="text-sm text-gray-600">{highlight.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}