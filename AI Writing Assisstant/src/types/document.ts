export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface Document {
  id: string;
  userId: string;
  title: string;
  content: string;
  tone: string;
  type: 'document' | 'chat';
  messages?: Message[];
  createdAt: Date;
}