import { scoreSentences } from './scoring';
import { extractKeyPoints, formatKeyPoints } from './keyPoints';
import type { SummaryOptions, SummaryResult } from './types';

export function summarizeText(text: string, options: SummaryOptions): SummaryResult {
  const { style = 'concise', maxLength = 200 } = options;
  
  // Score and sort sentences
  const scoredSentences = scoreSentences(text);
  const sortedSentences = [...scoredSentences].sort((a, b) => b.score - a.score);
  
  // Extract key points
  const keyPoints = formatKeyPoints(extractKeyPoints(scoredSentences));
  
  // Select sentences for summary based on style
  const selectedSentences = sortedSentences.slice(
    0,
    style === 'concise' ? 2 : 4
  );
  
  // Reconstruct summary in original order
  const summaryText = scoredSentences
    .filter(sentence => selectedSentences.includes(sentence))
    .map(({ sentence }) => sentence)
    .join(' ');
  
  // Trim to max length if needed
  const summary = summaryText.length > maxLength
    ? summaryText.slice(0, maxLength).replace(/[^.!?]+$/, '') + '...'
    : summaryText;

  return {
    summary,
    keyPoints,
    wordCount: summary.split(/\s+/).length,
    originalLength: text.split(/\s+/).length
  };
}