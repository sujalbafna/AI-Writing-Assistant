import { SentenceScore } from './types';

// Score sentences based on their importance
export function scoreSentences(text: string): SentenceScore[] {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
  const wordFrequency = calculateWordFrequency(text);

  return sentences.map(sentence => ({
    sentence: sentence.trim(),
    score: calculateSentenceScore(sentence, wordFrequency)
  }));
}

function calculateWordFrequency(text: string): Map<string, number> {
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  const frequency = new Map<string, number>();

  words.forEach(word => {
    frequency.set(word, (frequency.get(word) || 0) + 1);
  });

  return frequency;
}

function calculateSentenceScore(sentence: string, wordFrequency: Map<string, number>): number {
  const words = sentence.toLowerCase().match(/\b\w+\b/g) || [];
  const score = words.reduce((sum, word) => sum + (wordFrequency.get(word) || 0), 0);
  return score / words.length;
}