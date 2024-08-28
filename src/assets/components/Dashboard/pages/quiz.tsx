import React from 'react';
import SampleDashboard from '../dashboard';
import { useState } from 'react';
import { FaFile, FaDownload, FaList, FaThLarge } from 'react-icons/fa';

const Quiz: React.FC = () => {
    const [viewAsList, setViewAsList] = useState(false);
  return (
    <SampleDashboard>




    <div className="quiz-page">
        


   


  <div className="files-container p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200">
    {/* User Card */}
    <div className="user-card flex items-center mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg w-11/12 mx-auto">
      <div className="avatar mr-4">
        <img src="#" alt="User Avatar" className="w-16 h-16 rounded-full" />
      </div>
      <div className="username">
        <p className="text-xl font-semibold">Username</p>
      </div>
    </div>

    {/* Table Section */}
    <div className="table-section mb-6">
      {/* Search Component */}
      <input
        type="text"
        placeholder="Search files"
        className="search-input p-2 w-full border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 mb-4"
      />

      {/* Sorting and Filtering */}
      <div className="sorting-filtering flex justify-between items-center mb-4">
        <div className="filters flex space-x-4">
          {/* Date Filter */}
          <div className="dropdown">
            <button className="sort-button px-4 py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-gray-600 dark:text-gray-200">
              Date
            </button>
            <div className="dropdown-content hidden bg-white dark:bg-gray-700 mt-2 rounded-lg shadow-lg p-2">
              <p className="cursor-pointer">Asc</p>
            </div>
          </div>

          {/* Type Filter */}
          <div className="dropdown">
            <button className="sort-button px-4 py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-gray-600 dark:text-gray-200">
              Type
            </button>
            <div className="dropdown-content hidden bg-white dark:bg-gray-700 mt-2 rounded-lg shadow-lg p-2">
              <p className="cursor-pointer">All Files</p>
              <p className="cursor-pointer">Documents</p>
              <p className="cursor-pointer">Images</p>
              <p className="cursor-pointer">Video</p>
              <p className="cursor-pointer">Audio</p>
            </div>
          </div>

          {/* Sort Filter */}
          <div className="dropdown">
            <button className="sort-button px-4 py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-gray-600 dark:text-gray-200">
              Sort
            </button>
            <div className="dropdown-content hidden bg-white dark:bg-gray-700 mt-2 rounded-lg shadow-lg p-2">
              <p className="cursor-pointer">Newest First</p>
              <p className="cursor-pointer">Oldest File</p>
              <p className="cursor-pointer">A to Z</p>
              <p className="cursor-pointer">Z to A</p>
            </div>
          </div>
        </div>

        {/* View Toggle */}
        <button
          onClick={() => setViewAsList(!viewAsList)}
          className="toggle-button px-4 py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-gray-600 dark:text-gray-200 flex items-center"
        >
          {viewAsList ? <FaThLarge /> : <FaList />}
          <span className="ml-2">{viewAsList ? 'Card View' : 'List View'}</span>
        </button>
      </div>

      {/* Cards or List View */}
      <div className={viewAsList ? "list-view" : "card-view grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"}>
        {/* Example File Card */}
        {Array.from({ length: 10 }).map((_, idx) => (
          <div
            key={idx}
            className="file-card p-4 bg-blue-100 dark:bg-blue-900 rounded-lg"
          >
            {/* File Icon and Name */}
            <div className="file-info flex items-center mb-4">
              <FaFile className="text-blue-600 dark:text-blue-300 mr-4" size={24} />
              <div>
                <p className="font-bold">File Name {idx + 1}</p>
                <p className="text-sm">Type: Document</p>
              </div>
            </div>
            
            {/* Download Button */}
            <button className="download-button px-4 py-2 bg-blue-600 text-white rounded-md dark:bg-blue-500 flex items-center justify-center w-full">
              <FaDownload className="mr-2" />
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>




      
    
    </div>


</SampleDashboard>
  );
};

export default Quiz;
