// AdminChat.tsx
import React from 'react';
import Chat from '../chat';
import SampleDashboard from '../../dashboard'; 

const AdminChat: React.FC = () => {
    return (
        <SampleDashboard>
          <Chat userRole="admin" />
        </SampleDashboard>
      );
};

export default AdminChat;
