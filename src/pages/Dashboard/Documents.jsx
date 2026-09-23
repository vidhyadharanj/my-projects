import React from 'react';
import { Folder, Search, FileText, FolderClosed, Users, Shield, Briefcase, FileSignature } from 'lucide-react';

const Documents = () => {
  const folders = [
    { name: 'Defence Projects', color: 'text-blue-500', bg: 'bg-blue-50' },
    { name: 'Research & Development', color: 'text-purple-500', bg: 'bg-purple-50' },
    { name: 'HR & Administration', color: 'text-green-500', bg: 'bg-green-50' },
    { name: 'CSR', color: 'text-yellow-500', bg: 'bg-yellow-50' },
    { name: 'Investors', color: 'text-indigo-500', bg: 'bg-indigo-50' },
    { name: 'Others', color: 'text-gray-500', bg: 'bg-gray-50' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-gray-100 flex items-center gap-2">
           <h1 className="text-3xl font-bold italic tracking-tighter text-blue-900">BEL</h1>
        </div>
        <nav className="flex-1 py-4 flex flex-col gap-1 px-3 text-sm font-medium text-gray-600">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded bg-blue-50 text-blue-700">My Documents[cite: 1]</a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50">Project Files[cite: 1]</a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50">Tender Documents[cite: 1]</a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50">HR Documents[cite: 1]</a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50">Policy Papers[cite: 1]</a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50">Shared with Me[cite: 1]</a>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-gray-800">Document Repository[cite: 1]</h2>
          <div className="relative w-64">
            <input 
              type="text" 
              placeholder="Search files..." 
              className="w-full pl-3 pr-10 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-blue-500"
            />[cite: 1]
            <Search className="absolute right-2 top-1.5 text-gray-400 w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {folders.map((folder, i) => (
            <div key={i} className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:border-blue-300 hover:shadow-md cursor-pointer transition-all flex items-center gap-4">
              <div className={`p-3 rounded-md ${folder.bg}`}>
                <Folder className={`w-6 h-6 ${folder.color}`} fill="currentColor" />
              </div>
              <span className="text-sm font-semibold text-gray-700">{folder.name}[cite: 1]</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Documents;