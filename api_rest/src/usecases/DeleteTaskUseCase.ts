import { ITaskRepository } from "../domain/repositories/ITaskRepository";

export class DeleteTaskUseCase {
	constructor(private taskRepository: ITaskRepository) {}

	async execute(id: string): Promise<void> {
		await this.taskRepository.delete(id);
	}
}
