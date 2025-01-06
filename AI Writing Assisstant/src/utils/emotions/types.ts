export interface EmotionAnalysis {
  primary: string;
  intensity: number;
  suggestions: string[];
}

export interface EmotionPattern {
  words: RegExp;
  weight: number;
}

export type EmotionPatterns = Record<string, EmotionPattern>;