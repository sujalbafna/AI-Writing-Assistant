import React from 'react';
import { HighlightRange } from '../../utils/highlightText';
import { highlightConfig } from '../../utils/highlightTypes';

interface HighlightedTextProps {
  text: string;
  highlights: HighlightRange[];
}

export default function HighlightedText({ text, highlights }: HighlightedTextProps) {
  const renderHighlights = () => {
    let lastIndex = 0;
    const parts: JSX.Element[] = [];

    const sortedHighlights = [...highlights].sort((a, b) => a.start - b.start);

    sortedHighlights.forEach((highlight, index) => {
      if (highlight.start > lastIndex) {
        parts.push(
          <span key={`text-${index}`}>
            {text.slice(lastIndex, highlight.start)}
          </span>
        );
      }

      const config = highlightConfig[highlight.type];
      if (config) {
        parts.push(
          <mark
            key={`highlight-${index}`}
            className={`${config.color} cursor-help`}
            title={highlight.suggestion}
          >
            {text.slice(highlight.start, highlight.end)}
          </mark>
        );
      }

      lastIndex = highlight.end;
    });

    if (lastIndex < text.length) {
      parts.push(
        <span key="text-end">{text.slice(lastIndex)}</span>
      );
    }

    return parts;
  };

  return <>{renderHighlights()}</>;
}