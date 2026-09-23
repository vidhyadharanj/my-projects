import React from 'react';
import { 
  LayoutDashboard, UserCog, Users, FileText, 
  FolderKanban, TrendingUp, FolderOpen, Shield, Settings 
} from 'lucide-react';

const Admin = () => {
  const sidebarLinks = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, active: true },
    { name: 'Admin', icon: <UserCog size={18} />, active: false },
    { name: 'Users', icon: <Users size={18} />, active: false },
    { name: 'Tenders', icon: <FileText size={18} />, active: false },
    { name: 'Projects', icon: <FolderKanban size={18} />, active: false },
    { name: 'Fund Tracking', icon: <TrendingUp size={18} />, active: false },
    { name: 'Documents', icon: <FolderOpen size={18} />, active: false },
    { name: 'Security Logs', icon: <Shield size={18} />, active: false },
    { name: 'Settings', icon: <Settings size={18} />, active: false },
  ];

  const recentActivities = [
    { activity: 'New Vendor Registered', user: 'MSME Tech Pvt Ltd', time: '10:30 AM' },
    { activity: 'Tender BEL/2026/002 Published', user: 'Admin', time: '09:15 AM' },
    { activity: 'Project Status Updated', user: 'Manager', time: '08:40 AM' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col shadow-lg hidden md:flex">
        <div className="p-6 border-b border-blue-800 flex items-center gap-2">
           <h1 className="text-3xl font-bold italic tracking-tighter">BEL</h1>
        </div>
        <nav className="flex-1 py-4 flex flex-col gap-1 px-3 text-sm font-medium">
          {sidebarLinks.map((link, index) => (
            <a 
              key={index} 
              href="#" 
              className={`flex items-center gap-3 px-3 py-2.5 rounded transition-colors ${
                link.active ? 'bg-blue-800 text-white' : 'text-blue-200 hover:bg-blue-800 hover:text-white'
              }`}
            >
              {link.icon}
              {link.name}[cite: 1]
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="bg-white shadow-sm px-8 py-5 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Admin Dashboard[cite: 1]</h2>
        </header>

        <div className="p-8 flex-1 overflow-y-auto">
          
          {/* Top KPI Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Total Users[cite: 1]</p>
              <h3 className="text-2xl font-bold text-blue-900">12,450[cite: 1]</h3>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Active Projects[cite: 1]</p>
              <h3 className="text-2xl font-bold text-blue-900">125[cite: 1]</h3>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Tenders Live[cite: 1]</p>
              <h3 className="text-2xl font-bold text-blue-900">48[cite: 1]</h3>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Funds Tracked[cite: 1]</p>
              <h3 className="text-2xl font-bold text-blue-900">₹2,450 Cr[cite: 1]</h3>
            </div>
          </div>

          {/* Recent Activities Table */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="text-sm font-bold text-gray-800">Recent Activities[cite: 1]</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 border-b border-gray-100">
                    <th className="py-3 px-6 font-semibold">Activity[cite: 1]</th>
                    <th className="py-3 px-6 font-semibold">User[cite: 1]</th>
                    <th className="py-3 px-6 font-semibold">Time[cite: 1]</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {recentActivities.map((row, index) => (
                    <tr key={index} className="border-b border-gray-50 hover:bg-gray-50/50">
                      <td className="py-3 px-6">{row.activity}[cite: 1]</td>
                      <td className="py-3 px-6">{row.user}[cite: 1]</td>
                      <td className="py-3 px-6 text-gray-500">{row.time}[cite: 1]</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Admin;