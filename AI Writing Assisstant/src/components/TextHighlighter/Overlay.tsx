import React from 'react';
import type { HighlightRange } from '../../utils/highlightText';
import { highlightConfig } from '../../utils/highlightTypes';

interface OverlayProps {
  text: string;
  highlights: HighlightRange[];
  scrollTop: number;
  scrollLeft: number;
}

export default function Overlay({ text, highlights, scrollTop, scrollLeft }: OverlayProps) {
  const renderHighlights = () => {
    let lastIndex = 0;
    const parts: JSX.Element[] = [];

    const sortedHighlights = [...highlights].sort((a, b) => a.start - b.start);

    sortedHighlights.forEach((highlight, index) => {
      if (highlight.start > lastIndex) {
        parts.push(
          <span key={`text-${index}`} className="text-transparent">
            {text.slice(lastIndex, highlight.start)}
          </span>
        );
      }

      parts.push(
        <mark
          key={`highlight-${index}`}
          className={`${highlightConfig[highlight.type].color} text-transparent`}
          title={highlight.suggestion}
        >
          {text.slice(highlight.start, highlight.end)}
        </mark>
      );

      lastIndex = highlight.end;
    });

    if (lastIndex < text.length) {
      parts.push(
        <span key="text-end" className="text-transparent">
          {text.slice(lastIndex)}
        </span>
      );
    }

    return parts;
  };

  return (
    <div
      className="w-full h-full p-4 whitespace-pre-wrap break-words select-none font-mono"
      style={{ 
        transform: `translate(${-scrollLeft}px, ${-scrollTop}px)`
      }}
    >
      {renderHighlights()}
    </div>
  );
}