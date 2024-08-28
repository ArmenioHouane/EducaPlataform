import React from 'react';
import SampleDashboard from '../../dashboard';

const CreateUser: React.FC = () => {
  return (
    <SampleDashboard>




    <div className="quiz-page">
    <div className="create-user-container p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200">
      {/* User Avatar and Description */}
      <div className="user-info flex items-center mb-6">
        <div className="avatar mr-4">
          <img src="#" alt="User Avatar" className="user-avatar w-24 h-24 rounded-full" />
        </div>
        <div className="user-description">
          <p className="title text-xl font-bold mb-2">Create new user</p>
          <p>Create a new user account for your system.</p>
        </div>
      </div>

      {/* Form to Upload Photo and Input User Details */}
      <div className="user-form">
        <form>
          <div className="form-group mb-4">
            <label htmlFor="avatar" className="block mb-2">Upload Photo</label>
            <input 
              type="file" 
              id="avatar" 
              name="avatar" 
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter name" 
              className="block w-full p-2 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter email" 
              className="block w-full p-2 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="phone" className="block mb-2">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              placeholder="Enter phone number" 
              className="block w-full p-2 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="address" className="block mb-2">Address</label>
            <input 
              type="text" 
              id="address" 
              name="address" 
              placeholder="Enter address" 
              className="block w-full p-2 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="province" className="block mb-2">Province</label>
            <input 
              type="text" 
              id="province" 
              name="province" 
              placeholder="Enter province" 
              className="block w-full p-2 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="city" className="block mb-2">City</label>
            <input 
              type="text" 
              id="city" 
              name="city" 
              placeholder="Enter city" 
              className="block w-full p-2 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            />
          </div>

          <div className="form-actions flex justify-between">
            <button 
              type="button" 
              className="cancel-button px-4 py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-gray-600 dark:text-gray-200"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="add-user-button px-4 py-2 bg-blue-600 text-white rounded-md dark:bg-blue-500"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
      
     
  
    </div>


</SampleDashboard>
  );
};

export default CreateUser;
