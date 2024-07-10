// App.tsx
import React from 'react';import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/components/pages/Home';
import { FooterWithSitemap } from './assets/components/Shared/Footer';
import { ComplexNavbar } from './assets/components/Shared/Header';
import { ThemeProvider } from './assets/components/context/ThemeContext'; 
import Cursos from './assets/components/pages/Cursos';
import Feature from './assets/components/pages/Feature';
import Contact from './assets/components/pages/Contact';
import Profile from './assets/components/pages/Profile';
import Login from './assets/components/Auth/Login';
import Pricing from './assets/components/pages/Pricing';
import { Faq } from './assets/components/pages/faq';
import { Sample } from './assets/components/Dashboard/Sample';
import { Checkout } from './assets/components/pagamento/Checkout';
import Pagar from './assets/components/pagamento/Pagar';
import Pagamentoconfirmado from './assets/components/pagamento/pagamento';
import { Signup } from './assets/components/Auth/Signup';
import Recovery from './assets/components/Auth/Recovery';
import Change from './assets/components/Auth/Alterar';

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
            <Route path="/sample" element={<Sample />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/pagar" element={<Pagar />} />
            <Route path="/pagamentoconfirmado" element={<Pagamentoconfirmado />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/recovery" element={<Recovery />} />
            <Route path="/change" element={<Change />} />


             </Routes>
           
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;

