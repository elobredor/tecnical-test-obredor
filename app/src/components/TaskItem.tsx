import React from "react";
import { Check, Trash2 } from "lucide-react";
import { Task } from "../types/task";

interface TaskItemProps {
	task: Task;
	onToggle: (id: string) => void;
	onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
	task,
	onToggle,
	onDelete,
}) => {
	if (!task.description?.trim()) {
		return null;
	}
	return (
		<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
			<div className="flex items-center space-x-3">
				<button
					onClick={() => onToggle(task.id)}
					className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
						task.completed
							? "bg-green-500 border-green-500"
							: "border-gray-300 hover:border-green-500"
					}`}
				>
					{task.completed && <Check size={16} className="text-white" />}
				</button>
				<span
					className={`text-gray-800 ${
						task.completed ? "line-through text-gray-500" : ""
					}`}
				>
					{task.description}
				</span>
			</div>
			<button
				onClick={() => onDelete(task.id)}
				className="text-gray-500 hover:text-red-500 transition-colors"
			>
				<Trash2 size={18} />
			</button>
		</div>
	);
};
