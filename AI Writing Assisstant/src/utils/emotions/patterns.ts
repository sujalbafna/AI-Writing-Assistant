import { EmotionPatterns } from './types';

export const emotionPatterns: EmotionPatterns = {
  // Joy-related words
  joy: {
    words: /\b(happy|delighted|excited|wonderful|fantastic|great|excellent|amazing|brilliant|perfect|cheerful|ecstatic|content|joyful|jubilant|thrilled|overjoyed|gleeful|blissful|radiant|euphoric|elated|sunny|grateful|satisfied|playful|hopeful|vivacious|optimistic|proud|peaceful|bubbly|lively|energetic|buoyant|zestful|sparkling|ecstatic|giddy|celebratory|glorious|chipper|gleaming|lighthearted|vibrant|effervescent|jovial|merry|exhilarated|smiling|bouncing)\b/gi,
    weight: 1.2,
  },

  // Anger-related words
  anger: {
    words: /\b(angry|furious|upset|frustrated|annoyed|mad|irritated|outraged|hostile|enraged|infuriated|irate|seething|exasperated|resentful|wrathful|bitter|aggressive|vengeful|hateful|vindictive|raging|indignant|fuming|boiling|belligerent|provoked|fiery|hot-headed|combative|irritating|offended|argumentative|resentment|grumbling|fiery|flustered|bristling|unforgiving|snappy|scornful|testy|spiteful|vindictive|menacing)\b/gi,
    weight: 1.5,
  },

  // Sadness-related words
  sadness: {
    words: /\b(sad|disappointed|unhappy|regret|sorry|depressed|miserable|heartbroken|gloomy|devastated|grief|melancholy|despondent|blue|forlorn|tearful|hopeless|downcast|mournful|sorrowful|dismal|pensive|wistful|tragic|aching|hurt|crushed|despairing|anguished|lonely|desolate|woeful|tormented|weary|somber|downhearted|crestfallen|heavy-hearted|remorseful|dejected|heart-wrenching|longing|isolated|misery-stricken|overcome|withdrawn|lamenting|disconsolate|plaintive|sullen)\b/gi,
    weight: 1.3,
  },

  // Fear-related words
  fear: {
    words: /\b(worried|scared|afraid|anxious|concerned|terrified|frightened|nervous|panicked|dreading|fearful|uneasy|paranoid|apprehensive|alarmed|startled|horrified|intimidated|shaken|timid|frozen|phobic|jumpy|alarmed|tense|spooked|chilled|worriedly|panic-stricken|restless|fretful|unnerved|stressed|overwhelmed|queasy|helpless|troubled|aghast|perturbed|trembling|wary|hesitant|choked|overcome|perturbed|uncomfortable|bewildered|on-edge|reserved)\b/gi,
    weight: 1.4,
  },

  // Confidence-related words
  confidence: {
    words: /\b(sure|certain|confident|definitely|absolutely|convinced|assured|positive|undoubtedly|guaranteed|determined|focused|driven|steadfast|fearless|empowered|strong|self-assured|bold|assertive|courageous|resolute|unyielding|brave|decisive|capable|reliable|undaunted|tenacious|motivated|heroic|resourceful|dependable|knowledgeable|skilled|resilient|proactive|grounded|ambitious|unshakable|unwavering|steadily|sure-footed|daring|unflinching|stalwart|valiant|fortified|composed|persistent)\b/gi,
    weight: 1.1,
  },

  // Love-related words
  love: {
    words: /\b(love|loving|affection|passionate|adoring|romantic|fond|caring|devoted|cherished|beloved|heartfelt|adoration|tender|infatuated|intimate|yearning|sweet|charming|endearing|embracing|attached|mesmerized|captivated|worshipped|alluring|magnetic|fascinated|enamored|devotion|gentle|soulful|compassionate|desire|amorous|enchantment|closeness|harmony|warmth|soft-hearted|charismatic|thoughtful|wholesome|graceful)\b/gi,
    weight: 1.3,
  },

  // Surprise-related words
  surprise: {
    words: /\b(surprised|shocked|amazed|startled|stunned|astonished|overwhelmed|flabbergasted|speechless|astounded|bewildered|incredulous|baffled|perplexed|dumbfounded|marveled|stupefied|awed|unexpectedly|gobsmacked|flustered|startling|disbelieving|jolted|mesmerizing|astounding|unforeseen|taken-aback|shocking|mind-blowing|jaw-dropping|wondering|unprepared|out-of-the-blue|struck|amazing|spontaneous|mystifying)\b/gi,
    weight: 1.4,
  },

  // Disgust-related words
  disgust: {
    words: /\b(disgusted|repulsed|grossed-out|revolted|nauseated|sickened|appalled|detestable|abhorrent|repelled|distasteful|vile|odious|horrendous|obnoxious|foul|nauseating|loathsome|displeasing|repugnant|disturbing|unsavory|distressing|grimy|tainted|contaminated|hateful|unacceptable|gruesome|icky|unsightly|vomit-inducing|grotesque|detesting|shuddering|hideous|abhorrence|repulsion)\b/gi,
    weight: 1.5,
  },
};
