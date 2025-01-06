import { analyzeReadability, analyzeStyle, analyzeStructure } from './analyzers';

export const analyzeText = (text: string): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const suggestions = [
        ...analyzeReadability(text),
        ...analyzeStyle(text),
        ...analyzeStructure(text),
        text.length < 50 ? "Add more detail to strengthen your message" : null,
        text.includes('!') ? "Use exclamation marks sparingly for professional tone" : null,
        text.split('.').length < 3 ? "Develop your ideas with more complete sentences" : null,
      ].filter((suggestion): suggestion is string => suggestion !== null);

      // Return up to 5 most relevant suggestions
      resolve(suggestions.slice(0, 5));
    }, 1500);
  });
};