export type WritingStyle = 'professional' | 'casual' | 'academic' | 'creative';

interface StyleSuggestion {
  original: string;
  suggestion: string;
  reason: string;
}

const stylePatterns = {
  professional: {
    avoid: /\b(stuff|things|got|gonna|wanna|yeah)\b/gi,
    prefer: new Map([
      ['very', 'significantly'],
      ['good', 'excellent'],
      ['bad', 'unfavorable'],
      ['big', 'substantial']
    ])
  },
  academic: {
    avoid: /\b(basically|kind of|sort of|a lot)\b/gi,
    prefer: new Map([
      ['show', 'demonstrate'],
      ['help', 'facilitate'],
      ['use', 'utilize'],
      ['about', 'approximately']
    ])
  }
};

export const analyzeStyle = (text: string, targetStyle: WritingStyle): StyleSuggestion[] => {
  const suggestions: StyleSuggestion[] = [];
  const patterns = stylePatterns[targetStyle as keyof typeof stylePatterns];
  
  if (!patterns) return suggestions;

  // Check for words to avoid
  let match;
  while ((match = patterns.avoid.exec(text)) !== null) {
    suggestions.push({
      original: match[0],
      suggestion: `Consider removing or replacing "${match[0]}"`,
      reason: `This term is too ${targetStyle === 'professional' ? 'casual' : 'informal'} for ${targetStyle} writing`
    });
  }

  // Check for preferred word replacements
  patterns.prefer.forEach((preferred, original) => {
    const regex = new RegExp(`\\b${original}\\b`, 'gi');
    if (regex.test(text)) {
      suggestions.push({
        original: original,
        suggestion: preferred,
        reason: `"${preferred}" is more appropriate for ${targetStyle} writing`
      });
    }
  });

  return suggestions;
};