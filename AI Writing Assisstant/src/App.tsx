import React from 'react';
import { Wand2 } from 'lucide-react';
import Editor from './components/Editor';
import SignInForm from './components/auth/SignInForm';
import ThemeToggle from './components/ThemeToggle';
import { useAuth } from './hooks/useAuth';

export default function App() {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center dark:bg-dark-900">
      <Wand2 className="animate-spin text-blue-500" size={24} />
    </div>;
  }

  if (!user) {
    return <SignInForm />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-200">
      <header className="bg-white dark:bg-dark-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wand2 className="text-blue-500" size={24} />
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">AI Writing Assistant</h1>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={logout}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Enhance Your Writing
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Get real-time suggestions to improve your writing style and clarity
          </p>
        </div>
        <Editor />
      </main>

      <footer className="bg-white dark:bg-dark-800 mt-12">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            AI Writing Assistant - Powered by Advanced Language Models
          </p>
        </div>
      </footer>
    </div>
  );
}