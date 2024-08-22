// components/SettingsPage.tsx
import React, { useState } from 'react';
import SampleDashboard from '../dashboard';

const SettingsPage: React.FC = () => {
    const [settings, setSettings] = useState({
        emailNotifications: true,
        darkMode: false,
    });

    const handleToggle = (setting: keyof typeof settings) => {
        setSettings(prevSettings => ({
            ...prevSettings,
            [setting]: !prevSettings[setting],
        }));
    };

    return (
        <SampleDashboard>


        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-semibold mb-4">Settings</h1>
            <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-2">General</h2>
                <div className="flex items-center mb-4">
                    <label className="mr-4">Email Notifications</label>
                    <button
                        onClick={() => handleToggle('emailNotifications')}
                        className={`px-4 py-2 rounded ${settings.emailNotifications ? 'bg-green-500' : 'bg-red-500'} text-white`}
                    >
                        {settings.emailNotifications ? 'Enabled' : 'Disabled'}
                    </button>
                </div>
                <div className="flex items-center">
                    <label className="mr-4">Dark Mode</label>
                    <button
                        onClick={() => handleToggle('darkMode')}
                        className={`px-4 py-2 rounded ${settings.darkMode ? 'bg-gray-700' : 'bg-gray-400'} text-white`}
                    >
                        {settings.darkMode ? 'On' : 'Off'}
                    </button>
                </div>
            </div>
        </div>
        </SampleDashboard>
    );
};

export default SettingsPage;
