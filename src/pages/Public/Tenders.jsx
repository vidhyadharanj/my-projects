import React from 'react';
import { Search, Bell, User, Menu, Filter, ArrowRight, Eye } from 'lucide-react';

const Tenders = () => {
  const tenderData = [
    { id: 'BEL/2026/001', title: 'Supply of Radar Units', category: 'Defence', date: '01-09-2026' },
    { id: 'BEL/2026/002', title: 'Communication Equipments', category: 'Defence', date: '30-08-2026' },
    { id: 'BEL/2026/003', title: 'Software Development', category: 'IT', date: '28-08-2026' },
    { id: 'BEL/2026/004', title: 'Electronic Components', category: 'Electronics', date: '25-08-2026' },
  ];

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
          </div>
        </div>

        <nav className="flex gap-6 text-sm font-semibold text-gray-700">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About Us</a>
          <a href="#" className="hover:text-blue-600">Products</a>
          <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">Tenders</a>
          <a href="#" className="hover:text-blue-600">CSR</a>
          <a href="#" className="hover:text-blue-600">Investors</a>
          <a href="#" className="hover:text-blue-600">Careers</a>
          <a href="#" className="hover:text-blue-600">Contact Us</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-blue-900 mb-6">Latest Tenders[cite: 1]</h2>
          
          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="relative w-full md:w-1/2">
              <input 
                type="text" 
                placeholder="Search tender..." 
                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:outline-blue-500 focus:ring-1 focus:ring-blue-500"
              />[cite: 1]
              <Search className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <select className="flex-1 md:w-48 py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white focus:outline-blue-500">
                <option>All Categories</option>[cite: 1]
                <option>Defence</option>
                <option>IT</option>
                <option>Electronics</option>
              </select>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-semibold flex items-center justify-center gap-2 transition-colors">
                <Filter className="w-4 h-4" /> Filter[cite: 1]
              </button>
            </div>
          </div>

          {/* Tenders Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-gray-50 border-y border-gray-200 text-sm text-gray-600">
                  <th className="py-4 px-4 font-semibold">Tender ID[cite: 1]</th>
                  <th className="py-4 px-4 font-semibold">Title[cite: 1]</th>
                  <th className="py-4 px-4 font-semibold">Category[cite: 1]</th>
                  <th className="py-4 px-4 font-semibold">Date[cite: 1]</th>
                  <th className="py-4 px-4 font-semibold text-center">Action[cite: 1]</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {tenderData.map((tender, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-800">{tender.id}[cite: 1]</td>
                    <td className="py-4 px-4 text-gray-700">{tender.title}[cite: 1]</td>
                    <td className="py-4 px-4 text-gray-600">{tender.category}[cite: 1]</td>
                    <td className="py-4 px-4 text-gray-600">{tender.date}[cite: 1]</td>
                    <td className="py-4 px-4 text-center">
                      <button className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded hover:bg-blue-100 transition-colors">
                        View[cite: 1]
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* View All Button */}
          <div className="mt-8 flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded text-sm font-semibold flex items-center gap-2 transition-colors shadow-sm">
              View All Tenders <ArrowRight className="w-4 h-4" />[cite: 1]
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tenders;