import React from 'react';
import { Search, Bell, User, Menu, BookOpen, HeartPulse, Leaf, Wrench } from 'lucide-react';

const CSR = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Top Header / Navigation */}
      <header className="bg-white shadow-sm px-6 py-4 flex flex-col gap-4">
        {/* ... (Standard Header omitted for brevity, identical to previous frames but with 'CSR' active) ... */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-blue-800">
            <h1 className="text-3xl font-bold italic tracking-tighter">BEL</h1>
          </div>
          <div className="flex items-center gap-4">
            <Menu className="w-6 h-6 text-gray-600 cursor-pointer" />
          </div>
        </div>
        <nav className="flex gap-6 text-sm font-semibold text-gray-700">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">CSR</a>
          <a href="#" className="hover:text-blue-600">Careers</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Corporate Social Responsibility[cite: 1]</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
            {/* Image Placeholder */}
            <div className="bg-green-50 rounded-lg h-48 flex items-center justify-center border border-green-100">
              <Leaf className="w-24 h-24 text-green-400" />
            </div>
            
            <div className="flex flex-col items-start gap-4">
              <p className="text-gray-700 leading-relaxed">
                Building a sustainable and inclusive future for India through education, healthcare, environment and community development.[cite: 1]
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-semibold transition-colors">
                Know More[cite: 1]
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6 border-b pb-2">Our Focus Areas[cite: 1]</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: 'Education', icon: <BookOpen className="w-10 h-10 mb-3 text-blue-500" /> },
                { title: 'Healthcare', icon: <HeartPulse className="w-10 h-10 mb-3 text-red-400" /> },
                { title: 'Environment', icon: <Leaf className="w-10 h-10 mb-3 text-green-500" /> },
                { title: 'Skill Development', icon: <Wrench className="w-10 h-10 mb-3 text-yellow-500" /> },
              ].map((area, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 rounded hover:bg-gray-50 cursor-pointer transition-colors">
                  {area.icon}
                  <span className="text-sm font-semibold text-gray-700">{area.title}[cite: 1]</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CSR;