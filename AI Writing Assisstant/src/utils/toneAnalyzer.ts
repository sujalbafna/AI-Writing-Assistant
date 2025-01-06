export type ToneType = 'formal' | 'friendly' | 'persuasive' | 'empathetic';

interface ToneAdjustment {
  pattern: RegExp;
  replacement: string;
  context?: string;
}

const tonePatterns: Record<ToneType, ToneAdjustment[]> = {
  formal: [
    { pattern: /\b(hi|hey|hello)\b/gi, replacement: 'Dear', context: 'greeting' },
    { pattern: /\b(thanks|thx)\b/gi, replacement: 'Thank you', context: 'gratitude' },
    { pattern: /\b(want|wanna)\b/gi, replacement: 'would like', context: 'request' },
    { pattern: /\b(ok|okay)\b/gi, replacement: 'acceptable', context: 'agreement' },
    { pattern: /\b(sorry)\b/gi, replacement: 'I apologize', context: 'apology' },
    { pattern: /\b(no problem|np)\b/gi, replacement: 'You are welcome', context: 'response' },
    { pattern: /\b(can't|cannot)\b/gi, replacement: 'is unable to', context: 'limitation' },
    { pattern: /\b(gonna|going to)\b/gi, replacement: 'will', context: 'future action' },
    { pattern: /\b(I'll|I will)\b/gi, replacement: 'I shall', context: 'future commitment' },
    { pattern: /\b(by the way|btw)\b/gi, replacement: 'Incidentally', context: 'informational' }
  ],
  friendly: [
    { pattern: /\bDear\b/gi, replacement: 'Hi', context: 'greeting' },
    { pattern: /\bregards\b/gi, replacement: 'Cheers', context: 'closing' },
    { pattern: /\b(I regret to inform|I am sorry to inform)\b/gi, replacement: "I'm sorry to say", context: 'apology' },
    { pattern: /\bformally\b/gi, replacement: 'officially', context: 'description' },
    { pattern: /\bplease\b/gi, replacement: 'kindly', context: 'request' },
    { pattern: /\bI appreciate\b/gi, replacement: 'Thanks a lot', context: 'gratitude' },
    { pattern: /\bimportant\b/gi, replacement: 'key', context: 'priority' },
    { pattern: /\b(we should)\b/gi, replacement: "let's", context: 'suggestion' },
    { pattern: /\b(I hope)\b/gi, replacement: 'Fingers crossed', context: 'expectation' }
  ],
  persuasive: [
    { pattern: /\bI think\b/gi, replacement: 'I firmly believe', context: 'opinion' },
    { pattern: /\bmight\b/gi, replacement: 'will', context: 'confidence' },
    { pattern: /\bcould\b/gi, replacement: 'can', context: 'capability' },
    { pattern: /\bshould\b/gi, replacement: 'must', context: 'necessity' },
    { pattern: /\bmaybe\b/gi, replacement: 'certainly', context: 'confidence' },
    { pattern: /\bplease\b/gi, replacement: 'kindly consider', context: 'request' },
    { pattern: /\bimportant\b/gi, replacement: 'critical', context: 'emphasis' },
    { pattern: /\bhelpful\b/gi, replacement: 'essential', context: 'value' },
    { pattern: /\bpossible\b/gi, replacement: 'achievable', context: 'feasibility' },
    { pattern: /\bbeneficial\b/gi, replacement: 'advantageous', context: 'persuasion' }
  ],
  empathetic: [
    { pattern: /\bunderstand\b/gi, replacement: 'empathize with', context: 'connection' },
    { pattern: /\bmust\b/gi, replacement: 'might want to', context: 'suggestion' },
    { pattern: /\bshould\b/gi, replacement: 'could consider', context: 'advice' },
    { pattern: /\bsorry\b/gi, replacement: 'I deeply regret', context: 'apology' },
    { pattern: /\b(I know|I realize)\b/gi, replacement: 'I truly understand', context: 'connection' },
    { pattern: /\bproblem\b/gi, replacement: 'challenge', context: 'positivity' },
    { pattern: /\bfix\b/gi, replacement: 'resolve', context: 'solution' },
    { pattern: /\bconcern\b/gi, replacement: 'worry', context: 'understanding' },
    { pattern: /\bhard\b/gi, replacement: 'difficult', context: 'empathy' },
    { pattern: /\bneed\b/gi, replacement: 'may require', context: 'suggestion' }
  ]
};

export const convertTone = (text: string, targetTone: ToneType): string => {
  let convertedText = text;
  const adjustments = tonePatterns[targetTone];

  adjustments.forEach(({ pattern, replacement }) => {
    convertedText = convertedText.replace(pattern, replacement);
  });

  return convertedText;
};
