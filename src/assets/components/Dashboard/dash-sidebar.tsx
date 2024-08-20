import React, { useState } from 'react';
import { FiHome, FiUser, FiSettings, FiLogOut, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const DashSidebar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div
            className={`h-screen bg-gray-800 text-white p-4 flex flex-col items-start ${
                isCollapsed ? 'w-16' : 'w-64'
            } transition-all duration-300`}
        >
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="mb-4 focus:outline-none bg-blue-400 rounded text-white"
            >
                {isCollapsed ? <FiChevronRight size={24} /> : <FiChevronLeft size={24} />}
            </button>
            <ul className="flex flex-col items-start">
                <li className="mb-2">
                    <a href="#" className="flex items-center hover:text-gray-400">
                        <FiHome size={24} />
                        {!isCollapsed && <span className="ml-2">Home</span>}
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="flex items-center hover:text-gray-400">
                        <FiUser size={24} />
                        {!isCollapsed && <span className="ml-2">Profile</span>}
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="flex items-center hover:text-gray-400">
                        <FiSettings size={24} />
                        {!isCollapsed && <span className="ml-2">Settings</span>}
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="flex items-center hover:text-gray-400">
                        <FiLogOut size={24} />
                        {!isCollapsed && <span className="ml-2">Logout</span>}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default DashSidebar;
