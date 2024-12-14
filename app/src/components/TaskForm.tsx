import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface TaskFormProps {
  onSubmit: (description: string) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim()) {
      onSubmit(description.trim());
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        <Plus size={20} />
      </button>
    </form>
  );
};