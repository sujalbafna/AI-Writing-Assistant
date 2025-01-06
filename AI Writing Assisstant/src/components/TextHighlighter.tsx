import React, { useRef, useEffect } from 'react';
import type { HighlightRange } from '../utils/highlightText';
import { highlightConfig } from '../utils/highlightTypes';

interface TextHighlighterProps {
  text: string;
  highlights: HighlightRange[];
  onChange: (text: string) => void;
  className?: string;
  placeholder?: string;
}

export default function TextHighlighter({
  text,
  highlights,
  onChange,
  className = '',
  placeholder
}: TextHighlighterProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textareaRef.current && overlayRef.current) {
      const handleScroll = () => {
        if (textareaRef.current && overlayRef.current) {
          overlayRef.current.scrollTop = textareaRef.current.scrollTop;
          overlayRef.current.scrollLeft = textareaRef.current.scrollLeft;
        }
      };

      textareaRef.current.addEventListener('scroll', handleScroll);
      return () => textareaRef.current?.removeEventListener('scroll', handleScroll);
    }
  }, []);

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

      parts.push(
        <mark
          key={`highlight-${index}`}
          className={`${highlightConfig[highlight.type].color} cursor-help`}
          title={highlight.suggestion}
        >
          {text.slice(highlight.start, highlight.end)}
        </mark>
      );

      lastIndex = highlight.end;
    });

    if (lastIndex < text.length) {
      parts.push(
        <span key="text-end">{text.slice(lastIndex)}</span>
      );
    }

    return parts;
  };

  return (
    <div className="relative">
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none whitespace-pre-wrap break-words p-4 overflow-hidden"
        aria-hidden="true"
      >
        {renderHighlights()}
      </div>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => onChange(e.target.value)}
        className={`relative bg-transparent ${className}`}
        placeholder={placeholder}
        style={{ WebkitTextFillColor: 'transparent' }}
      />
    </div>
  );
}