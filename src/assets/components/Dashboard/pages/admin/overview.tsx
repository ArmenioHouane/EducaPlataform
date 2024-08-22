import React from 'react';
import SampleDashboard from '../../dashboard';


const Overview: React.FC = () => {
  return (

<SampleDashboard>





    <div className="overview-container p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200">
      {/* Header: Title and Add User Button */}
      <div className="header flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <button className="add-user-button px-4 py-2 bg-blue-600 text-white rounded-md dark:bg-blue-500">
          Add User
        </button>
      </div>

      {/* Cards Section */}
      <div className="cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="card p-4 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <h2 className="text-lg font-semibold">Card 1</h2>
          <p>Card description or content goes here.</p>
        </div>
        <div className="card p-4 border border-gray-300 rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600">
          <h2 className="text-lg font-semibold">Card 2</h2>
          <p>Card description or content goes here.</p>
        </div>
        <div className="card p-4 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <h2 className="text-lg font-semibold">Card 3</h2>
          <p>Card description or content goes here.</p>
        </div>
        <div className="card p-4 border border-gray-300 rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600">
          <h2 className="text-lg font-semibold">Card 4</h2>
          <p>Card description or content goes here.</p>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-section mb-6">
        <div className="table-header flex justify-between items-center mb-4">
          <div className="table-titles flex space-x-4">
            <span className="title text-lg font-semibold cursor-pointer">All Subscribed Students</span>
            <span className="title text-lg font-semibold cursor-pointer">Unsubscribed Students</span>
            <span className="title text-lg font-semibold cursor-pointer">Valid Accounts</span>
          </div>
          <div className="table-controls flex space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="search-input p-2 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            />
            <button className="sort-button px-4 py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-gray-600 dark:text-gray-200">
              Sort
            </button>
            <button className="filter-button px-4 py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-gray-600 dark:text-gray-200">
              Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="p-2 border border-gray-300 dark:border-gray-600">
                <input type="checkbox" />
              </th>
              <th className="p-2 border border-gray-300 dark:border-gray-600">Name</th>
              <th className="p-2 border border-gray-300 dark:border-gray-600">Address</th>
              <th className="p-2 border border-gray-300 dark:border-gray-600">Signed Course</th>
              <th className="p-2 border border-gray-300 dark:border-gray-600">Email</th>
              <th className="p-2 border border-gray-300 dark:border-gray-600">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700">
              <td className="p-2 border border-gray-300 dark:border-gray-600">
                <input type="checkbox" />
              </td>
              <td className="p-2 border border-gray-300 dark:border-gray-600">John Doe</td>
              <td className="p-2 border border-gray-300 dark:border-gray-600">123 Main St.</td>
              <td className="p-2 border border-gray-300 dark:border-gray-600">Course Name</td>
              <td className="p-2 border border-gray-300 dark:border-gray-600">john.doe@example.com</td>
              <td className="p-2 border border-gray-300 dark:border-gray-600">555-555-5555</td>
            </tr>
            {/* Repeat for more rows */}
          </tbody>
        </table>
      </div>

      {/* Download Section */}
      <div className="download-section">
        <button className="download-button px-4 py-2 bg-blue-600 text-white rounded-md dark:bg-blue-500">
          Download List
        </button>
      </div>
    </div>


    </SampleDashboard>
  );
};

export default Overview;
