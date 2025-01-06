import React, { useState, useCallback, useRef } from 'react';
import { Trash2, Copy } from 'lucide-react';

interface TextAreaProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  showControls?: boolean;
}

export default function TextArea({
  value: externalValue,
  onChange: externalOnChange,
  placeholder = 'Start typing...',
  className = '',
  showControls = true
}: TextAreaProps) {
  const [internalValue, setInternalValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const value = externalValue !== undefined ? externalValue : internalValue;
  const onChange = externalOnChange || setInternalValue;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  }, [onChange]);

  const handleClear = useCallback(() => {
    onChange('');
  }, [onChange]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  }, [value]);

  return (
    <div className="relative">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full min-h-[200px] p-4 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-y font-mono text-gray-800 bg-transparent ${className}`}
      />
      {showControls && value && (
        <div className="absolute top-2 right-2 flex space-x-2">
          <button
            onClick={handleCopy}
            className="p-1.5 text-gray-500 hover:text-blue-500 bg-white rounded-md hover:bg-gray-50 transition-colors"
            title="Copy text"
          >
            <Copy size={16} />
          </button>
          <button
            onClick={handleClear}
            className="p-1.5 text-gray-500 hover:text-red-500 bg-white rounded-md hover:bg-gray-50 transition-colors"
            title="Clear text"
          >
            <Trash2 size={16} />
          </button>
        </div>
      )}
    </div>
  );
}