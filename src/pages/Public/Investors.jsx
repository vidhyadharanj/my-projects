import React from 'react';
import { Menu, TrendingUp, ArrowRight, BarChart3 } from 'lucide-react';

const Investors = () => {
  const menuItems = [
    'Financial Results', 'Annual Reports', 'Shareholding Pattern', 
    'Corporate Governance', 'Stock Information', 'AGM / EGM'
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white shadow-sm px-6 py-4 flex flex-col gap-4">
        {/* Simplified header */}
         <nav className="flex gap-6 text-sm font-semibold text-gray-700 mt-4">
           <a href="#" className="hover:text-blue-600">Home</a>
           <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">Investors</a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-0 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-blue-900">Investor Relations[cite: 1]</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Menu */}
            <div className="border-r border-gray-100 p-6 flex flex-col gap-3">
              {menuItems.map((item, index) => (
                <a key={index} href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 py-2 border-b border-gray-50 flex justify-between items-center group">
                  {item}[cite: 1]
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            {/* Right Content (Stock Info & Chart) */}
            <div className="p-8 bg-gray-50/50 flex flex-col items-center justify-center">
              
              {/* Graphic Placeholder */}
              <div className="w-full h-32 flex items-end justify-center gap-2 mb-8 opacity-70">
                <div className="w-6 bg-blue-200 h-10 rounded-t"></div>
                <div className="w-6 bg-blue-300 h-16 rounded-t"></div>
                <div className="w-6 bg-blue-400 h-24 rounded-t"></div>
                <div className="w-6 bg-blue-500 h-20 rounded-t relative">
                     <TrendingUp className="absolute -top-8 -right-4 w-8 h-8 text-blue-600" />
                </div>
                <div className="w-6 bg-blue-600 h-32 rounded-t"></div>
              </div>

              <div className="text-center mb-6 w-full">
                <p className="text-sm text-gray-500 font-semibold mb-1">BEL Stock Update[cite: 1]</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">₹ 320.50[cite: 1]</span>
                  <span className="text-sm font-bold text-green-600 flex items-center">
                    +2.30 (0.72%) <TrendingUp className="w-4 h-4 ml-1" />[cite: 1]
                  </span>
                </div>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded text-sm font-semibold flex items-center gap-2 transition-colors w-full justify-center">
                View Details <ArrowRight className="w-4 h-4" />[cite: 1]
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Investors;