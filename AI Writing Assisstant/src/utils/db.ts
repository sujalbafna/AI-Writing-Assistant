import { getFirestore, collection } from 'firebase/firestore';
import { app } from './firebase';

export const db = getFirestore(app);

export interface Document {
  id: string;
  userId: string;
  title: string;
  content: string;
  tone: string;
  type: 'document' | 'chat';
  messages?: {
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
  }[];
  createdAt: Date;
}

export const documentsCollection = collection(db, 'documents');