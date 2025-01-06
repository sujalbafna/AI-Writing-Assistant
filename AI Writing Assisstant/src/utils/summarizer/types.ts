export interface SummaryOptions {
  style: 'concise' | 'detailed';
  maxLength?: number;
}

export interface SentenceScore {
  sentence: string;
  score: number;
}

export interface SummaryResult {
  summary: string;
  keyPoints: string[];
  wordCount: number;
  originalLength: number;
}