import React from 'react';
import { FileText } from 'lucide-react';
import { DropzoneState } from 'react-dropzone';

interface UploadZoneProps {
  dropzoneState: DropzoneState;
}

export default function UploadZone({ dropzoneState }: UploadZoneProps) {
  const { getRootProps, getInputProps, isDragActive } = dropzoneState;

  return (
    <div
      {...getRootProps()}
      className={`w-full p-6 border-2 border-dashed rounded-lg transition-colors ${
        isDragActive ? 'border-blue-400 bg-blue-50' : 'border-blue-300 hover:border-blue-400 hover:bg-blue-50'
      } group cursor-pointer`}
    >
      <div className="flex flex-col items-center space-y-2">
        <FileText 
          size={24} 
          className={`${isDragActive ? 'text-blue-600' : 'text-blue-500'} group-hover:text-blue-600 transition-colors`}
        />
        <div className="text-center">
          <span className="text-blue-600 font-medium group-hover:text-blue-700 block">
            {isDragActive ? 'Drop your Word file here' : 'Drag & drop a Word file'}
          </span>
          <span className="text-sm text-gray-500 block mt-1">
            or click to select
          </span>
          <span className="text-xs text-gray-400 block mt-1">
            Supported formats: .docx, .doc
          </span>
        </div>
      </div>
      <input {...getInputProps()} />
    </div>
  );
}