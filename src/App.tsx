// App.tsx
import React from 'react';import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/components/pages/Home';
import { ThemeProvider } from './assets/components/context/ThemeContext'; 
import Cursos from './assets/components/pages/Cursos';
import Feature from './assets/components/pages/Feature';
import Contact from './assets/components/pages/Contact';
import Profile from './assets/components/pages/Profile';
import Login from './assets/components/Auth/Login';
import Pricing from './assets/components/pages/Pricing';
import { Faq } from './assets/components/pages/faq';
import { Checkout } from './assets/components/pagamento/Checkout';
import Pagar from './assets/components/pagamento/Pagar';
import Pagamentoconfirmado from './assets/components/pagamento/pagamento';
import { Signup } from './assets/components/Auth/Signup';
import Recovery from './assets/components/Auth/Recovery';
import Change from './assets/components/Auth/Alterar';
import Dashboard from './assets/components/Dashboard/Sample';
import AdminDashboard from './assets/components/Dashboard/pages/admin/admindashboard';
import SettingsPage from './assets/components/Dashboard/pages/settings';
import ProfilesPage from './assets/components/Dashboard/pages/profiles';
import GradePage from './assets/components/Dashboard/pages/grade';
import Quiz from './assets/components/Dashboard/pages/quiz';
import Student from './assets/components/Dashboard/pages/admin/student-list';
import Overview from './assets/components/Dashboard/pages/admin/overview';
import FileManager from './assets/components/Dashboard/pages/admin/file-manager';
import FileUpload from './assets/components/Dashboard/pages/admin/fileupload';
import Files from './assets/components/Dashboard/pages/files';
import SituacaoFinanceira from './assets/components/Dashboard/pages/admin/situacaofinanceira';
import AdminChat from './assets/components/Dashboard/pages/admin/admin-chat';
import StudentChat from './assets/components/Dashboard/pages/student/student-chat';
import AdminKanbanPage from './assets/components/Dashboard/pages/admin/admin-kanban';


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="bg-seaShell dark:bg-backdarkdm">
        <Router>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/pagar" element={<Pagar />} />
            <Route path="/pagamentoconfirmado" element={<Pagamentoconfirmado />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/recovery" element={<Recovery />} />
            <Route path="/change" element={<Change />} />
            <Route path="/dashboard" element={<Dashboard />}      />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profiles" element={<ProfilesPage />} />
            <Route path="/grade" element={<GradePage />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/student" element={<Student />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/filemanager" element={<FileManager />} />
            <Route path="/fileupload" element={<FileUpload />} />
            <Route path="/files" element={<Files />} />
            <Route path="/situacao" element={<SituacaoFinanceira />} />
            <Route path="/adminchat" element={<AdminChat />} />
            <Route path="/studentchat" element={<StudentChat />} />
            <Route path="/kanban" element={<AdminKanbanPage />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />




             </Routes>
           
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;

