import React from 'react';
import { ListChecks } from 'lucide-react';

export const AppHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      <ListChecks size={32} className="text-blue-500" />
      <h1 className="text-3xl font-bold text-gray-800">Task Manager</h1>
    </div>
  );
};