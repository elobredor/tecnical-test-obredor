import { Task } from "../domain/entities/Task";
import { ITaskRepository } from "../domain/repositories/ITaskRepository";
import { v4 as uuidv4 } from "uuid";

export class CreateTaskUseCase {
	constructor(private taskRepository: ITaskRepository) {}

	async execute(description: string): Promise<Task> {
		const task = new Task(uuidv4(), description);
		return await this.taskRepository.create(task);
	}
}
