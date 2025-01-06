import { scoreSentences } from './scoring';
import { SentenceScore } from './types';

export function extractKeyPoints(sentences: SentenceScore[]): string[] {
  return sentences
    .filter(({ score }) => score > 1.5) // Threshold for key points
    .map(({ sentence }) => sentence)
    .slice(0, 3); // Limit to top 3 key points
}

export function formatKeyPoints(points: string[]): string[] {
  return points.map(point => {
    // Clean and format the point
    const cleaned = point.trim()
      .replace(/^[,\s]+/, '') // Remove leading commas and spaces
      .replace(/\s+/g, ' '); // Normalize spaces
    
    // Capitalize first letter if needed
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  });
}