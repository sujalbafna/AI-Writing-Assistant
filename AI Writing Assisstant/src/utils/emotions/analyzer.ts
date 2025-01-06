import { emotionPatterns } from './patterns';
import { emotionSuggestions } from './suggestions';
import { calculateIntensity } from './intensity';
import type { EmotionAnalysis } from './types';

export function analyzeEmotion(text: string): EmotionAnalysis {
  const wordCount = text.trim().split(/\s+/).length;
  if (wordCount === 0) {
    return {
      primary: 'neutral',
      intensity: 0,
      suggestions: emotionSuggestions.neutral
    };
  }

  const emotionScores = new Map<string, number>();
  let maxScore = 0;
  let primaryEmotion = 'neutral';

  // Calculate emotion scores
  Object.entries(emotionPatterns).forEach(([emotion, pattern]) => {
    const matches = text.match(pattern.words) || [];
    const score = matches.length * pattern.weight;
    emotionScores.set(emotion, score);

    if (score > maxScore) {
      maxScore = score;
      primaryEmotion = emotion;
    }
  });

  return {
    primary: primaryEmotion,
    intensity: calculateIntensity(maxScore, wordCount),
    suggestions: emotionSuggestions[primaryEmotion] || emotionSuggestions.neutral
  };
}