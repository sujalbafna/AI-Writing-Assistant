import React from 'react';
import { Mail } from 'lucide-react';

interface EmailInputProps {
  email: string;
  setEmail: (email: string) => void;
}

export default function EmailInput({ email, setEmail }: EmailInputProps) {
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-blue-600 dark:text-blue-400">
        Email address
      </label>
      <div className="mt-1 relative">
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-dark-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-700 dark:text-gray-100"
        />
        <Mail className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
}