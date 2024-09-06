import React, { useState, useEffect } from 'react';
import ThemePlugin from '../../../Shared/theme-plugin';
import BellIcon from '../../../../svg/bellicon';
import SearchBox from '../../searchbox';
import QuestionIcon from '../../../../svg/questionicon';
import { Link } from 'react-router-dom';

interface NotificationIconProps {
  hasNotification: boolean;
}

const NotificationIcon: React.FC<NotificationIconProps> = ({ hasNotification }) => {
  return (
    <div className="relative inline-block group">
      <Link to="/notifications">
        <div className="p-2  rounded-full  group-hover:bg-gray-200  dark:group-hover:bg-gray-700 transition-colors duration-200 ease-in-out">
          <BellIcon className="w-5 h-6 hover:text-blue-400 dark:hover:text-blue-400  text-[#262626] dark:text-[white]" />
        </div>
      </Link>
      {hasNotification && (
        <div className="absolute top-0 right-0 mr-1 w-4 h-4 bg-[#f00] rounded-full animate-ping"></div>
      )}
    </div>
  );
};

const ProfileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center space-x-2"
      >
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
          <Link to="/profile" className="block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
            View Profile
          </Link>
          <Link to="/settings" className="block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
            Settings
          </Link>
          <Link to="/logout" className="block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

const AdminNavbar: React.FC = () => {
  const hasNotification = true; 
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSearchVisible(false); // Hide search when resizing to desktop
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSearchVisibility = () => setIsSearchVisible(!isSearchVisible);
 
  return (
    <nav className="w-full h-16 bg-[#FFFFFF] dark:bg-[#262626]  dark:border-[#404040] border-[#E5E7EB] border-b-[2px]
     text-white flex items-center px-4">
      <div className="flex-grow"></div>
      <div className="flex items-center space-x-4">
        <SearchBox isVisible={isSearchVisible} toggleVisibility={toggleSearchVisibility} />
        <NotificationIcon className="hover:text-blue-400 dark:hover:text-blue-400"
         hasNotification={hasNotification} />
        <div className="border-l-[1px]  dark:border-[#404040] border-[#E5E7EB]  h-6 mx-4"></div>
        <Link to="/help" className="p-2 rounded-full border-black  hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 ease-in-out">
          <QuestionIcon className="w-6 h-6 text-[#262626] dark:text-[white] hover:text-blue-400 dark:hover:text-blue-400" />
        </Link>
        <div className="border-l  dark:border-[#404040] border-[#E5E7EB]  h-6 mx-4"></div>
        <ProfileMenu />
        <div className="border-l  dark:border-[#404040] border-[#E5E7EB]  h-6 mx-4"></div>
        <ThemePlugin />
      </div>
    </nav>
  );
};

export default AdminNavbar;
