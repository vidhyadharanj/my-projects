import React from 'react';
import { 
  User, Briefcase, Calendar, BookOpen, 
  FolderOpen, Clock, Banknote, UserCircle2
} from 'lucide-react';

const Worker = () => {
  const sidebarLinks = [
    { name: 'My Profile', icon: <User size={18} />, active: true },
    { name: 'Work Assignments', icon: <Briefcase size={18} />, active: false },
    { name: 'Attendance', icon: <Calendar size={18} />, active: false },
    { name: 'Training', icon: <BookOpen size={18} />, active: false },
    { name: 'Documents', icon: <FolderOpen size={18} />, active: false },
    { name: 'Leave', icon: <Clock size={18} />, active: false },
    { name: 'Payroll', icon: <Banknote size={18} />, active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      <aside className="w-64 bg-blue-900 text-white flex flex-col shadow-lg hidden md:flex">
        <div className="p-6 border-b border-blue-800">
           <h1 className="text-3xl font-bold italic tracking-tighter">BEL</h1>
           <p className="text-xs text-blue-300 mt-1">Employee[cite: 1]</p>
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
        <h2 className="text-xl font-bold text-gray-800 mb-6">Employee Profile[cite: 1]</h2>
        
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm max-w-2xl">
          <div className="flex items-center gap-6 mb-8 border-b border-gray-100 pb-6">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100 text-blue-300">
              <UserCircle2 size={64} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-900">R. Karthik[cite: 1]</h3>
              <p className="text-gray-600 font-medium">Electronics Engineer[cite: 1]</p>
              <p className="text-sm text-gray-500">BEL - Bengaluru[cite: 1]</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-4 text-sm mb-8">
            <div className="text-gray-500">Employee ID</div>
            <div className="font-semibold text-gray-800">: BEL24567[cite: 1]</div>
            
            <div className="text-gray-500">Department</div>
            <div className="font-semibold text-gray-800">: Defence Systems[cite: 1]</div>
            
            <div className="text-gray-500">Joining Date</div>
            <div className="font-semibold text-gray-800">: 12-06-2021[cite: 1]</div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-semibold transition-colors">
            View Full Details[cite: 1]
          </button>
        </div>
      </main>
    </div>
  );
};

export default Worker;