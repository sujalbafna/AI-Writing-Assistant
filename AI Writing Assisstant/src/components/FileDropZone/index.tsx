import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import mammoth from 'mammoth';
import UploadZone from './UploadZone';
import FileUploadError from './FileUploadError';

interface FileDropZoneProps {
  onContentLoaded: (content: string) => void;
}

export default function FileDropZone({ onContentLoaded }: FileDropZoneProps) {
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    try {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      
      if (!result.value.trim()) {
        throw new Error('The document appears to be empty');
      }
      
      onContentLoaded(result.value);
      setError(null);
    } catch (err) {
      console.error('Error reading Word file:', err);
      setError(
        err instanceof Error 
          ? err.message 
          : 'Failed to read the Word document. Please try again.'
      );
    }
  }, [onContentLoaded]);

  const dropzone = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/msword': ['.doc']
    },
    multiple: false,
    maxSize: 5 * 1024 * 1024 // 5MB limit
  });

  return (
    <div>
      <UploadZone dropzoneState={dropzone} />
      {error && (
        <FileUploadError 
          message={error} 
          onDismiss={() => setError(null)} 
        />
      )}
    </div>
  );
}