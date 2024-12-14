import { Router } from "express";
import { TaskController } from "../controllers/TaskController";
import { CreateTaskUseCase } from "../../usecases/CreateTaskUseCase";
import { GetTasksUseCase } from "../../usecases/GetTasksUseCase";
import { UpdateTaskUseCase } from "../../usecases/UpdateTaskUseCase";
import { DeleteTaskUseCase } from "../../usecases/DeleteTaskUseCase";
import { InMemoryTaskRepository } from "../repositories/InMemoryTaskRepository";

const router = Router();
const taskRepository = new InMemoryTaskRepository();

const createTaskUseCase = new CreateTaskUseCase(taskRepository);
const getTasksUseCase = new GetTasksUseCase(taskRepository);
const updateTaskUseCase = new UpdateTaskUseCase(taskRepository);
const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);

const taskController = new TaskController(
	createTaskUseCase,
	getTasksUseCase,
	updateTaskUseCase,
	deleteTaskUseCase
);

router.get("/tasks", (req, res) => taskController.getTasks(req, res));
router.post("/tasks", (req, res) => taskController.createTask(req, res));
router.patch("/tasks/:id", (req, res) => taskController.updateTask(req, res));
router.delete("/tasks/:id", (req, res) => taskController.deleteTask(req, res));

export default router;
