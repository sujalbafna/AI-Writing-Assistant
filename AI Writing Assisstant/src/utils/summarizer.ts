export interface SummaryOptions {
  maxLength?: number;
  style?: 'concise' | 'detailed';
}

export function summarizeText(text: string, options: SummaryOptions = {}): string {
  const { maxLength = 200, style = 'concise' } = options;
  
  // Split into sentences and paragraphs
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
  const paragraphs = text.split(/\n\s*\n/);
  
  // Extract key sentences based on position and length
  const keyPoints = sentences
    .filter(sentence => {
      // Keep first and last sentences of paragraphs
      const isTopicSentence = paragraphs.some(p => p.trim().startsWith(sentence.trim()));
      const isConcludingSentence = paragraphs.some(p => p.trim().endsWith(sentence.trim()));
      return isTopicSentence || isConcludingSentence;
    })
    .slice(0, style === 'concise' ? 3 : 5)
    .join(' ');

  return keyPoints.slice(0, maxLength) + (keyPoints.length > maxLength ? '...' : '');
}