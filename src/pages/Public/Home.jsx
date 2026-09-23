import { Link } from 'react-router-dom';
import React from 'react';
import { 
  Search, Bell, User, Menu, ChevronRight, UserCog, Users, 
  Briefcase, FolderKanban, TrendingUp, FileText, FolderOpen, 
  MessageSquare, Shield, Settings, Globe, Lightbulb 
} from 'lucide-react';
// import { ConnectButton } from '@rainbow-me/rainbowkit'; // Web3 integration

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Top Header / Navigation */}
      <header className="bg-white shadow-sm px-6 py-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-blue-800">
            <h1 className="text-3xl font-bold italic tracking-tighter">BEL</h1>
            <div className="leading-tight text-sm font-semibold">
              <p>Bharat Electronics Limited</p>
              <p className="text-xs text-gray-500 font-normal">Quality, Technology, Innovation.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-3 pr-10 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-blue-500"
              />
              <Search className="absolute right-2 top-1.5 text-gray-400 w-4 h-4" />
            </div>
            <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
            <User className="w-5 h-5 text-gray-600 cursor-pointer" />
            <Menu className="w-6 h-6 text-gray-600 cursor-pointer" />
            {/* <ConnectButton /> */}
          </div>
        </div>

        <nav className="flex gap-6 text-sm font-semibold text-gray-700">
          <Link to="/" className="text-blue-600 border-b-2 border-blue-600 pb-1">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About Us</Link>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <Link to="/tenders" className="hover:text-blue-600">Tenders</Link>
          <Link to="/csr" className="hover:text-blue-600">CSR</Link>
          <Link to="/investors" className="hover:text-blue-600">Investors</Link>
          <Link to="/careers" className="hover:text-blue-600">Careers</Link>
        </nav>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Column: Hero Section & Bottom Icons */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          
          {/* Hero Banner */}
          <div className="bg-blue-900 text-white rounded-lg p-10 flex flex-col justify-center min-h-[300px] relative overflow-hidden shadow-md">
            {/* Abstract Background Placeholder */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-light mb-2">
                Technology <br />
                <span className="font-bold">for a Secure India</span>
              </h2>
              <p className="text-lg text-blue-200 mb-6">Innovating for a Better Tomorrow</p>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded text-sm font-semibold flex items-center gap-2 transition-colors w-fit">
                Explore Our Solutions <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Defence', icon: <Shield className="w-8 h-8 mb-2" /> },
              { title: 'Non-Defence', icon: <Settings className="w-8 h-8 mb-2" /> },
              { title: 'Cyber & Space', icon: <Globe className="w-8 h-8 mb-2" /> },
              { title: 'R&D & Innovation', icon: <Lightbulb className="w-8 h-8 mb-2" /> },
            ].map((cat, i) => (
              <div key={i} className="bg-white border border-gray-200 p-6 rounded-lg flex flex-col items-center justify-center text-center text-blue-900 font-semibold shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                {cat.icon}
                <span className="text-sm">{cat.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Quick Links Sidebar */}
        <div className="bg-blue-900 rounded-lg text-white shadow-md overflow-hidden">
          <div className="bg-blue-950 p-4 border-b border-blue-800">
            <h3 className="font-bold text-lg">Quick Links</h3>
          </div>
          <ul className="flex flex-col text-sm">
            {[
              { name: 'Administrator Page', icon: <UserCog size={16}/> },
              { name: 'Management / Manager Page', icon: <Users size={16}/> },
              { name: 'Workers Details', icon: <User size={16}/> },
              { name: 'Business Deal Registration (Entrepreneurs / MSMEs)', icon: <Briefcase size={16}/> },
              { name: 'Projects', icon: <FolderKanban size={16}/> },
              { name: 'Fund Tracking', icon: <TrendingUp size={16}/> },
              { name: 'Tender Deals', icon: <FileText size={16}/> },
              { name: 'Documents / Folder', icon: <FolderOpen size={16}/> },
              { name: 'Reviews / Feedback', icon: <MessageSquare size={16}/> },
            ].map((link, i) => (
              <li key={i}>
                <Link to="/your-target-page" className="flex items-start gap-3 px-4 py-3 border-b border-blue-800 hover:bg-blue-800 transition-colors">
                  <span className="mt-0.5 text-blue-300">{link.icon}</span>
                  <span className="leading-tight">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;