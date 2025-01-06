import React from 'react';
import { Info } from 'lucide-react';
import { highlightConfig } from '../../utils/highlightTypes';
import LegendItem from './LegendItem';

export default function HighlightLegend() {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex items-center space-x-2 mb-3">
        <Info size={18} className="text-gray-600" />
        <h3 className="font-semibold text-gray-700">Highlight Guide</h3>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {Object.values(highlightConfig).map((highlight) => (
          <LegendItem key={highlight.type} highlight={highlight} />
        ))}
      </div>
    </div>
  );
}