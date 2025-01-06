import React from 'react';
import { Wand2 } from 'lucide-react';
import type { ToneType } from '../utils/toneAnalyzer';

interface ToneConverterProps {
  onToneChange: (tone: ToneType) => void;
  currentTone: ToneType;
}

export default function ToneConverter({ onToneChange, currentTone }: ToneConverterProps) {
  return (
    <div className="flex items-center space-x-2">
      <Wand2 className="text-purple-500" size={20} />
      <select
        value={currentTone}
        onChange={(e) => onToneChange(e.target.value as ToneType)}
        className="rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
      >
        <option value="formal">Formal</option>
        <option value="friendly">Friendly</option>
        <option value="persuasive">Persuasive</option>
        <option value="empathetic">Empathetic</option>
      </select>
    </div>
  );
}