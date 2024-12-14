import { Request, Response } from "express";
import { CreateTaskUseCase } from "../../usecases/CreateTaskUseCase";
import { GetTasksUseCase } from "../../usecases/GetTasksUseCase";
import { UpdateTaskUseCase } from "../../usecases/UpdateTaskUseCase";
import { DeleteTaskUseCase } from "../../usecases/DeleteTaskUseCase";

export class TaskController {
	constructor(
		private createTaskUseCase: CreateTaskUseCase,
		private getTasksUseCase: GetTasksUseCase,
		private updateTaskUseCase: UpdateTaskUseCase,
		private deleteTaskUseCase: DeleteTaskUseCase
	) {}

	// Obtener todas las tareas
	async getTasks(req: Request, res: Response): Promise<void> {
		try {
			const tasks = await this.getTasksUseCase.execute();
			res.status(200).json(tasks);
		} catch (error) {
			console.error("Error al obtener tareas:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	}

	// Crear una nueva tarea
	async createTask(req: Request, res: Response): Promise<void> {
		try {
			const { description } = req.body;
			if (!description) {
				res.status(400).json({ error: "Description is required" });
				return;
			}

			const task = await this.createTaskUseCase.execute(description);
			res.status(201).json(task);
		} catch (error) {
			console.error("Error al crear tarea:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	}

	async updateTask(req: Request, res: Response): Promise<void> {
		try {
			const { id } = req.params;
			const updates = req.body;
			if (!updates || Object.keys(updates).length === 0) {
				res.status(400).json({ error: "No updates provided" });
				return;
			}

			await this.updateTaskUseCase.execute(id, updates);
			res.status(200).json({ message: "Task updated successfully" });
		} catch (error) {
			if (error instanceof Error && error.message === "Task not found") {
				res.status(404).json({ error: "Task not found" });
			} else {
				console.error("Error al actualizar tarea:", error);
				res.status(500).json({ error: "Internal server error" });
			}
		}
	}

	// Eliminar una tarea
	async deleteTask(req: Request, res: Response): Promise<void> {
		try {
			const { id } = req.params;
			await this.deleteTaskUseCase.execute(id);
			res.status(204).send();
		} catch (error) {
			if (error instanceof Error && error.message === "Task not found") {
				res.status(404).json({ error: "Task not found" });
			} else {
				console.error("Error al eliminar tarea:", error);
				res.status(500).json({ error: "Internal server error" });
			}
		}
	}
}
