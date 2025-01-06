import React from 'react';
import TextArea from './index';

interface TextAreaWithLabelProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  showControls?: boolean;
}

export default function TextAreaWithLabel({
  label,
  value,
  onChange,
  placeholder,
  className,
  showControls
}: TextAreaWithLabelProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <TextArea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        showControls={showControls}
      />
    </div>
  );
}