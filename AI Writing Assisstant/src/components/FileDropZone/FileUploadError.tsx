import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FileUploadErrorProps {
  message: string;
  onDismiss: () => void;
}

export default function FileUploadError({ message, onDismiss }: FileUploadErrorProps) {
  return (
    <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-md">
      <div className="flex items-start">
        <AlertCircle className="text-red-500 mt-0.5 flex-shrink-0" size={16} />
        <div className="ml-2 flex-1">
          <p className="text-sm text-red-600">{message}</p>
        </div>
        <button
          onClick={onDismiss}
          className="text-red-400 hover:text-red-500 ml-2"
        >
          ×
        </button>
      </div>
    </div>
  );
}