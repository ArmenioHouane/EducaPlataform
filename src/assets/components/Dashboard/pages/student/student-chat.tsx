import React from 'react';
import Chat from '../chat'; // Adjust the import path as needed
import SampleDashboard from '../../dashboard'; // Adjust the import path as needed

const StudentChat: React.FC = () => {
  return (
    <SampleDashboard>
      <Chat userRole="student" />
    </SampleDashboard>
  );
};

export default StudentChat;
