import React, { useEffect } from 'react';
import { TaskForm } from './TaskForm';
import { TaskList } from './TaskList';
import { LoadingSpinner } from './ui/LoadingSpinner';
import { ErrorMessage } from './ui/ErrorMessage';
import { useTaskOperations } from '../hooks/useTaskOperations';

export const TaskDashboard: React.FC = () => {
  const { tasks, loading, error, createTask, toggleTask, deleteTask, loadTasks } = useTaskOperations();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <>
      <div className="mb-8">
        <TaskForm onSubmit={createTask} />
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      )}

      {error && <ErrorMessage message={error} />}
    </>
  );
};