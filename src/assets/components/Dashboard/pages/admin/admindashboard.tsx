import React, { ReactNode } from 'react';
import AdminNavbar from '../components/navadmin';
import AdminSidebar from '../components/sideadmin';

interface AdminDashboardProps {
    children: ReactNode;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ children }) => {
    return (
        <div className="flex h-screen dark:bg-[#171717]">
            <AdminSidebar />
            <div className="flex-grow flex flex-col">
                <AdminNavbar />
                <div className="flex-grow p-6 bg-gray-100 dark:bg-[#171717] overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
