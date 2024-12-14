export interface Task {
  id: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

export interface CreateTaskDTO {
  description: string;
}