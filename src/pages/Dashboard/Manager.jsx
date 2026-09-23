import React from 'react';
import { 
  LayoutDashboard, FolderKanban, Users, FileText, 
  TrendingUp, FileBarChart, FolderOpen 
} from 'lucide-react';

const Manager = () => {
  const sidebarLinks = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, active: true },
    { name: 'Projects', icon: <FolderKanban size={18} />, active: false },
    { name: 'Team / Workers', icon: <Users size={18} />, active: false },
    { name: 'Tenders', icon: <FileText size={18} />, active: false },
    { name: 'Fund Utilization', icon: <TrendingUp size={18} />, active: false },
    { name: 'Reports', icon: <FileBarChart size={18} />, active: false },
    { name: 'Documents', icon: <FolderOpen size={18} />, active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      <aside className="w-64 bg-blue-900 text-white flex flex-col shadow-lg hidden md:flex">
        <div className="p-6 border-b border-blue-800">
           <h1 className="text-3xl font-bold italic tracking-tighter">BEL</h1>
           <p className="text-xs text-blue-300 mt-1">Manager[cite: 1]</p>
        </div>
        <nav className="flex-1 py-4 flex flex-col gap-1 px-3 text-sm font-medium">
          {sidebarLinks.map((link, index) => (
            <a key={index} href="#" className={`flex items-center gap-3 px-3 py-2.5 rounded transition-colors ${link.active ? 'bg-blue-800 text-white' : 'text-blue-200 hover:bg-blue-800'}`}>
              {link.icon}
              {link.name}[cite: 1]
            </a>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Project Management[cite: 1]</h2>
        
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm text-center">
            <p className="text-xs font-semibold text-gray-500 uppercase">Ongoing[cite: 1]</p>
            <h3 className="text-3xl font-bold text-blue-900">32[cite: 1]</h3>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm text-center">
            <p className="text-xs font-semibold text-gray-500 uppercase">Completed[cite: 1]</p>
            <h3 className="text-3xl font-bold text-blue-900">87[cite: 1]</h3>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm text-center">
            <p className="text-xs font-semibold text-gray-500 uppercase">Pending[cite: 1]</p>
            <h3 className="text-3xl font-bold text-blue-900">6[cite: 1]</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-sm font-bold text-gray-800 mb-4">Project Progress[cite: 1]</h3>
          <div className="flex flex-col gap-5">
            {[
              { name: 'Radar System Upgrade', progress: 80 },
              { name: 'Communication Network', progress: 65 },
              { name: 'Cyber Security Module', progress: 45 },
            ].map((project, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">{project.name}[cite: 1]</span>
                  <span className="text-gray-500">{project.progress}%[cite: 1]</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Manager;