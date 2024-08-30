import React, { useState } from 'react';
import Modal from 'react-modal';
import WYSIWYGEditor from './WYSIWYGEditor';

interface TaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddTask: (task: { title: string; course: string; subject: string; status: 'to-do'; description: string }) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onAddTask }) => {
    const [title, setTitle] = useState('');
    const [course, setCourse] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddTask({
            title,
            course,
            subject,
            status: 'to-do', // Default status
            description,
        });
        setTitle('');
        setCourse('');
        setSubject('');
        setDescription('');
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
            <h2 className="text-xl font-bold mb-4">Create Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border rounded w-full px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Course</label>
                    <input
                        type="text"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="border rounded w-full px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Subject</label>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="border rounded w-full px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Description</label>
                    <WYSIWYGEditor value={description} onChange={setDescription} />
                </div>
                <button
                    type="submit"
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                    Create Task
                </button>
                <button
                    type="button"
                    onClick={onClose}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 ml-2"
                >
                    Cancel
                </button>
            </form>
        </Modal>
    );
};

export default TaskModal;
