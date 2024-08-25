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
            className={`h-screen bg-[#FFFFFF] dark:bg-[#262626] dark:border-[#404040] border-[#E5E7EB] border-r-[2px] text-white p-4 flex flex-col items-start ${
                isCollapsed ? 'w-13' : 'w-55'
            } transition-all duration-400`}
        >
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="mb-4 focus:outline-none bg-blue-400 rounded text-white"
            >
                {isCollapsed ? <FiChevronRight size={24} /> : <FiChevronLeft size={24} />}
            </button>
            <ul className="flex flex-col items-start">
                <li className="mb-2">
                    <a href="/dashboard" className="flex items-center dark:text-gray-400 text-black hover:text-blue-400">
                        <FiHome size={24} />
                        {!isCollapsed && <span className="ml-2 dark:text-gray-400 font-semibold">Home</span>}
                    </a>
                </li>
                <li className="mb-2">
                    <a href="/grade" className="flex items-center dark:text-gray-400 text-black hover:text-blue-400">
                        <GrResources size={24} />
                        {!isCollapsed && <span className="ml-2 dark:text-gray-400 font-semibold">Recursos</span>}
                    </a>
                </li>
                <li className="mb-2">
                    <a href="/fils" className="flex items-center dark:text-gray-400 text-black hover:text-blue-400">
                        <IoMdCloudUpload size={24} />
                        {!isCollapsed && <span className="ml-2 dark:text-gray-400 font-semibold text-black">Ficheiros Up</span>}
                    </a>
                </li>
                <li className="mb-2">
                    <a href="/fileupload" className="flex items-center dark:text-gray-400 text-black hover:text-blue-400">
                        <IoMdCloudDownload size={24} />
                        {!isCollapsed && <span className="ml-2 dark:text-gray-400 font-semibold">Ficheiros Down</span>}
                    </a>
                </li>
                <li className="mb-2">
                    <a href="/quiz" className="flex items-center dark:text-gray-400 text-black hover:text-blue-400">
                        <MdOutlineQuiz size={24} />
                        {!isCollapsed && <span className="ml-2 dark:text-gray-400 font-semibold">Quiz</span>}
                    </a>
                </li>
                <li className="mb-2">
                    <a href="/profiles" className="flex items-center dark:text-gray-400 text-black hover:text-blue-400">
                        <FiUser size={24} />
                        {!isCollapsed && <span className="ml-2 dark:text-gray-400 font-semibold">Perfil</span>}
                    </a>
                </li>
                <li className="mb-2">
                    <a href="/settings" className="flex items-center dark:text-gray-400 text-black hover:text-blue-400">
                        <FiSettings size={24} />
                        {!isCollapsed && <span className="ml-2 dark:text-gray-400 font-semibold text-black">Definicoes</span>}
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="flex items-center dark:text-gray-400 text-black hover:text-blue-400">
                        <FiLogOut size={24} />
                        {!isCollapsed && <span className="ml-2 font-semibold dark:text-gray-400">Logout</span>}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default DashSidebar;
