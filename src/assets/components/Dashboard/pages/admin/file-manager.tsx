import React, { useState } from 'react';

const FileManager = () => {
  const [activePage, setActivePage] = useState('files');

  const handleNavigation = (page: string) => {
    setActivePage(page);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'files':
        return <p className="p-4">You are viewing your files.</p>;
      case 'upload':
        return <p className="p-4">Upload your files here.</p>;
      case 'recent':
        return <p className="p-4">These are your recent files.</p>;
      case 'trash':
        return <p className="p-4">View deleted files in the trash.</p>;
      default:
        return <p className="p-4">Welcome to the file manager.</p>;
    }
  };

  return (
    <div className="flex h-full">
      <div className="w-64 bg-gray-800 text-white">
        <ul className="flex flex-col">
          <li
            className={`p-4 cursor-pointer ${
              activePage === 'files' ? 'bg-gray-600' : ''
            }`}
            onClick={() => handleNavigation('files')}
          >
            Files
          </li>
          <li
            className={`p-4 cursor-pointer ${
              activePage === 'upload' ? 'bg-gray-600' : ''
            }`}
            onClick={() => handleNavigation('upload')}
          >
            Upload
          </li>
          <li
            className={`p-4 cursor-pointer ${
              activePage === 'recent' ? 'bg-gray-600' : ''
            }`}
            onClick={() => handleNavigation('recent')}
          >
            Recent
          </li>
          <li
            className={`p-4 cursor-pointer ${
              activePage === 'trash' ? 'bg-gray-600' : ''
            }`}
            onClick={() => handleNavigation('trash')}
          >
            Trash
          </li>
        </ul>
      </div>
      <div className="flex-grow bg-gray-100">
        {renderContent()}
      </div>
    </div>
  );
};

export default FileManager;
