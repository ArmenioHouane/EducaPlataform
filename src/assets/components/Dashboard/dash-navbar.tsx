// components/dash-navbar.tsx
import React from 'react';
import ThemePlugin from '../Shared/theme-plugin';

const DashNavbar: React.FC = () => {
    return (
        <nav className="w-full h-16 bg-gray-900 text-white flex items-center px-4">
            <div className="flex-grow">
                <h1 className="text-xl font-semibold">My Dashboard</h1>
            </div>
            <div>
                <button className="bg-gray-700 p-2 mr-4 rounded">Notifications</button>
                <ThemePlugin />
            </div>
        </nav>
    );
};

export default DashNavbar;
