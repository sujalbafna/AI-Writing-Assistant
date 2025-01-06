import { patterns } from './textPatterns';
import { HighlightRange, findHighlightRanges } from './highlightText';
import { analyzeGrammar } from './grammarChecker';
import { checkSpelling } from './spellChecker';

export interface AnalysisResult {
  suggestions: string[];
  highlights: HighlightRange[];
  grammarErrors: string[];
}

export const analyzeText = (text: string): AnalysisResult => {
  const highlights: HighlightRange[] = [];
  const suggestions: string[] = [];
  const grammarErrors: string[] = [];

  // Grammar analysis
  const grammarIssues = analyzeGrammar(text);
  grammarErrors.push(...grammarIssues);

  // Spelling check
  const spellingErrors = checkSpelling(text);
  if (spellingErrors.length > 0) {
    suggestions.push("Check your spelling and fix any typos");
    highlights.push(...spellingErrors.map(error => ({
      start: error.start,
      end: error.end,
      type: 'spelling' as const,
      suggestion: `Possible correction: ${error.suggestions.join(', ')}`
    })));
  }

  // Analyze passive voice
  const passiveRanges = findHighlightRanges(
    text,
    patterns.passiveVoice,
    'passive',
    'Use active voice for stronger impact'
  );
  if (passiveRanges.length > 0) {
    suggestions.push("Consider using active voice instead of passive voice for stronger impact");
    highlights.push(...passiveRanges);
  }

  // Analyze complex words
  const complexRanges = findHighlightRanges(
    text,
    patterns.complexWords,
    'complex',
    'Use simpler alternatives'
  );
  if (complexRanges.length > 0) {
    suggestions.push("Replace complex words with simpler alternatives for clarity");
    highlights.push(...complexRanges);
  }

  // Analyze redundant phrases
  const redundantRanges = findHighlightRanges(
    text,
    patterns.redundantPhrases,
    'redundant',
    'Remove redundancy'
  );
  if (redundantRanges.length > 0) {
    suggestions.push("Remove redundant phrases to make your writing more concise");
    highlights.push(...redundantRanges);
  }

  return {
    suggestions: suggestions.slice(0, 10),
    highlights,
    grammarErrors
  };
};