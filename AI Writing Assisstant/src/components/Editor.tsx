import React, { useState, useCallback } from 'react';
import { Wand2 } from 'lucide-react';
import TextArea from './TextArea';
import SuggestionsList from './SuggestionsList';
import WritingMetrics from './WritingMetrics';
import EmotionInsights from './EmotionInsights';
import ToneConverter from './ToneConverter';
import SlidePanel from './SlidePanel';
import SavedDocuments from './SavedDocuments';
import CreateDocumentButton from './CreateDocumentButton';
import AIPromptTemplates from './AIPromptTemplates';
import WritingGoals from './WritingGoals';
import VocabularyEnhancer from './features/VocabularyEnhancer';
import SpeechInput from './features/SpeechInput';
import HighlightsList from './HighlightsList';
import { analyzeText } from '../utils/analyzers';
import { calculateMetrics } from '../utils/metrics';
import { analyzeEmotion } from '../utils/emotionAnalyzer';
import { convertTone } from '../utils/toneAnalyzer';
import { useDocuments } from '../hooks/useDocuments';
import type { ToneType } from '../utils/toneAnalyzer';

export default function Editor() {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('Untitled Document');
  const [tone, setTone] = useState<ToneType>('formal');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState({ suggestions: [], highlights: [] });
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const { documents, saveDocument, deleteDocument } = useDocuments();

  const handleTextChange = useCallback((newText: string) => {
    setText(newText);
    analyzeContent(newText);
  }, []);

  const handleToneChange = useCallback((newTone: ToneType) => {
    setTone(newTone);
    const convertedText = convertTone(text, newTone);
    setText(convertedText);
    analyzeContent(convertedText);
  }, [text]);

  const analyzeContent = useCallback(async (content: string) => {
    setIsAnalyzing(true);
    const result = analyzeText(content);
    setAnalysis(result);
    setIsAnalyzing(false);
  }, []);

  const handleSpeechInput = useCallback((transcript: string) => {
    setText(prev => prev + ' ' + transcript);
    analyzeContent(text + ' ' + transcript);
  }, [text]);

  const handleSave = useCallback(async () => {
    if (!text.trim()) return;
    await saveDocument(title, text, tone);
  }, [title, text, tone, saveDocument]);

  const handleCreateNew = useCallback(() => {
    setText('');
    setTitle('Untitled Document');
    setTone('formal');
    setAnalysis({ suggestions: [], highlights: [] });
  }, []);

  const handleDocumentSelect = useCallback(async (id: string) => {
    const doc = documents.find(d => d.id === id);
    if (doc) {
      setText(doc.content);
      setTitle(doc.title);
      setTone(doc.tone as ToneType);
      analyzeContent(doc.content);
    }
  }, [documents]);

  const metrics = calculateMetrics(text);
  const emotion = analyzeEmotion(text);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <ToneConverter onToneChange={handleToneChange} currentTone={tone} />
              <SpeechInput onTranscript={handleSpeechInput} />
            </div>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Save
            </button>
          </div>
          <div className="relative p-4">
            <TextArea
              value={text}
              onChange={handleTextChange}
              placeholder="Start writing here..."
              className="min-h-[300px]"
            />
          </div>
        </div>
        {analysis.highlights.length > 0 && (
          <HighlightsList text={text} highlights={analysis.highlights} />
        )}
      </div>

      <div className="space-y-6">
        <WritingMetrics metrics={metrics} />
        <SuggestionsList suggestions={analysis.suggestions} />
        <EmotionInsights emotion={emotion} />
        <WritingGoals wordCount={metrics.wordCount} />
        <VocabularyEnhancer text={text} />
        <AIPromptTemplates onSelect={setText} />
      </div>

      <SlidePanel isOpen={isPanelOpen} onToggle={() => setIsPanelOpen(!isPanelOpen)}>
        <SavedDocuments
          documents={documents}
          onSelect={handleDocumentSelect}
          onDelete={deleteDocument}
          onCreateNew={handleCreateNew}
        />
      </SlidePanel>
    </div>
  );
}