export const API_BASE_URL = 'http://localhost:3000/api';

export const ERROR_MESSAGES = {
  FETCH_TASKS: 'Failed to fetch tasks',
  CREATE_TASK: 'Failed to create task',
  UPDATE_TASK: 'Failed to update task',
  DELETE_TASK: 'Failed to delete task',
  UNEXPECTED: 'An unexpected error occurred',
} as const;