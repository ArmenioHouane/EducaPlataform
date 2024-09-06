import React from 'react';

interface Task {
    id: number;
    title: string;
    course: string;
    subject: string;
    status: 'to-do' | 'in-progress' | 'completed' | 'cancelled';
    description: string;
}

interface TaskCardProps {
    task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    return (
        <div className="border rounded p-2 mb-2">
            <h3 className="font-bold">{task.title}</h3>
            <p className="text-sm text-gray-500">Course: {task.course}</p>
            <p className="text-sm text-gray-500">Subject: {task.subject}</p>
            <p className="text-sm">{task.description}</p>
            <div className="mt-2">
                <span className={`inline-block bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-xs font-semibold`}>
                    {task.status.replace('-', ' ').toUpperCase()}
                </span>
            </div>
        </div>
    );
};

export default TaskCard;
