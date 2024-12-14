import React from "react";
import { TaskItem } from "./TaskItem";
import { Task } from "../types/task";

interface TaskListProps {
	tasks: Task[];
	onToggle: (id: string) => void;
	onDelete: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
	tasks = [],
	onToggle,
	onDelete,
}) => {
	return (
		<div className="space-y-2">
			{tasks.length > 0 ? (
				tasks.map((task) => (
					<TaskItem
						key={task.id}
						task={task}
						onToggle={onToggle}
						onDelete={onDelete}
					/>
				))
			) : (
				<>
					<p className="text-gray-500 text-center py-4">No tasks available</p>
				</>
			)}
		</div>
	);
};
