import React from 'react';
import { Heart } from 'lucide-react';
import type { EmotionAnalysis } from '../utils/emotions/types';

interface EmotionInsightsProps {
  emotion: EmotionAnalysis;
}

const emotionColors = {
  joy: 'text-yellow-500',
  anger: 'text-red-500',
  sadness: 'text-blue-500',
  fear: 'text-purple-500',
  confidence: 'text-green-500',
  neutral: 'text-gray-500'
};

export default function EmotionInsights({ emotion }: EmotionInsightsProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Heart className="mr-2 text-red-500" size={20} />
        Emotional Tone
      </h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Primary Emotion</span>
          <span className={`font-semibold ${emotionColors[emotion.primary as keyof typeof emotionColors]}`}>
            {emotion.primary.charAt(0).toUpperCase() + emotion.primary.slice(1)}
          </span>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Intensity</span>
            <span className="text-sm text-gray-500">{emotion.intensity}%</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${emotion.intensity}%` }}
            />
          </div>
        </div>

        {emotion.suggestions.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Suggestions</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              {emotion.suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}