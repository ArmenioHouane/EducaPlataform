import { useState } from 'react';

export const Dashview = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <nav className="block w-full top-0 h-10 fixed px-4 py-3 mx-auto text-white shadow-md bg-gradient-to-tr from-blue-gray-900 to-blue-gray-800">
       <div className='bg-black '>

       </div>
      </nav>

      <div
        className={`fixed block h-full ${isCollapsed ? 'w-20' : 'w-full max-w-[20rem]'} flex-col bg-[#303F46] text-gray-700 shadow-xl shadow-blue-gray-900/5`}
      >        <button onClick={toggleSidebar} className="text-white bg-black p-2 rounded-xl hover:bg-bgHoverlm">
          {isCollapsed ? 'Expand' : 'Collapse'}
        </button>
      </div>
    </>
  );
};
