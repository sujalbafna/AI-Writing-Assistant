import type { HighlightType } from './highlightTypes';

export interface HighlightRange {
  start: number;
  end: number;
  type: HighlightType;
  suggestion: string;
}

export const findHighlightRanges = (
  text: string,
  pattern: RegExp,
  type: HighlightType,
  suggestion: string
): HighlightRange[] => {
  const ranges: HighlightRange[] = [];
  let match;
  
  while ((match = pattern.exec(text)) !== null) {
    ranges.push({
      start: match.index,
      end: match.index + match[0].length,
      type,
      suggestion
    });
  }
  
  return ranges;
};