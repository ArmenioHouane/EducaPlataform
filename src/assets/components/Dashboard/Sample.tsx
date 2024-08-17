import React from 'react';

import {Sidebar} from './sidebar';
import { Dashview } from './dashview';


const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen dark:bg-[#2F3D44]">
     <Dashview />
    </div>
  );
};

export default Dashboard;
