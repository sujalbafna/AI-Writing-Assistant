import React, { useCallback } from 'react';
import { FileText } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import mammoth from 'mammoth';

interface FileDropZoneProps {
  onContentLoaded: (content: string) => void;
}

export default function FileDropZone({ onContentLoaded }: FileDropZoneProps) {
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    try {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      onContentLoaded(result.value);
    } catch (error) {
      console.error('Error reading Word file:', error);
    }
  }, [onContentLoaded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/msword': ['.doc']
    },
    multiple: false
  });

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
        </div>
      </div>
      <input {...getInputProps()} />
    </div>
  );
}