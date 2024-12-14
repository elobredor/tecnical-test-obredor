import { Task } from '../../domain/entities/Task';
import { ITaskRepository } from '../../domain/repositories/ITaskRepository';

export class InMemoryTaskRepository implements ITaskRepository {
  private tasks: Task[] = [];

  async findAll(): Promise<Task[]> {
    return [...this.tasks];
  }

  async findById(id: string): Promise<Task | null> {
    return this.tasks.find(task => task.id === id) || null;
  }

  async create(task: Task): Promise<Task> {
    this.tasks.push(task);
    return task;
  }

  async update(task: Task): Promise<Task> {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index === -1) throw new Error('Task not found');
    this.tasks[index] = task;
    return task;
  }

  async delete(id: string): Promise<void> {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}