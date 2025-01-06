import React from 'react';
import { BarChart } from 'lucide-react';
import type { WritingMetrics } from '../utils/metrics';

interface WritingMetricsProps {
  metrics: WritingMetrics;
}

export default function WritingMetrics({ metrics }: WritingMetricsProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <BarChart className="mr-2 text-blue-500" size={20} />
        Writing Metrics
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Word Count</span>
            <span className="font-semibold">{metrics.wordCount}</span>
          </div>
        </div>

        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Character Count</span>
            <span className="font-semibold">{metrics.characterCount}</span>
          </div>
        </div>

        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Sentence Count</span>
            <span className="font-semibold">{metrics.sentenceCount}</span>
          </div>
        </div>

        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Paragraph Count</span>
            <span className="font-semibold">{metrics.paragraphCount}</span>
          </div>
        </div>

        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Avg. Word Length</span>
            <span className="font-semibold">{metrics.avgWordLength.toFixed(1)}</span>
          </div>
        </div>

        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Avg. Sentence Length</span>
            <span className="font-semibold">{metrics.avgSentenceLength.toFixed(1)}</span>
          </div>
        </div>

        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Reading Time</span>
            <span className="font-semibold">{metrics.readingTime} min</span>
          </div>
        </div>

        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Readability Score</span>
            <span className="font-semibold">{metrics.readabilityScore.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}