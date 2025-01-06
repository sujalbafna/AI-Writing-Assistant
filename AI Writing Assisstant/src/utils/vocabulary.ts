interface SynonymSuggestion {
  word: string;
  synonyms: string[];
  complexity: 'simple' | 'advanced';
}

export function enhanceVocabulary(text: string): SynonymSuggestion[] {
  const words = text.match(/\b\w+\b/g) || [];
  const suggestions: SynonymSuggestion[] = [];

  // Expanded synonym map
  const synonymMap = new Map([
    ['good', { synonyms: ['great', 'excellent', 'exceptional', 'outstanding'], complexity: 'advanced' }],
    ['bad', { synonyms: ['poor', 'unfavorable', 'suboptimal', 'inadequate'], complexity: 'advanced' }],
    ['big', { synonyms: ['large', 'substantial', 'considerable', 'significant'], complexity: 'advanced' }],
    ['small', { synonyms: ['tiny', 'compact', 'minute', 'modest'], complexity: 'advanced' }],
    ['fast', { synonyms: ['quick', 'rapid', 'swift', 'speedy'], complexity: 'simple' }],
    ['slow', { synonyms: ['sluggish', 'lethargic', 'unhurried', 'gradual'], complexity: 'simple' }],
    ['happy', { synonyms: ['joyful', 'cheerful', 'content', 'elated'], complexity: 'advanced' }],
    ['sad', { synonyms: ['unhappy', 'downcast', 'mournful', 'melancholy'], complexity: 'advanced' }],
    ['important', { synonyms: ['crucial', 'significant', 'essential', 'vital'], complexity: 'advanced' }],
    ['hard', { synonyms: ['difficult', 'challenging', 'arduous', 'demanding'], complexity: 'advanced' }],
    ['easy', { synonyms: ['simple', 'effortless', 'straightforward', 'uncomplicated'], complexity: 'simple' }],
    ['strong', { synonyms: ['powerful', 'robust', 'sturdy', 'forceful'], complexity: 'advanced' }],
    ['weak', { synonyms: ['fragile', 'feeble', 'delicate', 'vulnerable'], complexity: 'advanced' }],
    ['beautiful', { synonyms: ['gorgeous', 'stunning', 'lovely', 'exquisite'], complexity: 'advanced' }],
    ['ugly', { synonyms: ['unattractive', 'unsightly', 'hideous', 'unappealing'], complexity: 'advanced' }],
    ['smart', { synonyms: ['intelligent', 'clever', 'brilliant', 'knowledgeable'], complexity: 'advanced' }],
    ['stupid', { synonyms: ['foolish', 'ignorant', 'unwise', 'naive'], complexity: 'advanced' }],
    ['quick', { synonyms: ['fast', 'swift', 'speedy', 'prompt'], complexity: 'simple' }],
    ['slow', { synonyms: ['delayed', 'lethargic', 'unhurried', 'gradual'], complexity: 'advanced' }],
    ['angry', { synonyms: ['furious', 'irate', 'enraged', 'exasperated'], complexity: 'advanced' }],
    ['calm', { synonyms: ['peaceful', 'serene', 'tranquil', 'placid'], complexity: 'advanced' }],
    ['loud', { synonyms: ['noisy', 'boisterous', 'thunderous', 'clamorous'], complexity: 'advanced' }],
    ['quiet', { synonyms: ['silent', 'peaceful', 'hushed', 'subdued'], complexity: 'advanced' }],
    ['tired', { synonyms: ['exhausted', 'weary', 'fatigued', 'drained'], complexity: 'advanced' }],
    ['clean', { synonyms: ['tidy', 'neat', 'spotless', 'sanitary'], complexity: 'simple' }],
    ['dirty', { synonyms: ['filthy', 'grimy', 'soiled', 'unclean'], complexity: 'simple' }],
    ['strong', { synonyms: ['powerful', 'sturdy', 'robust', 'forceful'], complexity: 'advanced' }],
    ['weak', { synonyms: ['fragile', 'feeble', 'delicate', 'vulnerable'], complexity: 'advanced' }],
    ['old', { synonyms: ['ancient', 'aged', 'elderly', 'outdated'], complexity: 'simple' }],
    ['young', { synonyms: ['youthful', 'juvenile', 'adolescent', 'immature'], complexity: 'simple' }]
  ]);

  words.forEach((word) => {
    const lowerWord = word.toLowerCase();
    const suggestion = synonymMap.get(lowerWord);

    if (suggestion) {
      suggestions.push({
        word,
        synonyms: suggestion.synonyms,
        complexity: suggestion.complexity as 'simple' | 'advanced'
      });
    }
  });

  return suggestions;
}
