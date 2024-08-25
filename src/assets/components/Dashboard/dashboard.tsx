import React, { ReactNode } from 'react';
import DashSidebar from './dash-sidebar';
import DashNavbar from './dash-navbar';

interface SampleDashboardProps {
    children: ReactNode;
}

const SampleDashboard: React.FC<SampleDashboardProps> = ({ children }) => {
    return (
        <div className="flex h-screen dark:bg-[#171717]">
            <DashSidebar />
            <div className="flex-grow flex flex-col">
                <DashNavbar />
                <div className="flex-grow p-6 bg-gray-100 dark:bg-[#171717] overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SampleDashboard;
