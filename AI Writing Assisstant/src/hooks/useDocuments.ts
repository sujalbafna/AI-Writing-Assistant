import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { useAuth } from './useAuth';
import type { Message, Document } from '../types/document';

export function useDocuments() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchDocuments();
    } else {
      setDocuments([]);
      setLoading(false);
    }
  }, [user]);

  async function fetchDocuments() {
    if (!user) return;

    try {
      setLoading(true);
      const documentsRef = collection(db, 'documents');
      
      const basicQuery = query(
        documentsRef,
        where('userId', '==', user.uid)
      );
      
      const snapshot = await getDocs(basicQuery);
      const docs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        messages: doc.data().messages?.map((msg: any) => ({
          ...msg,
          timestamp: msg.timestamp?.toDate() || new Date()
        }))
      })) as Document[];
      
      docs.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      
      setDocuments(docs);
      setError(null);
    } catch (err) {
      console.error('Error fetching documents:', err);
      setError('Failed to fetch documents. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  const saveDocument = async (
    title: string,
    content: string,
    tone: string,
    type: 'document' | 'chat' = 'document',
    messages?: Message[]
  ) => {
    if (!user) return;

    try {
      const docData = {
        userId: user.uid,
        title,
        content,
        tone,
        type,
        messages,
        createdAt: new Date()
      };

      const docRef = await addDoc(collection(db, 'documents'), docData);
      const newDoc = {
        id: docRef.id,
        ...docData
      } as Document;

      setDocuments(prev => [newDoc, ...prev]);
      return docRef.id;
    } catch (err) {
      console.error('Error saving document:', err);
      setError('Failed to save document. Please try again.');
      return null;
    }
  };

  const deleteDocument = async (id: string) => {
    if (!user) return;

    try {
      await deleteDoc(doc(db, 'documents', id));
      setDocuments(prev => prev.filter(doc => doc.id !== id));
      setError(null);
    } catch (err) {
      console.error('Error deleting document:', err);
      setError('Failed to delete document. Please try again.');
    }
  };

  return {
    documents,
    loading,
    error,
    saveDocument,
    deleteDocument
  };
}