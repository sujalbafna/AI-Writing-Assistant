import React, { useState, useCallback, useEffect } from 'react';
import { Mic, MicOff, AlertCircle } from 'lucide-react';

interface SpeechInputProps {
  onTranscript: (text: string) => void;
}

export default function SpeechInput({ onTranscript }: SpeechInputProps) {
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        const last = event.results.length - 1;
        const transcript = event.results[last][0].transcript;
        onTranscript(transcript);
      };

      recognition.onerror = (event: any) => {
        setError(`Error: ${event.error}`);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      setRecognition(recognition);
    }
  }, [onTranscript]);

  const startListening = useCallback(() => {
    if (!recognition) {
      setError('Speech recognition is not supported in your browser');
      return;
    }

    recognition.start();
    setIsListening(true);
    setError(null);
  }, [recognition]);

  const stopListening = useCallback(() => {
    if (recognition) {
      recognition.stop();
    }
    setIsListening(false);
  }, [recognition]);

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={isListening ? stopListening : startListening}
        className={`p-2 rounded-full transition-colors ${
          isListening 
            ? 'bg-red-100 dark:bg-red-900 text-red-500 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800' 
            : 'bg-blue-100 dark:bg-blue-900 text-blue-500 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800'
        }`}
        title={isListening ? 'Stop recording' : 'Start recording'}
      >
        {isListening ? <MicOff size={20} /> : <Mic size={20} />}
      </button>
      
      {error && (
        <div className="flex items-center text-red-500 dark:text-red-400 text-sm">
          <AlertCircle size={16} className="mr-1" />
          {error}
        </div>
      )}
    </div>
  );
}