import React from 'react';
import { Search, Bell, User, Menu, Building2, Factory, Users } from 'lucide-react';

const About = () => {
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
          <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">About Us</a>
          <a href="#" className="hover:text-blue-600">Products</a>
          <a href="#" className="hover:text-blue-600">Tenders</a>
          <a href="#" className="hover:text-blue-600">CSR</a>
          <a href="#" className="hover:text-blue-600">Investors</a>
          <a href="#" className="hover:text-blue-600">Careers</a>
          <a href="#" className="hover:text-blue-600">Contact Us</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-8">About BEL</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          {/* Building Illustration Placeholder */}
          <div className="bg-blue-100 rounded-lg p-12 flex justify-center items-center h-64 shadow-inner">
             <Building2 className="w-32 h-32 text-blue-300" strokeWidth={1} />
          </div>
          
          {/* Description */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bharat Electronics Limited (BEL) is a Navratna Public Sector Undertaking under the Ministry of Defence, Government of India.[cite: 1]
            </p>
          </div>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center flex flex-col items-center">
            <Building2 className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-3xl font-bold text-blue-900">65+</h3>
            <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider font-semibold">Years of Excellence[cite: 1]</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center flex flex-col items-center">
            <Factory className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-3xl font-bold text-blue-900">9+</h3>
            <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider font-semibold">Manufacturing Units[cite: 1]</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center flex flex-col items-center">
            <Users className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-3xl font-bold text-blue-900">20,000+</h3>
            <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider font-semibold">Dedicated Workforce[cite: 1]</p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Our Mission[cite: 1]</h3>
          <p className="text-gray-700 italic text-lg leading-relaxed border-l-4 border-blue-600 pl-4">
            "To be a world-class electronics enterprise in the fields of Defence, Homeland Security and Non-Defence, through innovation and quality."[cite: 1]
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;