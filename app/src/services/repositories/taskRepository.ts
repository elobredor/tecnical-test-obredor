import { Task, CreateTaskDTO } from "../../types/task";
import { AppError } from "../../types/errors";
import { ERROR_MESSAGES } from "../../utils/constants";
import api from "../api/axios-interceptor";

export const TaskRepository = {
	getTasks: async (): Promise<Task[]> => {
		try {
			const response = await api.get<Task[]>("/tasks");
			return response.data;
		} catch (error) {
			throw error instanceof AppError
				? error
				: new AppError(ERROR_MESSAGES.FETCH_TASKS);
		}
	},

	createTask: async (task: CreateTaskDTO): Promise<Task> => {
		try {
			const response = await api.post<Task>("/tasks", task);
			return response.data;
		} catch (error) {
			throw error instanceof AppError
				? error
				: new AppError(ERROR_MESSAGES.CREATE_TASK);
		}
	},

	updateTask: async (id: string, task: Partial<Task>): Promise<Task> => {
		try {
			const response = await api.patch<Task>(`/tasks/${id}`, task);
			console.log(response.data);
			return response.data;
		} catch (error) {
			throw error instanceof AppError
				? error
				: new AppError(ERROR_MESSAGES.UPDATE_TASK);
		}
	},

	deleteTask: async (id: string): Promise<void> => {
		try {
			await api.delete(`/tasks/${id}`);
		} catch (error) {
			throw error instanceof AppError
				? error
				: new AppError(ERROR_MESSAGES.DELETE_TASK);
		}
	},
};
