import React from 'react';
import { FilePlus } from 'lucide-react';
import FileDropZone from './FileDropZone';

interface CreateDocumentBoxProps {
  onClick: () => void;
  onFileContent: (content: string) => void;
}

export default function CreateDocumentBox({ onClick, onFileContent }: CreateDocumentBoxProps) {
  return (
    <div className="space-y-4">
      <button
        onClick={onClick}
        className="w-full p-6 border-2 border-dashed border-blue-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors group"
      >
        <div className="flex flex-col items-center space-y-2">
          <FilePlus 
            size={24} 
            className="text-blue-500 group-hover:text-blue-600 transition-colors" 
          />
          <span className="text-blue-600 font-medium group-hover:text-blue-700">
            Create New Document
          </span>
        </div>
      </button>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center">
          <span className="px-2 bg-white text-sm text-gray-500">or</span>
        </div>
      </div>

      <FileDropZone onContentLoaded={onFileContent} />
    </div>
  );
}