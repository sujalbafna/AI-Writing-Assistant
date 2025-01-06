export type HighlightType = 'passive' | 'complex' | 'redundant' | 'wordy' | 'repeated' | 'spelling';

export interface HighlightInfo {
  type: HighlightType;
  color: string;
  description: string;
}

export const highlightConfig: Record<HighlightType, HighlightInfo> = {
  passive: {
    type: 'passive',
    color: 'bg-yellow-200',
    description: 'Passive voice detected'
  },
  complex: {
    type: 'complex',
    color: 'bg-blue-200',
    description: 'Complex wording'
  },
  redundant: {
    type: 'redundant',
    color: 'bg-pink-200',
    description: 'Redundant phrase'
  },
  wordy: {
    type: 'wordy',
    color: 'bg-purple-200',
    description: 'Wordy expression'
  },
  repeated: {
    type: 'repeated',
    color: 'bg-teal-200',
    description: 'Repeated word'
  },
  spelling: {
    type: 'spelling',
    color: 'bg-red-200',
    description: 'Possible spelling mistake'
  }
};