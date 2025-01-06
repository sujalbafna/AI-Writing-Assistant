import React from 'react';
import { Sparkles, Plus } from 'lucide-react';

const templates = [
  {
    title: "Professional Email",
    prompt: "Dear [Name],\n\nI hope this email finds you well.\n\n[Your message]\n\nBest regards,\n[Your name]"
  },
  {
    title: "Blog Post",
    prompt: "# [Title]\n\n## Introduction\n[Hook sentence]\n\n## Main Points\n1. \n2. \n3. \n\n## Conclusion\n"
  },
  {
    title: "Product Description",
    prompt: "Product: [Name]\n\nKey Features:\n• \n• \n• \n\nBenefits:\n• \n• \n\nPrice: [Amount]"
  },
  {
    title: "Meeting Minutes",
    prompt: "Date: [Date]\nAttendees: [Names]\n\nAgenda:\n1. \n2. \n\nKey Decisions:\n• \n\nAction Items:\n• "
  }
];

interface AIPromptTemplatesProps {
  onSelect: (prompt: string) => void;
}

export default function AIPromptTemplates({ onSelect }: AIPromptTemplatesProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Sparkles className="mr-2 text-purple-500" size={20} />
        Writing Templates
      </h2>
      
      <div className="grid grid-cols-2 gap-3">
        {templates.map((template, index) => (
          <button
            key={index}
            onClick={() => onSelect(template.prompt)}
            className="p-3 text-left border border-gray-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-700 group-hover:text-purple-700">
                {template.title}
              </span>
              <Plus size={16} className="text-gray-400 group-hover:text-purple-500" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}