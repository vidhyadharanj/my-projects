import React from 'react';
import { Menu, Briefcase, FileSignature, ChevronRight } from 'lucide-react';

const Careers = () => {
  const jobs = [
    { title: 'Project Engineer - Electronics', date: 'Posted on 01 Sep 2026' },
    { title: 'Trainee Engineer - Software', date: 'Posted on 30 Aug 2026' },
    { title: 'Officer - Finance', date: 'Posted on 28 Aug 2026' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white shadow-sm px-6 py-4 flex flex-col gap-4">
        {/* Simplified header for brevity */}
        <nav className="flex gap-6 text-sm font-semibold text-gray-700 mt-4">
           <a href="#" className="hover:text-blue-600">Home</a>
           <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">Careers</a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Build Your Career with BEL[cite: 1]</h2>
          <p className="text-gray-600 mb-8">Be a part of India's leading defence electronics company.[cite: 1]</p>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="border border-blue-100 bg-blue-50/30 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors">
              <Briefcase className="w-12 h-12 text-blue-600 mb-3" />
              <span className="font-semibold text-blue-900">Current Openings[cite: 1]</span>
            </div>
            <div className="border border-blue-100 bg-blue-50/30 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors">
              <FileSignature className="w-12 h-12 text-blue-600 mb-3" />
              <span className="font-semibold text-blue-900">Apply Online[cite: 1]</span>
            </div>
          </div>

          {/* Job Listings */}
          <div>
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h3 className="text-lg font-bold text-gray-800">Latest Job Notifications[cite: 1]</h3>
              <button className="bg-blue-600 text-white px-3 py-1 text-xs rounded font-semibold">View All[cite: 1]</button>
            </div>
            
            <div className="flex flex-col gap-3">
              {jobs.map((job, index) => (
                <div key={index} className="flex justify-between items-center p-4 border border-gray-100 rounded hover:border-blue-200 transition-colors">
                  <div>
                    <h4 className="font-semibold text-gray-800">{job.title}[cite: 1]</h4>
                    <p className="text-xs text-gray-500 mt-1">{job.date}[cite: 1]</p>
                  </div>
                  <button className="text-blue-600 border border-blue-200 px-4 py-1.5 rounded text-sm font-medium hover:bg-blue-50">
                    View[cite: 1]
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Careers;