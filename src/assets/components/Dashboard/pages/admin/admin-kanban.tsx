import React, { useState } from 'react';
import WYSIWYGEditor from '../components/WYSIWYGEditor';

// Define Task interface
interface Task {
    title: string;
    course: string;
    subject: string;
    status: 'to-do' | 'in-progress' | 'completed' | 'cancelled';
    description: string;
    priority: 'low' | 'medium' | 'high'; // Priority can be low, medium, or high
}

// KanbanBoard component
const AdminKanbanPage: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTask, setNewTask] = useState<Omit<Task, 'status' | 'priority'>>({
        title: '',
        course: '',
        subject: '',
        description: '',
    });
    const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low'); // Default priority

    const handleAddTask = () => {
        const task: Task = {
            ...newTask,
            status: 'to-do', // Default status
            priority,
        };
        setTasks([...tasks, task]);
        setNewTask({ title: '', course: '', subject: '', description: '' }); // Reset form
        setPriority('low'); // Reset priority
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Tasks</h1>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Add Task
            </button>

            {/* Modal Content */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded shadow-lg p-6 w-96">
                        <h2 className="text-xl font-bold mb-4">Create Task</h2>
                        <div className="mb-4">
                            <label className="block mb-1">Title</label>
                            <input
                                type="text"
                                value={newTask.title}
                                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                                className="border rounded w-full px-3 py-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Course</label>
                            <input
                                type="text"
                                value={newTask.course}
                                onChange={(e) => setNewTask({ ...newTask, course: e.target.value })}
                                className="border rounded w-full px-3 py-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Subject</label>
                            <input
                                type="text"
                                value={newTask.subject}
                                onChange={(e) => setNewTask({ ...newTask, subject: e.target.value })}
                                className="border rounded w-full px-3 py-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Description</label>
                            <WYSIWYGEditor 
                                value={newTask.description} 
                                onChange={(value) => setNewTask({ ...newTask, description: value })} 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Priority</label>
                            <select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
                                className="border rounded w-full px-3 py-2"
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        <button
                            onClick={handleAddTask}
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                        >
                            Create Task
                        </button>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 ml-2"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Task Columns */}
            <div className="grid grid-cols-4 gap-4 mt-6">
                {['to-do', 'in-progress', 'completed', 'cancelled'].map((status) => (
                    <div key={status} className="bg-gray-100 rounded p-4">
                        <h3 className="font-bold text-lg mb-2">{status.replace('-', ' ').toUpperCase()}</h3>
                        {tasks.filter(task => task.status === status).map((task, index) => (
                            <div key={index} className="bg-white rounded shadow p-2 mb-2">
                                <h4 className="font-semibold">{task.title}</h4>
                                {/* Render HTML description */}
                                <div dangerouslySetInnerHTML={{ __html: task.description }} />
                                <div className="flex items-center">
                                    <div
                                        className={`w-2.5 h-2.5 rounded-full mr-2 ${
                                            task.priority === 'high' ? 'bg-red-500' :
                                            task.priority === 'medium' ? 'bg-blue-500' :
                                            'bg-green-500'
                                        }`}
                                    />
                                    <span>{task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminKanbanPage;
