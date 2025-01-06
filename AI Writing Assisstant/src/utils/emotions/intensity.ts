/**
 * Calculates the intensity of an emotion based on the score and word count
 * @param score The raw emotion score
 * @param wordCount Total number of words in the text
 * @returns Normalized intensity value between 0 and 100
 */
export function calculateIntensity(score: number, wordCount: number): number {
  if (wordCount === 0) return 0;
  
  // Calculate percentage of emotional words
  const intensityRatio = score / wordCount;
  
  // Normalize to 0-100 scale with a logarithmic curve
  // This ensures small changes are more visible in the lower range
  const normalizedIntensity = Math.min(
    Math.round((Math.log1p(intensityRatio * 10) / Math.log1p(1)) * 100),
    100
  );
  
  return normalizedIntensity;
}