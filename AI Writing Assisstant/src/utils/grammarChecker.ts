interface GrammarRule {
  pattern: RegExp;
  message: string;
}

const grammarRules: GrammarRule[] = [
  // Commonly Confused Words
  {
    pattern: /\b(its|it's)\b/g,
    message: "Check 'its' (possessive) vs 'it's' (it is) usage"
  },
  {
    pattern: /\b(there|their|they're)\b/g,
    message: "Verify correct usage of there/their/they're"
  },
  {
    pattern: /\b(your|you're)\b/g,
    message: "Check 'your' vs 'you're' usage"
  },
  {
    pattern: /\b(affect|effect)\b/g,
    message: "Verify 'affect' (verb) vs 'effect' (noun) usage"
  },
  {
    pattern: /\b(then|than)\b/g,
    message: "Check 'then' (time/sequence) vs 'than' (comparison) usage"
  },
  {
    pattern: /\b(loose|lose)\b/g,
    message: "Check 'loose' (not tight) vs 'lose' (not win) usage"
  },
  {
    pattern: /\b(farther|further)\b/g,
    message: "Verify 'farther' (physical distance) vs 'further' (abstract/figurative distance) usage"
  },

  // Punctuation Issues
  {
    pattern: /\s+,/g,
    message: "Remove space before comma"
  },
  {
    pattern: /\s+\./g,
    message: "Remove space before period"
  },
  {
    pattern: /,,+/g,
    message: "Avoid multiple commas in a row"
  },
  {
    pattern: /\.\.\.\.+/g,
    message: "Limit ellipsis to three dots"
  },
  {
    pattern: /([a-z])\.([A-Z])/g,
    message: "Add a space after a period"
  },
  {
    pattern: /\s*;\s*;/g,
    message: "Avoid consecutive semicolons"
  },
  {
    pattern: /[^.?!]\s+[.?!]\s+[A-Z]/g,
    message: "Avoid spacing before punctuation"
  },

  // Capitalization Issues
  {
    pattern: /\b(i|I)\b(?![A-Z'])/g,
    message: "Capitalize 'I' when used as a pronoun"
  },
  {
    pattern: /^[a-z]/g,
    message: "Capitalize the first letter of a sentence"
  },
  {
    pattern: /\.\s+[a-z]/g,
    message: "Capitalize the first letter after a period"
  },
  {
    pattern: /\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/gi,
    message: "Capitalize days of the week"
  },
  {
    pattern: /\b(january|february|march|april|may|june|july|august|september|october|november|december)\b/gi,
    message: "Capitalize months of the year"
  },

  // Contractions and Apostrophes
  {
    pattern: /\b(cant|dont|wouldnt|shouldnt|couldnt|isnt|arent|hasnt|havent|wont|werent|didnt|doesnt|ain't)\b/gi,
    message: "Add apostrophe in contractions"
  },
  {
    pattern: /\b([a-zA-Z]+s)\b(?!')/g,
    message: "Consider if the word needs an apostrophe for possession"
  },

  // Redundant Words
  {
    pattern: /\b(free gift|end result|final outcome|true fact|past history|revert back|future plans|advance planning|repeat again|unexpected surprise|absolutely essential|mutual agreement|close proximity)\b/gi,
    message: "Avoid redundant phrases"
  },

  // Word Usage
  {
    pattern: /\b(really|very|actually|basically|literally|just|kind of|sort of)\b/gi,
    message: "Consider removing weak or filler words"
  },
  {
    pattern: /\b(important|interesting|good|bad|nice|great)\b/gi,
    message: "Consider replacing vague adjectives with more specific ones"
  },

  // Passive Voice Detection
  {
    pattern: /\b(am|is|are|was|were|be|been|being)\s+\w+ed\b/g,
    message: "Consider rephrasing to avoid passive voice"
  },
 // Common grammar errors
  {
    pattern: /\b(its|it's)\b/g,
    message: "Check 'its' (possessive) vs 'it's' (it is) usage",
  },
  {
    pattern: /\b(there|their|they're)\b/g,
    message: "Verify correct usage of there/their/they're",
  },
  {
    pattern: /\b(your|you're)\b/g,
    message: "Check 'your' vs 'you're' usage",
  },
  {
    pattern: /\b(affect|effect)\b/g,
    message: "Verify 'affect' (verb) vs 'effect' (noun) usage",
  },
  {
    pattern: /\b(then|than)\b/g,
    message: "Check 'then' (time/sequence) vs 'than' (comparison) usage",
  },

  // Spacing issues
  {
    pattern: /\s+,/g,
    message: "Remove space before comma",
  },
  {
    pattern: /\s+\./g,
    message: "Remove space before period",
  },

  // Pronoun capitalization
  {
    pattern: /\b(i|I)\b(?![A-Z'])/g,
    message: "Capitalize 'I' when used as a pronoun",
  },

  // Missing apostrophes in contractions
  {
    pattern: /\b(cant|dont|wouldnt|shouldnt|couldnt|isnt|arent|wont|hasnt|hadnt|didnt|doesnt|havent|lets)\b/gi,
    message: "Add apostrophe in contractions",
  },

  // Subject-verb agreement
  {
    pattern: /\b(everyone|anyone|someone|nobody|each|either|neither|nothing|anybody|somebody|everybody|something)\s+(are|were)\b/g,
    message: "Ensure singular subject matches singular verb",
  },

  // Double negatives
  {
    pattern: /\b(not\s+(never|no|none|nothing|nowhere))\b/gi,
    message: "Avoid using double negatives",
  },

  // Redundant phrases
  {
    pattern: /\b(return back|close proximity|advance planning|final outcome|free gift|end result|future plans|unexpected surprise)\b/gi,
    message: "Avoid redundant phrases",
  },

  // Common spelling mistakes
  {
    pattern: /\b(recieve|seperate|occured|accomodate|definately|enviroment|existance|grammer|immedietly|priviledge)\b/gi,
    message: "Correct common spelling errors",
  },

  // Repeated words
  {
    pattern: /\b(\w+)\s+\1\b/gi,
    message: "Remove repeated words",
  },

  // Informal language
  {
    pattern: /\b(kinda|gonna|wanna|ain't|gotta|lemme|y'all|dunno|nah|yep|yeah|uh-huh|oops)\b/gi,
    message: "Replace informal language with formal alternatives",
  },

  // Wordy phrases
  {
    pattern: /\b(in order to|due to the fact that|on account of|in spite of the fact that|at this point in time|for the purpose of)\b/gi,
    message: "Simplify wordy phrases",
  },

  // Transition word overuse
  {
    pattern: /\b(however|therefore|furthermore|moreover|consequently|nevertheless|nonetheless|additionally)\b/gi,
    message: "Avoid overusing transition words",
  },

  // Capitalization issues
  {
    pattern: /\b([a-z])\w*\.\s+[a-z]/g,
    message: "Capitalize the first letter of a sentence",
  },

  // Passive voice detection
  {
    pattern: /\b(am|is|are|was|were|be|been|being)\s+\w+ed\b/gi,
    message: "Consider rewriting in active voice",
  },

  // Inappropriate article usage
  {
    pattern: /\b(a|an)\s+(hour|honor|heir|herb)\b/gi,
    message: "Use 'an' before words starting with a silent 'h'",
  },
  {
    pattern: /\b(an)\s+[aeiou][a-z]*\b/gi,
    message: "Use 'a' before consonant sounds",
  },

  // Sentence fragments
  {
    pattern: /^(and|but|or|so|because|although|if|when|while|unless|until|after|before)\b/gi,
    message: "Avoid starting sentences with conjunctions",
  },

  // Too many exclamation marks
  {
    pattern: /!{2,}/g,
    message: "Avoid excessive exclamation marks",
  },

  // Overuse of ellipses
  {
    pattern: /\.{3,}/g,
    message: "Avoid overusing ellipses; limit to three dots",
  },
  // Repeated Words
  {
    pattern: /\b(\w+)\s+\1\b/gi,
    message: "Avoid using repeated words"
  },

  // Common Spelling Mistakes
  {
    pattern: /\b(recieve|seperate|occured|accomodate|definately|enviroment|existance|grammer|immedietly|independant|liason|millenium|neccessary|occurance|priviledge|recomend|relevent|succesful|untill|wierd)\b/gi,
    message: "Check for spelling errors"
  }
];

export const analyzeGrammar = (text: string): string[] => {
  const errors: string[] = [];

  grammarRules.forEach(rule => {
    if (rule.pattern.test(text)) {
      errors.push(rule.message);
    }
  });

  return errors;
};
