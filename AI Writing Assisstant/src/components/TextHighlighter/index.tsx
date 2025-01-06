import React, { useRef, useEffect, useState } from 'react';
import type { HighlightRange } from '../../utils/highlightText';
import Overlay from './Overlay';

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
  const [scroll, setScroll] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const handleScroll = () => {
      setScroll({
        top: textarea.scrollTop,
        left: textarea.scrollLeft
      });
    };

    textarea.addEventListener('scroll', handleScroll);
    return () => textarea.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-full">
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => onChange(e.target.value)}
        className={`relative w-full h-full p-4 resize-none outline-none font-mono ${className}`}
        placeholder={placeholder}
        style={{ 
          color: 'black',
          caretColor: 'black',
          background: 'transparent',
          zIndex: 2,
          position: 'relative'
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <Overlay
          text={text}
          highlights={highlights}
          scrollTop={scroll.top}
          scrollLeft={scroll.left}
        />
      </div>
    </div>
  );
}