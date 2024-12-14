import { useState, useCallback } from "react";
import { Task } from "../types/task";
import { TaskRepository } from "../services/repositories/taskRepository";
import { getErrorMessage } from "../utils/errorHandler";

export const useTaskOperations = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const clearError = () => setError(null);

	const loadTasks = useCallback(async () => {
		setLoading(true);
		clearError();
		try {
			const fetchedTasks = await TaskRepository.getTasks();
			setTasks(fetchedTasks);
		} catch (error) {
			setError(getErrorMessage(error));
		} finally {
			setLoading(false);
		}
	}, []);

	const createTask = async (description: string) => {
		clearError();
		try {
			const newTask = await TaskRepository.createTask({ description });
			setTasks((prev) => [...prev, newTask]);
		} catch (error) {
			setError(getErrorMessage(error));
		}
	};

	const toggleTask = async (id: string) => {
		clearError();

		try {
			setTasks((prevTasks) =>
				prevTasks.map((task) =>
					task.id === id ? { ...task, completed: !task.completed } : task
				)
			);
			await TaskRepository.updateTask(id, {
				completed: !tasks.find((t) => t.id === id)?.completed,
			});
		} catch (error) {
			setError(getErrorMessage(error));

			setTasks((prevTasks) =>
				prevTasks.map((task) =>
					task.id === id ? { ...task, completed: !task.completed } : task
				)
			);
			console.error("Error al actualizar la tarea:", error); // Registrar el error
		}
	};

	const deleteTask = async (id: string) => {
		clearError();
		try {
			await TaskRepository.deleteTask(id);
			setTasks((prev) => prev.filter((t) => t.id !== id));
		} catch (error) {
			setError(getErrorMessage(error));
		}
	};

	return {
		tasks,
		loading,
		error,
		loadTasks,
		createTask,
		toggleTask,
		deleteTask,
	};
};
