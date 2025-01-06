import React from 'react';
import { HighlightInfo } from '../../utils/highlightTypes';

interface LegendItemProps {
  highlight: HighlightInfo;
}

export default function LegendItem({ highlight }: LegendItemProps) {
  return (
    <div className="flex items-center space-x-2">
      <div className={`w-4 h-4 rounded ${highlight.color}`} />
      <span className="text-sm text-gray-600">{highlight.description}</span>
    </div>
  );
}