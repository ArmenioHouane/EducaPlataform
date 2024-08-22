import React, { useState } from 'react';
import { FiHome, FiUser, FiSettings,  FiLogOut, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { MdOutlineQuiz } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { IoMdCloudUpload } from "react-icons/io";
import { IoMdCloudDownload } from "react-icons/io";

const DashSidebar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div
            className={`h-screen bg-[#8a80808c] dark:bg-backdarkdm text-white p-4 flex flex-col items-start ${
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
                    <a href="/dashboard" className="flex items-center hover:text-gray-400">
                        <FiHome size={24} />
                        {!isCollapsed && <span className="ml-2">Home</span>}
                    </a>
                </li>
                <li className="mb-2">
                    <a href="/grade" className="flex items-center hover:text-gray-400">
                        <GrResources size={24} />
                        {!isCollapsed && <span className="ml-2">Recursos</span>}
                    </a>
                </li>
                <li className="mb-2">
                    <a href="/fileupload" className="flex items-center hover:text-gray-400">
                        <IoMdCloudUpload size={24} />
                        {!isCollapsed && <span className="ml-2">Ficheiros Up</span>}
                    </a>
                </li>
                <li className="mb-2">
                    <a href="/fileupload" className="flex items-center hover:text-gray-400">
                        <IoMdCloudDownload size={24} />
                        {!isCollapsed && <span className="ml-2">Ficheiros Down</span>}
                    </a>
                </li>
                <li className="mb-2">
                    <a href="/quiz" className="flex items-center hover:text-gray-400">
                        <MdOutlineQuiz size={24} />
                        {!isCollapsed && <span className="ml-2">Quiz</span>}
                    </a>
                </li>
                <li className="mb-2">
                    <a href="/profiles" className="flex items-center hover:text-gray-400">
                        <FiUser size={24} />
                        {!isCollapsed && <span className="ml-2">Perfil</span>}
                    </a>
                </li>
                <li className="mb-2">
                    <a href="/settings" className="flex items-center hover:text-gray-400">
                        <FiSettings size={24} />
                        {!isCollapsed && <span className="ml-2">Definicoes</span>}
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
