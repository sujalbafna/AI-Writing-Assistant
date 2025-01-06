export interface WritingMetrics {
  wordCount: number;
  characterCount: number;
  sentenceCount: number;
  paragraphCount: number;
  avgWordLength: number;
  avgSentenceLength: number;
  readingTime: number;
  readabilityScore: number;
  passiveVoiceCount: number;
  passiveVoicePercentage: number;
}

export const calculateMetrics = (text: string): WritingMetrics => {
  const words = text.trim().split(/\s+/);
  const characters = text.replace(/\s/g, '').length;
  const sentences = text.split(/[.!?]+/).filter(Boolean);
  const paragraphs = text.split(/\n\s*\n/).filter(Boolean);
  const avgWordLen = words.reduce((sum, word) => sum + word.length, 0) / (words.length || 1);
  const avgSentenceLen = words.length / (sentences.length || 1);
  
  // Calculate reading time (average reading speed: 200 words per minute)
  const readingTime = Math.ceil(words.length / 200);
  
  // Basic Flesch-Kincaid Grade Level calculation
  const syllables = countSyllables(text);
  const readability = 0.39 * (words.length / (sentences.length || 1)) + 11.8 * (syllables / (words.length || 1)) - 15.59;
  
  const passiveCount = (text.match(/\b(am|is|are|was|were|be|been|being)\s+\w+ed\b/gi) || []).length;
  
  return {
    wordCount: words.length,
    characterCount: characters,
    sentenceCount: sentences.length,
    paragraphCount: paragraphs.length,
    avgWordLength: avgWordLen,
    avgSentenceLength: avgSentenceLen,
    readingTime,
    readabilityScore: readability,
    passiveVoiceCount: passiveCount,
    passiveVoicePercentage: words.length > 0 ? (passiveCount / words.length) * 100 : 0
  };
};

const countSyllables = (text: string): number => {
  const words = text.toLowerCase().split(/\s+/);
  return words.reduce((count, word) => {
    return count + word.replace(/[^aeiouy]/g, '')
      .replace(/[aeiouy]+/g, '1')
      .split('')
      .filter(char => char === '1').length || 1;
  }, 0);
};