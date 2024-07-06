// App.tsx
import React from 'react';import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/components/pages/Home';
import { FooterWithSitemap } from './assets/components/Shared/Footer';
import { ComplexNavbar } from './assets/components/Shared/Header';
import { ThemeProvider } from './assets/components/context/ThemeContext'; 
import Cursos from './assets/components/pages/Cursos';
import Feature from './assets/components/pages/Feature';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="bg-seaShell dark:bg-backdarkdm">
        <Router>
          <ComplexNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Cursos />} />
             </Routes>
             <Feature />
          <FooterWithSitemap />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;

