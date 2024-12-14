import { TaskDashboard } from "./components/TaskDashboard";
import { AppHeader } from "./components/AppHeader";

export default function App() {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-3xl mx-auto px-4 py-8">
				<AppHeader />
				<TaskDashboard />
			</div>
		</div>
	);
}
