import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

import { wagmiConfig } from './config/wagmiConfig';
import BlockchainPanel from './components/layout/BlockchainPanel';

// Public Pages
import Home from './pages/Public/Home';
import About from './pages/Public/About';
import Products from './pages/Public/Products';
import Tenders from './pages/Public/Tenders';
import CSR from './pages/Public/CSR';
import Careers from './pages/Public/Careers';
import Investors from './pages/Public/Investors';
import Contact from './pages/Public/Contact';

// Auth Pages
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

// Dashboard Pages
import Admin from './pages/Dashboard/Admin';
import Manager from './pages/Dashboard/Manager';
import Worker from './pages/Dashboard/Worker';
import Projects from './pages/Dashboard/Projects';
import Documents from './pages/Dashboard/Documents';
import Feedback from './pages/Dashboard/Feedback';

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={lightTheme({ accentColor: '#2563eb' })}>
          <Router>
            <div className="flex flex-col min-h-screen">
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/tenders" element={<Tenders />} />
                  <Route path="/csr" element={<CSR />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/investors" element={<Investors />} />
                  <Route path="/contact" element={<Contact />} />
                  
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  
                  <Route path="/dashboard/admin" element={<Admin />} />
                  <Route path="/dashboard/manager" element={<Manager />} />
                  <Route path="/dashboard/worker" element={<Worker />} />
                  <Route path="/dashboard/projects" element={<Projects />} />
                  <Route path="/dashboard/documents" element={<Documents />} />
                  <Route path="/feedback" element={<Feedback />} />
                </Routes>
              </div>
              <BlockchainPanel />
            </div>
          </Router>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;