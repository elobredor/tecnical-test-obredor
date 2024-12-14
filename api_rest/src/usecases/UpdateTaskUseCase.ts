import { Task } from "../domain/entities/Task";
import { ITaskRepository } from "../domain/repositories/ITaskRepository";

export class UpdateTaskUseCase {
	constructor(private taskRepository: ITaskRepository) {}

	async execute(id: string, updates: Partial<Task>): Promise<void> {
		const task = await this.taskRepository.findById(id);
		if (!task) {
			throw new Error("Task not found");
		}

		Object.assign(task, updates);
		await this.taskRepository.update(task);
	}
}
