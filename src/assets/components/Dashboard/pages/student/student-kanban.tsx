// StudentKanbanPage.tsx
import React, { useState } from 'react';
import SampleDashboard from '../../dashboard';

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  status: string; // e.g., "To Do", "In Progress", "Review", "Completed"
}

interface Column {
  id: number;
  title: string;
  tasks: Task[];
}

const initialColumns: Column[] = [
  { id: 1, title: 'To Do', tasks: [] },
  { id: 2, title: 'In Progress', tasks: [] },
  { id: 3, title: 'Review', tasks: [] },
  { id: 4, title: 'Completed', tasks: [] }
];

const StudentKanbanPage: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>(initialColumns);

  // Logic for dragging and dropping tasks would be implemented here

  return (
    <SampleDashboard>
      <div className="flex overflow-x-auto p-4">
        {columns.map(column => (
          <div key={column.id} className="min-w-[250px] mx-2 bg-gray-100 rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold mb-2">{column.title}</h2>
            {column.tasks.map(task => (
              <div key={task.id} className="bg-white rounded-lg shadow-sm p-2 mb-2">
                <h3 className="font-semibold">{task.title}</h3>
                <p>{task.description}</p>
                <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Mark as Complete</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </SampleDashboard>
  );
};

export default StudentKanbanPage;
