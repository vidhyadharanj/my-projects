import React from 'react';
import { 
  FolderKanban, TrendingUp, FileBarChart, 
  CheckCircle2, ArrowRight, ArrowRightCircle 
} from 'lucide-react';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      <aside className="w-64 bg-blue-900 text-white flex flex-col shadow-lg hidden md:flex">
        <div className="p-6 border-b border-blue-800">
           <h1 className="text-3xl font-bold italic tracking-tighter">BEL</h1>
        </div>
        <nav className="flex-1 py-4 flex flex-col gap-1 px-3 text-sm font-medium">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded transition-colors text-blue-200 hover:bg-blue-800">
            <FolderKanban size={18} /> Projects[cite: 1]
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded transition-colors bg-blue-800 text-white">
            <TrendingUp size={18} /> Fund Tracking[cite: 1]
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded transition-colors text-blue-200 hover:bg-blue-800">
            <FileBarChart size={18} /> Reports[cite: 1]
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-8">Fund Tracking (Blockchain Secured)[cite: 1]</h2>
        
        <div className="bg-white p-10 rounded-lg border border-gray-200 shadow-sm max-w-4xl">
          
          {/* Tracking Flow */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100 mb-3">
                <span className="text-xl font-bold text-blue-600">₹</span>
              </div>
              <p className="text-sm font-semibold text-gray-500 uppercase">Allocation[cite: 1]</p>
              <p className="text-lg font-bold text-blue-900">₹ 500 Cr[cite: 1]</p>
            </div>

            <ArrowRightCircle className="text-gray-300 w-8 h-8" />

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center border border-green-100 mb-3">
                <TrendingUp className="text-green-600 w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-gray-500 uppercase">Utilization[cite: 1]</p>
              <p className="text-lg font-bold text-green-700">₹ 320 Cr[cite: 1]</p>
            </div>

            <ArrowRightCircle className="text-gray-300 w-8 h-8" />

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center border border-orange-100 mb-3">
                <span className="text-xl font-bold text-orange-600">₹</span>
              </div>
              <p className="text-sm font-semibold text-gray-500 uppercase">Remaining[cite: 1]</p>
              <p className="text-lg font-bold text-orange-700">₹ 180 Cr[cite: 1]</p>
            </div>
          </div>

          {/* Blockchain Badges */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              All transactions are recorded on Blockchain[cite: 1]
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Data cannot be altered or tampered[cite: 1]
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Real-time tracking & transparency[cite: 1]
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded text-sm font-semibold flex items-center gap-2 transition-colors">
            View Complete Report <ArrowRight className="w-4 h-4" />[cite: 1]
          </button>
        </div>
      </main>
    </div>
  );
};

export default Projects;