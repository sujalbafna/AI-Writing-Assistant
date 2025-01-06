import React from 'react';
import { File, MessageSquare, Trash2 } from 'lucide-react';
import { formatDate } from '../utils/dateFormatting';
import CreateDocumentBox from './CreateDocumentBox';
import type { Document } from '../types/document';

interface SavedDocumentsProps {
  documents: Document[];
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
  onCreateNew: () => void;
}

export default function SavedDocuments({ 
  documents, 
  onSelect, 
  onDelete,
  onCreateNew 
}: SavedDocumentsProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Saved Content</h2>
      
      <CreateDocumentBox onClick={onCreateNew} />
      
      <div className="space-y-2">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <button
              onClick={() => onSelect(doc.id)}
              className="flex items-center space-x-3 flex-1 text-left"
            >
              {doc.type === 'chat' ? (
                <MessageSquare size={18} className="text-blue-500 flex-shrink-0" />
              ) : (
                <File size={18} className="text-gray-500 flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 truncate">{doc.title}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    {formatDate(doc.createdAt.toString())}
                  </span>
                  {doc.type === 'chat' && (
                    <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                      Chat
                    </span>
                  )}
                  {doc.messages && doc.messages.length > 0 && (
                    <span className="text-xs text-gray-500">
                      {doc.messages.length} message{doc.messages.length !== 1 ? 's' : ''}
                    </span>
                  )}
                </div>
              </div>
            </button>
            <button
              onClick={() => onDelete(doc.id)}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Delete document"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}